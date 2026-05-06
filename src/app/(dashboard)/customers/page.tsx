"use client"

import { useCallback, useEffect, useState } from "react"
import { Users } from "lucide-react"
import { toast } from "sonner"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { buildColumns } from "@/modules/customers/components/columns"
import { DataTable } from "@/modules/customers/components/data-table"
import { CustomerDetailSheet } from "@/modules/customers/components/customer-detail-sheet"
import { CustomerFormSheet, generateCustomerId } from "@/modules/customers/components/customer-form-sheet"
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
} from "@/modules/customers/services/customer-services"
import type { Customer } from "@/modules/customers/services/types/customer-types"

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(true)

  // Detail sheet state
  const [detailOpen, setDetailOpen] = useState(false)
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)

  // Form sheet state (add/edit)
  const [formOpen, setFormOpen] = useState(false)
  const [formMode, setFormMode] = useState<"add" | "edit">("add")
  const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null)
  const [formLoading, setFormLoading] = useState(false)

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getCustomers()
        setCustomers(data)
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const handleViewCustomer = useCallback((customer: Customer) => {
    setSelectedCustomer(customer)
    setDetailOpen(true)
  }, [])

  const handleEditCustomer = useCallback((customer: Customer) => {
    setEditingCustomer(customer)
    setFormMode("edit")
    setFormOpen(true)
  }, [])

  const handleAddCustomer = useCallback(() => {
    setEditingCustomer(null)
    setFormMode("add")
    setFormOpen(true)
  }, [])

  const handleFormSubmit = useCallback(
    async (data: { name: string; email: string; phone: string; message?: string }) => {
      setFormLoading(true)
      try {
        if (formMode === "add") {
          const newCustomer: Customer = {
            id: generateCustomerId(),
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            createdAt: new Date().toISOString(),
          }
          await createCustomer(newCustomer)
          setCustomers((prev) => [newCustomer, ...prev])
          toast.success("Thêm khách hàng thành công!")
        } else if (editingCustomer) {
          await updateCustomer(editingCustomer.id, {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
          })
          setCustomers((prev) =>
            prev.map((c) =>
              c.id === editingCustomer.id ? { ...c, ...data } : c
            )
          )
          toast.success("Cập nhật khách hàng thành công!")
        }
        setFormOpen(false)
        setEditingCustomer(null)
      } catch {
        toast.error("Có lỗi xảy ra. Vui lòng thử lại.")
      } finally {
        setFormLoading(false)
      }
    },
    [formMode, editingCustomer]
  )

  const handleDeleteCustomer = useCallback(async (customerId: string) => {
    try {
      await deleteCustomer(customerId)
      setCustomers((prev) => prev.filter((c) => c.id !== customerId))
      toast.success("Xóa khách hàng thành công!")
    } catch {
      toast.error("Không thể xóa khách hàng. Vui lòng thử lại.")
    }
  }, [])

  const handleUpdateCustomer = useCallback(
    async (customerId: string, data: Partial<Customer>) => {
      await updateCustomer(customerId, data)
      setCustomers((prev) =>
        prev.map((c) => (c.id === customerId ? { ...c, ...data } : c))
      )
    },
    []
  )

  const columns = buildColumns({
    onUpdate: handleUpdateCustomer,
    onDelete: handleDeleteCustomer,
    onView: handleViewCustomer,
    onEdit: handleEditCustomer,
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-muted-foreground">Đang tải dữ liệu...</div>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-2 px-4 md:px-6">
        <h1 className="text-2xl font-bold tracking-tight">Quản lý khách hàng tư vấn</h1>
        <p className="text-muted-foreground">
          Quản lý danh sách khách hàng đăng ký tư vấn từ Firestore.
        </p>
      </div>

      <div className="h-full flex-1 flex-col space-y-6 px-4 md:px-6 md:flex">
        {/* Stats Card */}
        <div className="grid gap-4 grid-cols-1">
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Tổng khách hàng</p>
                  <span className="text-2xl font-bold">{customers.length}</span>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <Users className="size-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Danh sách khách hàng</CardTitle>
            <CardDescription>
              Xem, tìm kiếm và quản lý thông tin khách hàng đăng ký tư vấn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              data={customers}
              columns={columns}
              onAddCustomer={handleAddCustomer}
            />
          </CardContent>
        </Card>
      </div>

      {/* Detail Sheet */}
      <CustomerDetailSheet
        customer={selectedCustomer}
        open={detailOpen}
        onOpenChange={(open) => {
          setDetailOpen(open)
          if (!open) setSelectedCustomer(null)
        }}
      />

      {/* Form Sheet (Add / Edit) */}
      <CustomerFormSheet
        customer={editingCustomer ?? undefined}
        mode={formMode}
        open={formOpen}
        onOpenChange={(open) => {
          setFormOpen(open)
          if (!open) setEditingCustomer(null)
        }}
        onSubmit={handleFormSubmit}
        loading={formLoading}
      />
    </>
  )
}
