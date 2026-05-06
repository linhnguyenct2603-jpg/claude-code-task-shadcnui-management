"use client"

import { format } from "date-fns"
import { vi } from "date-fns/locale"
import { Calendar, Mail, MessageSquare, Phone, User } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import type { Customer } from "@/modules/customers/services/types/customer-types"

interface CustomerDetailSheetProps {
  customer: Customer | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CustomerDetailSheet({
  customer,
  open,
  onOpenChange,
}: CustomerDetailSheetProps) {
  const formatDate = (value: unknown) => {
    if (!value) return "-"
    try {
      return format(new Date(value as string | number | Date), "dd/MM/yyyy HH:mm", { locale: vi })
    } catch {
      return "-"
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-[480px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Chi tiết khách hàng</SheetTitle>
        </SheetHeader>

        {customer && (
          <div className="mt-6 space-y-6">
            {/* Avatar + Name */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <User className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="text-lg font-semibold">{customer.name}</p>
                <p className="text-sm text-muted-foreground">Mã: {customer.id}</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* Email */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </div>
              <p className="text-sm font-medium pl-6">{customer.email}</p>
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Số điện thoại</span>
              </div>
              <p className="text-sm font-medium pl-6">{customer.phone}</p>
            </div>

            {/* Created At */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Ngày đăng ký</span>
              </div>
              <p className="text-sm font-medium pl-6">{formatDate(customer.createdAt)}</p>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MessageSquare className="h-4 w-4" />
                <span>Nội dung tư vấn</span>
              </div>
              <div className="pl-6">
                {customer.message ? (
                  <p className="text-sm rounded-md border bg-muted/30 p-3">
                    {customer.message}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground italic">Không có nội dung</p>
                )}
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
