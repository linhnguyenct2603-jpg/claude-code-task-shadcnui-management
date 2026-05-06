"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { vi } from "date-fns/locale"

import type { Customer } from "@/modules/customers/services/types/customer-types"
import { DataTableRowActions } from "./data-table-row-actions"

export interface CustomerColumnsProps {
  onUpdate: (customerId: string, data: Partial<Customer>) => Promise<void>
  onDelete: (customerId: string) => Promise<void>
  onView: (customer: Customer) => void
  onEdit: (customer: Customer) => void
}

export function buildColumns({ onUpdate, onDelete, onView, onEdit }: CustomerColumnsProps): ColumnDef<Customer>[] {
  return [
    {
      id: "stt",
      header: "STT",
      size: 60,
      enableSorting: false,
      cell: ({ row }) => (
        <span className="text-center block w-full text-muted-foreground">
          {row.index + 1}
        </span>
      ),
    },
    {
      accessorKey: "name",
      header: "Họ tên",
      size: 200,
      cell: ({ row }) => (
        <span className="font-medium">{row.getValue("name")}</span>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      size: 220,
      cell: ({ row }) => (
        <span className="text-muted-foreground">{row.getValue("email")}</span>
      ),
    },
    {
      accessorKey: "phone",
      header: "SĐT",
      size: 130,
      cell: ({ row }) => (
        <span>{row.getValue("phone")}</span>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Ngày đăng ký",
      size: 160,
      cell: ({ row }) => {
        const value = row.getValue("createdAt")
        if (!value) return <span className="text-muted-foreground">-</span>
        try {
          const date = new Date(value as string | number | Date)
          return (
            <span className="text-muted-foreground">
              {format(date, "dd/MM/yyyy HH:mm", { locale: vi })}
            </span>
          )
        } catch {
          return <span className="text-muted-foreground">-</span>
        }
      },
    },
    {
      id: "actions",
      header: "Thao tác",
      size: 120,
      cell: ({ row }) => (
        <DataTableRowActions
          row={row}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onView={onView}
          onEdit={onEdit}
        />
      ),
    },
  ]
}
