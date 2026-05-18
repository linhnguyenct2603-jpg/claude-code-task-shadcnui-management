"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  DollarSign,
  Download,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  subscribeToRevenues,
  subscribeToRevenuesByYear,
  getAvailableYears,
} from "../services/revenue-services"
import type { Revenue } from "../services/types/revenue-types"

const MONTH_NAMES = [
  "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5",
  "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10",
  "Tháng 11", "Tháng 12",
]

const BAR_COLORS_CURRENT = "#3b82f6"
const BAR_COLORS_PREV = "#94a3b8"

function formatVND(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}Tr`
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`
  return value.toLocaleString("vi-VN")
}

function formatVNDLong(value: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value)
}

function formatGrowth(current: number, prev: number): { value: string; up: boolean } {
  if (prev === 0) return { value: "—", up: true }
  const diff = ((current - prev) / prev) * 100
  return {
    value: `${diff >= 0 ? "+" : ""}${diff.toFixed(1)}%`,
    up: diff >= 0,
  }
}

// ─── Export helpers ──────────────────────────────────────────────

function buildExportRows(
  chartData: ChartDataPoint[],
  compareMode: boolean
): Array<Record<string, string | number>> {
  if (!compareMode) {
    return chartData.map((d) => ({
      Tháng: d.monthName,
      Năm: d.year,
      "Doanh thu (VND)": d.revenue,
    }))
  }
  return chartData.map((d) => ({
    Tháng: d.monthName,
    "Năm hiện tại": d.year,
    "Doanh thu năm hiện tại (VND)": d.revenue,
    "Năm trước": d.prevYear ?? "",
    "Doanh thu năm trước (VND)": d.prevRevenue ?? 0,
    "Chênh lệch (VND)": d.revenue - (d.prevRevenue ?? 0),
  }))
}

function arrayToCSV(rows: Array<Record<string, string | number>>): string {
  if (rows.length === 0) return ""
  const headers = Object.keys(rows[0])
  const csvRows = [
    headers.join(","),
    ...rows.map((row) =>
      headers
        .map((h) => {
          const val = row[h]
          const str = String(val)
          return str.includes(",") || str.includes('"')
            ? `"${str.replace(/"/g, '""')}"`
            : str
        })
        .join(",")
    ),
  ]
  return csvRows.join("\n")
}

