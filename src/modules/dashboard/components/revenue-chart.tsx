"use client"

import { useEffect, useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { TrendingUp, DollarSign, BarChart3, ArrowUpRight } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { subscribeToRevenues } from "../services/revenue-services"
import type { Revenue } from "../services/types/revenue-types"

const MONTH_NAMES = [
  "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5",
  "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10",
  "Tháng 11", "Tháng 12",
]

const CHART_COLORS = [
  "#3b82f6", // blue
  "#8b5cf6", // violet
  "#10b981", // emerald
  "#f59e0b", // amber
  "#ef4444", // red
  "#06b6d4", // cyan
  "#ec4899", // pink
  "#84cc16", // lime
  "#f97316", // orange
  "#6366f1", // indigo
  "#14b8a6", // teal
  "#a855f7", // purple
]

function formatVND(value: number): string {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}Tr`
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(0)}K`
  }
  return value.toLocaleString("vi-VN")
}

function formatVNDLong(value: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value)
}

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ value: number; payload: Revenue & { monthName: string } }>
  label?: string
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload?.length) return null
  const data = payload[0].payload
  return (
    <div className="rounded-lg border bg-background px-3 py-2 shadow-sm">
      <p className="text-sm font-medium">{data.monthName} {data.year}</p>
      <p className="text-sm text-primary font-semibold mt-1">
        {formatVNDLong(data.revenue)}
      </p>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string
  subtitle: string
  icon: React.ElementType
  trend?: string
  trendUp?: boolean
}

function StatCard({ title, value, subtitle, icon: Icon, trend, trendUp }: StatCardProps) {
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
            <ArrowUpRight className={`h-3 w-3 ${!trendUp ? "rotate-90" : ""}`} />
            {trend}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function RevenueChart() {
  const [data, setData] = useState<Revenue[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = subscribeToRevenues(
      (revenues) => {
        const sorted = [...revenues].sort((a, b) => a.month - b.month)
        setData(sorted)
        setLoading(false)
      },
      (err) => {
        setError(err.message)
        setLoading(false)
      }
    )

    return unsubscribe
  }, [])

  const chartData = data.map((r) => ({
    ...r,
    monthName: MONTH_NAMES[r.month - 1] ?? `Tháng ${r.month}`,
  }))

  const total = data.reduce((sum, r) => sum + r.revenue, 0)
  const avg = data.length > 0 ? total / data.length : 0
  const max = data.length > 0 ? Math.max(...data.map((r) => r.revenue)) : 0
  const min = data.length > 0 ? Math.min(...data.map((r) => r.revenue)) : 0

  // Growth from first to last month
  const growth =
    data.length >= 2
      ? (((data[data.length - 1].revenue - data[0].revenue) / data[0].revenue) * 100).toFixed(1)
      : "0"

  const formatYAxis = (value: number) => formatVND(value)

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-24" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-32 mb-2" />
                <Skeleton className="h-3 w-20" />
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <Skeleton className="h-5 w-48" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[300px] w-full" />
          </CardContent>
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
          value={formatVNDLong(total)}
          subtitle={`${data.length} tháng đã ghi nhận`}
          icon={DollarSign}
          trend={`+${growth}% so với tháng đầu`}
          trendUp={true}
        />
        <StatCard
          title="Doanh thu TB"
          value={formatVNDLong(avg)}
          subtitle="Trung bình mỗi tháng"
          icon={TrendingUp}
        />
        <StatCard
          title="Tháng cao nhất"
          value={formatVNDLong(max)}
          subtitle={chartData.find((r) => r.revenue === max)?.monthName ?? ""}
          icon={ArrowUpRight}
        />
        <StatCard
          title="Tháng thấp nhất"
          value={formatVNDLong(min)}
          subtitle={chartData.find((r) => r.revenue === min)?.monthName ?? ""}
          icon={BarChart3}
        />
      </div>

      {/* Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Biểu đồ doanh thu hàng tháng
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 rounded-md border border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20 dark:border-yellow-900 px-3 py-2 text-sm text-yellow-600 dark:text-yellow-400">
              Chế độ offline — hiển thị dữ liệu mẫu. Lỗi: {error}
            </div>
          )}
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  className="stroke-muted"
                />
                <XAxis
                  dataKey="monthName"
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                />
                <YAxis
                  tickFormatter={formatYAxis}
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  className="text-muted-foreground"
                  width={60}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "hsl(var(--muted))", opacity: 0.5 }}
                />
                <Bar
                  dataKey="revenue"
                  radius={[6, 6, 0, 0]}
                  maxBarSize={60}
                  animationDuration={800}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={CHART_COLORS[(entry.month - 1) % CHART_COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
