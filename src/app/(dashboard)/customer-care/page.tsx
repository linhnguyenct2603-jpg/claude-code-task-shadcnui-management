"use client"

import { useEffect, useState } from "react"
import {
  CheckCircle,
  Clock,
  AlertTriangle,
  Phone,
  FileText,
  UserCheck,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DataTable } from "@/modules/customer-care/components/data-table"
import {
  deleteCustomerCare,
  getCustomerCares,
  getCustomerCareStats,
} from "@/modules/customer-care/services/customer-care-services"
import type { CustomerCareItem } from "@/modules/customer-care/services/types/customer-care-types"

export default function CustomerCarePage() {
  const [items, setItems] = useState<CustomerCareItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getCustomerCares()
        setItems(data)
      } catch (error) {
        console.error("Failed to load customer care data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleAddItem = (newItem: CustomerCareItem) => {
    setItems((prev) => [newItem, ...prev])
  }

  const handleDeleteItem = async (id: string) => {
    try {
      await deleteCustomerCare(id)
      setItems((prev) => prev.filter((item) => item.id !== id))
    } catch (error) {
      console.error("Failed to delete customer care:", error)
    }
  }

  const stats = getCustomerCareStats(items)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-muted-foreground">Đang tải dữ liệu...</div>
      </div>
    )
  }

  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col gap-2 px-4 md:px-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Chăm sóc khách hàng
        </h1>
        <p className="text-muted-foreground">
          Quản lý và theo dõi các phiếu chăm sóc khách hàng
        </p>
      </div>

      {/* Mobile view placeholder */}
      <div className="md:hidden px-4 md:px-6">
        <div className="flex items-center justify-center h-96 border rounded-lg bg-muted/20">
          <div className="text-center p-8">
            <h3 className="text-lg font-semibold mb-2">
              Chăm sóc khách hàng
            </h3>
            <p className="text-muted-foreground">
              Vui lòng sử dụng màn hình lớn hơn để xem đầy đủ giao diện.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden h-full flex-1 flex-col space-y-6 px-4 md:px-6 md:flex">
        {/* Stats Cards */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Tổng phiếu
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.total}</span>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <FileText className="size-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Mới
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.new}</span>
                  </div>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3">
                  <AlertTriangle className="size-6 text-blue-600 dark:text-blue-300" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Đang xử lý
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">
                      {stats.inProgress}
                    </span>
                  </div>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900 rounded-lg p-3">
                  <Clock className="size-6 text-yellow-600 dark:text-yellow-300" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Đã giải quyết
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.resolved}</span>
                  </div>
                </div>
                <div className="bg-green-100 dark:bg-green-900 rounded-lg p-3">
                  <CheckCircle className="size-6 text-green-600 dark:text-green-300" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Khẩn cấp
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.urgent}</span>
                  </div>
                </div>
                <div className="bg-red-100 dark:bg-red-900 rounded-lg p-3">
                  <Phone className="size-6 text-red-600 dark:text-red-300" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Ưu tiên cao
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">
                      {stats.highPriority}
                    </span>
                  </div>
                </div>
                <div className="bg-orange-100 dark:bg-orange-900 rounded-lg p-3">
                  <UserCheck className="size-6 text-orange-600 dark:text-orange-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Danh sách chăm sóc khách hàng</CardTitle>
            <CardDescription>
              Xem, lọc và quản lý tất cả các phiếu chăm sóc khách hàng
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              data={items}
              onAddCustomerCare={handleAddItem}
              onDeleteCustomerCare={handleDeleteItem}
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
