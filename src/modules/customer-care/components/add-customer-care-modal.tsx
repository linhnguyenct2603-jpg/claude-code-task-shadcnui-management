"use client"

import { useState } from "react"
import { Loader2, Plus } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import {
  assignedStaff,
  carePriorities,
  careStatuses,
  careTypes,
} from "@/modules/customer-care/services/customer-care-mock-data"
import { createCustomerCare } from "@/modules/customer-care/services/customer-care-services"
import type { CustomerCareItem } from "@/modules/customer-care/services/types/customer-care-types"

const customerCareFormSchema = z.object({
  customerName: z.string().min(1, "Tên khách hàng là bắt buộc"),
  customerPhone: z.string().min(1, "Số điện thoại là bắt buộc"),
  customerEmail: z.string().email("Email không hợp lệ").optional().or(z.literal("")),
  careType: z.string().min(1, "Loại chăm sóc là bắt buộc"),
  status: z.string(),
  priority: z.string(),
  assignedTo: z.string().min(1, "Nhân viên phụ trách là bắt buộc"),
  notes: z.string().optional(),
})

type CustomerCareFormData = z.infer<typeof customerCareFormSchema>

const defaultFormData: CustomerCareFormData = {
  customerName: "",
  customerPhone: "",
  customerEmail: "",
  careType: "consultation",
  status: "new",
  priority: "normal",
  assignedTo: assignedStaff[0],
  notes: "",
}

interface AddCustomerCareModalProps {
  onAddCustomerCare?: (item: CustomerCareItem) => void
  trigger?: React.ReactNode
}

export function AddCustomerCareModal({
  onAddCustomerCare,
  trigger,
}: AddCustomerCareModalProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<CustomerCareFormData>(defaultFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      customerCareFormSchema.parse(formData)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as string] = issue.message
          }
        })
        setErrors(newErrors)
      }
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const createdAt = new Date().toISOString()

      // Save to Firestore
      const docId = await createCustomerCare({
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        customerEmail: formData.customerEmail || undefined,
        careType: formData.careType,
        status: formData.status,
        priority: formData.priority,
        assignedTo: formData.assignedTo,
        notes: formData.notes || undefined,
        createdAt,
        updatedAt: createdAt,
        resolvedAt: undefined,
      })

      // Optimistic update local state with real Firestore document ID
      const newItem: CustomerCareItem = {
        id: docId,
        customerName: formData.customerName,
        customerPhone: formData.customerPhone,
        customerEmail: formData.customerEmail || undefined,
        careType: formData.careType,
        status: formData.status,
        priority: formData.priority,
        assignedTo: formData.assignedTo,
        notes: formData.notes || undefined,
        createdAt,
        updatedAt: createdAt,
        resolvedAt: undefined,
      }
      onAddCustomerCare?.(newItem)

      setFormData(defaultFormData)
      setOpen(false)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      console.error("Failed to save customer care:", message)
      setErrors({ form: `Lưu thất bại: ${message}` })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    setFormData(defaultFormData)
    setErrors({})
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="default" size="sm" className="cursor-pointer">
            <Plus className="w-4 h-4" />
            Thêm mới
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Thêm mới chăm sóc khách hàng</DialogTitle>
          <DialogDescription>
            Điền thông tin bên dưới để tạo phiếu chăm sóc khách hàng mới.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form-level error */}
          {errors.form && (
            <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950 p-2 rounded">
              {errors.form}
            </p>
          )}

          {/* Customer Name */}
          <div className="space-y-2">
            <Label htmlFor="customerName">
              Tên khách hàng <span className="text-red-500">*</span>
            </Label>
            <Input
              id="customerName"
              placeholder="Nhập tên khách hàng..."
              value={formData.customerName}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  customerName: e.target.value,
                }))
              }
              className={errors.customerName ? "border-red-500" : ""}
              disabled={isSubmitting}
            />
            {errors.customerName && (
              <p className="text-sm text-red-500">{errors.customerName}</p>
            )}
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="customerPhone">
                Số điện thoại <span className="text-red-500">*</span>
              </Label>
              <Input
                id="customerPhone"
                placeholder="090xxxxxxx"
                value={formData.customerPhone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    customerPhone: e.target.value,
                  }))
                }
                className={errors.customerPhone ? "border-red-500" : ""}
                disabled={isSubmitting}
              />
              {errors.customerPhone && (
                <p className="text-sm text-red-500">{errors.customerPhone}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="customerEmail">Email</Label>
              <Input
                id="customerEmail"
                type="email"
                placeholder="email@example.com"
                value={formData.customerEmail}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    customerEmail: e.target.value,
                  }))
                }
                className={errors.customerEmail ? "border-red-500" : ""}
                disabled={isSubmitting}
              />
              {errors.customerEmail && (
                <p className="text-sm text-red-500">{errors.customerEmail}</p>
              )}
            </div>
          </div>

          {/* Care Type */}
          <div className="space-y-2">
            <Label htmlFor="careType">
              Loại chăm sóc <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.careType}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, careType: value }))
              }
              disabled={isSubmitting}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn loại chăm sóc" />
              </SelectTrigger>
              <SelectContent>
                {careTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex items-center">
                      {type.icon && (
                        <type.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                      )}
                      {type.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Status and Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="status">Trạng thái</Label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, status: value }))
                }
                disabled={isSubmitting}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  {careStatuses.map((status) => (
                    <SelectItem key={status.value} value={status.value}>
                      <div className="flex items-center">
                        {status.icon && (
                          <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        {status.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="priority">Ưu tiên</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, priority: value }))
                }
                disabled={isSubmitting}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Chọn mức ưu tiên" />
                </SelectTrigger>
                <SelectContent>
                  {carePriorities.map((priority) => (
                    <SelectItem key={priority.value} value={priority.value}>
                      {priority.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Assigned To */}
          <div className="space-y-2">
            <Label htmlFor="assignedTo">
              Nhân viên phụ trách <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.assignedTo}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, assignedTo: value }))
              }
              disabled={isSubmitting}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn nhân viên" />
              </SelectTrigger>
              <SelectContent>
                {assignedStaff.map((staff) => (
                  <SelectItem key={staff} value={staff}>
                    {staff}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Ghi chú</Label>
            <Textarea
              id="notes"
              placeholder="Nhập ghi chú hoặc mô tả yêu cầu của khách hàng..."
              value={formData.notes}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, notes: e.target.value }))
              }
              rows={3}
              disabled={isSubmitting}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="cursor-pointer"
              disabled={isSubmitting}
            >
              Hủy
            </Button>
            <Button type="submit" className="cursor-pointer" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Đang lưu...
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4 mr-2" />
                  Tạo mới
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