function downloadCSV(csv: string, filename: string) {
  const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

// ─── Types ───────────────────────────────────────────────────────

interface ChartDataPoint {
  month: number
  monthName: string
  year: number
  revenue: number
  prevYear?: number
  prevRevenue?: number
}

interface StatCardProps {
  title: string
  value: string
  subtitle: string
  icon: React.ElementType
  trend?: string
  trendUp?: boolean
  isGrowth?: boolean
}

function StatCard({ title, value, subtitle, icon: Icon, trend, trendUp, isGrowth }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        {trend && (
          <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${trendUp ? "text-green-500" : "text-red-500"}`}>
            {isGrowth ? (
              <TrendingUp className={`h-3 w-3 ${trendUp ? "" : "rotate-180"}`} />
            ) : trendUp ? (
              <ArrowUpRight className="h-3 w-3" />
            ) : (
              <ArrowDownRight className="h-3 w-3" />
            )}
            {trend}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// ─── Main component ──────────────────────────────────────────────

export function RevenueChart() {
  const [allData, setAllData] = useState<Revenue[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState<number>(2025)
  const [compareMode, setCompareMode] = useState(false)
  const unsubCurrentRef = useRef<(() => void) | null>(null)
  const unsubPrevRef = useRef<(() => void) | null>(null)

  // Load all revenues for year list + comparison
  useEffect(() => {
    const unsub = subscribeToRevenues(
      (data) => {
        setAllData(data)
        setLoading(false)
      },
      (err) => {
        setError(err.message)
        setLoading(false)
      }
    )
    return unsub
  }, [])

  // Year filter: subscribe to selected year
  useEffect(() => {
    unsubCurrentRef.current?.()
    const unsub = subscribeToRevenuesByYear(
      selectedYear,
      () => {}, // data handled via allData + prevYear
      () => {}
    )
    unsubCurrentRef.current = unsub
    return () => unsubCurrentRef.current?.()
  }, [selectedYear])

  const availableYears = useMemo(() => getAvailableYears(allData), [allData])
  const defaultYear = availableYears[0] ?? 2025

  useEffect(() => {
    if (availableYears.length > 0 && selectedYear !== defaultYear) return
    if (availableYears.length > 0) {
      setSelectedYear(defaultYear)
    }
  }, [availableYears, defaultYear])

  const prevYear = selectedYear - 1

  const chartData = useMemo((): ChartDataPoint[] => {
    if (!compareMode) {
      return allData
        .filter((r) => r.year === selectedYear)
        .map((r) => ({
          month: r.month,
          monthName: MONTH_NAMES[r.month - 1] ?? `Tháng ${r.month}`,
          year: r.year,
          revenue: r.revenue,
        }))
    }

    const currentMap = new Map(
      allData.filter((r) => r.year === selectedYear).map((r) => [r.month, r])
    )
    const prevMap = new Map(
      allData.filter((r) => r.year === prevYear).map((r) => [r.month, r])
    )

    const allMonths = new Set([...currentMap.keys(), ...prevMap.keys()])
    return Array.from(allMonths)
      .sort((a, b) => a - b)
      .map((month) => {
        const current = currentMap.get(month)
        const prev = prevMap.get(month)
        return {
          month,
          monthName: MONTH_NAMES[month - 1] ?? `Tháng ${month}`,
          year: current?.year ?? selectedYear,
          revenue: current?.revenue ?? 0,
          prevYear: prev?.year,
          prevRevenue: prev?.revenue,
        }
      })
  }, [allData, selectedYear, compareMode, prevYear])

  // Stats
  const stats = useMemo(() => {
    const total = chartData.reduce((s, d) => s + d.revenue, 0)
    const avg = chartData.length > 0 ? total / chartData.length : 0
    const maxItem = chartData.reduce(
      (best, d) => (!best || d.revenue > best.revenue ? d : best),
      chartData[0]
    )
    const minItem = chartData.reduce(
      (best, d) => (!best || d.revenue < best.revenue ? d : best),
      chartData[0]
    )

    // YoY stats
    const prevChartData = allData.filter((r) => r.year === prevYear)
    const prevTotal = prevChartData.reduce((s, r) => s + r.revenue, 0)
    const growth = formatGrowth(total, prevTotal)

    return { total, avg, maxItem, minItem, prevTotal, growth }
  }, [chartData, allData, prevYear])

  const handleExport = useCallback(() => {
    const rows = buildExportRows(chartData, compareMode)
    const csv = arrayToCSV(rows)
    const suffix = compareMode ? `${selectedYear}-vs-${prevYear}` : String(selectedYear)
    downloadCSV(csv, `doanh-thu-${suffix}.csv`)
  }, [chartData, compareMode, selectedYear, prevYear])

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader className="pb-2"><Skeleton className="h-4 w-24" /></CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-32 mb-2" />
                <Skeleton className="h-3 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader><Skeleton className="h-5 w-48" /></CardHeader>
          <CardContent><Skeleton className="h-[350px] w-full" /></CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Stat Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Tổng doanh thu"
          value={formatVNDLong(stats.total)}
          subtitle={`${selectedYear} · ${chartData.length} tháng`}
          icon={DollarSign}
          trend={
            compareMode
              ? `${stats.growth.value} so với ${prevYear}`
              : undefined
          }
          trendUp={stats.growth.up}
          isGrowth={compareMode}
        />
        <StatCard
          title="Doanh thu TB"
          value={formatVNDLong(stats.avg)}
          subtitle="Trung bình mỗi tháng"
          icon={TrendingUp}
          trend={
            compareMode
              ? `Năm ${prevYear}: ${formatVNDLong(stats.prevTotal)}`
              : undefined
          }
          trendUp={stats.growth.up}
        />
        <StatCard
          title="Tháng cao nhất"
          value={formatVNDLong(stats.maxItem?.revenue ?? 0)}
          subtitle={stats.maxItem ? `${stats.maxItem.monthName} ${stats.maxItem.year}` : "—"}
          icon={ArrowUpRight}
        />
        <StatCard
          title="Tháng thấp nhất"
          value={formatVNDLong(stats.minItem?.revenue ?? 0)}
          subtitle={stats.minItem ? `${stats.minItem.monthName} ${stats.minItem.year}` : "—"}
          icon={BarChart3}
        />
      </div>

      {/* Bar Chart */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Biểu đồ doanh thu
            </CardTitle>
            <div className="flex flex-wrap items-center gap-3">
              {/* Year filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="cursor-pointer">
                    {selectedYear}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {availableYears.map((y) => (
                    <DropdownMenuItem
                      key={y}
                      onClick={() => setSelectedYear(y)}
                      className={y === selectedYear ? "font-semibold" : ""}
                    >
                      {y}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Compare toggle */}
              <div className="flex items-center gap-2">
                <Switch
                  id="compare-mode"
                  checked={compareMode}
                  onCheckedChange={setCompareMode}
                />
                <Label htmlFor="compare-mode" className="text-sm cursor-pointer">
                  So sánh {prevYear}
                </Label>
              </div>

              {/* Export */}
              <Button variant="outline" size="sm" onClick={handleExport} className="cursor-pointer">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {error && (
            <div className="mb-4 rounded-md border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-900 px-3 py-2 text-sm text-yellow-600 dark:text-yellow-400">
              Chế độ offline — hiển thị dữ liệu mẫu. Lỗi: {error}
            </div>
          )}

          <div className="h-[380px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {compareMode ? (
                <ComposedChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                  <XAxis
                    dataKey="monthName"
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                    className="text-muted-foreground"
                  />
                  <YAxis
                    tickFormatter={formatVND}
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                    className="text-muted-foreground"
                    width={60}
                  />
                  <Tooltip
                    formatter={(value: number | undefined, name: string | undefined) => [
                      value !== undefined ? formatVNDLong(value) : "—",
                      name === "revenue" ? `${selectedYear}` : `${prevYear}`,
                    ]}
                    labelFormatter={(label, payload) => {
                      if (!payload?.length) return label
                      const d = payload[0]?.payload as ChartDataPoint
                      return d ? `${d.monthName} ${d.year}` : label
                    }}
                  />
                  <Legend
                    formatter={(value) =>
                      value === "revenue" ? `Năm ${selectedYear}` : `Năm ${prevYear}`
                    }
                  />
                  <Bar dataKey="revenue" name="revenue" fill={BAR_COLORS_CURRENT} radius={[6, 6, 0, 0]} maxBarSize={40} />
                  <Bar dataKey="prevRevenue" name="prevRevenue" fill={BAR_COLORS_PREV} radius={[6, 6, 0, 0]} maxBarSize={40} />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke={BAR_COLORS_CURRENT}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </ComposedChart>
              ) : (
                <BarChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                  <XAxis
                    dataKey="monthName"
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                    className="text-muted-foreground"
                  />
                  <YAxis
                    tickFormatter={formatVND}
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                    className="text-muted-foreground"
                    width={60}
                  />
                  <Tooltip
                    formatter={(value: number | undefined) => [
                      value !== undefined ? formatVNDLong(value) : "—",
                      "Doanh thu",
                    ]}
                    labelFormatter={(label, payload) => {
                      if (!payload?.length) return label
                      const d = payload[0]?.payload as ChartDataPoint
                      return d ? `${d.monthName} ${d.year}` : label
                    }}
                  />
                  <Bar
                    dataKey="revenue"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={60}
                    animationDuration={800}
                  >
                    {chartData.map((entry) => (
                      <Cell key={entry.month} fill={BAR_COLORS_CURRENT} />
                    ))}
                  </Bar>
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
