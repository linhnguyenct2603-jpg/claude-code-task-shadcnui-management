"use client"

import { useEffect, useState } from "react"
import { Plus, Pencil } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import type { Customer } from "@/modules/customers/services/types/customer-types"

const customerFormSchema = z.object({
  name: z.string().min(1, "Họ tên là bắt buộc"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(1, "Số điện thoại là bắt buộc"),
  message: z.string().optional(),
})

type FormData = z.infer<typeof customerFormSchema>

interface CustomerFormSheetProps {
  customer?: Customer
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: FormData) => void
  loading?: boolean
  mode: "add" | "edit"
}

function generateCustomerId(): string {
  return `CUST-${Date.now()}-${Math.floor(Math.random() * 1000)}`
}

export function CustomerFormSheet({
  customer,
  open,
  onOpenChange,
  onSubmit,
  loading = false,
  mode,
}: CustomerFormSheetProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (open) {
      if (mode === "edit" && customer) {
        setFormData({
          name: customer.name,
          email: customer.email,
          phone: customer.phone,
          message: customer.message ?? "",
        })
      } else {
        setFormData({ name: "", email: "", phone: "", message: "" })
      }
      setErrors({})
    }
  }, [open, mode, customer])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const validated = customerFormSchema.parse(formData)
      setErrors({})
      onSubmit(validated)
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        err.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as string] = issue.message
          }
        })
        setErrors(newErrors)
      }
    }
  }

  const title = mode === "add" ? "Thêm khách hàng" : "Sửa khách hàng"
  const trigger = mode === "add" ? (
    <Button size="sm" className="cursor-pointer">
      <Plus className="size-4" />
      Thêm khách hàng
    </Button>
  ) : null

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {mode === "add" ? (
        <SheetTrigger asChild>{trigger}</SheetTrigger>
      ) : (
        <Button variant="ghost" size="sm" className="w-full justify-start cursor-pointer" onClick={() => onOpenChange(true)}>
          <Pencil className="mr-2 size-4" />
          Sửa
        </Button>
      )}
      <SheetContent className="sm:max-w-[480px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">
              Họ tên <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Nhập họ tên..."
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Số điện thoại <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="0xxxxxxxxx"
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Nội dung tư vấn</Label>
            <Textarea
              id="message"
              placeholder="Nhập nội dung tư vấn..."
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              rows={4}
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="cursor-pointer"
            >
              Hủy
            </Button>
            <Button type="submit" disabled={loading} className="cursor-pointer">
              {loading ? "Đang lưu..." : mode === "add" ? "Thêm mới" : "Lưu thay đổi"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  )
}

export { generateCustomerId }
