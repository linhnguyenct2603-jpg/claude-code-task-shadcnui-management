"use client"

import type { Table } from "@tanstack/react-table"
import { RefreshCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  careStatuses,
  careTypes,
} from "@/modules/customer-care/services/customer-care-mock-data"
import type { CustomerCareItem } from "@/modules/customer-care/services/types/customer-care-types"
import { DataTableViewOptions } from "./data-table-view-options"
import { AddCustomerCareModal } from "./add-customer-care-modal"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  onAddCustomerCare?: (item: CustomerCareItem) => void
}

export function DataTableToolbar<TData>({
  table,
  onAddCustomerCare,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const handleStatusChange = (value: string) => {
    const column = table.getColumn("status")
    if (value === "all") {
      column?.setFilterValue(undefined)
    } else {
      column?.setFilterValue(value)
    }
  }

  const handleCareTypeChange = (value: string) => {
    const column = table.getColumn("careType")
    if (value === "all") {
      column?.setFilterValue(undefined)
    } else {
      column?.setFilterValue(value)
    }
  }

  const handlePriorityChange = (value: string) => {
    const column = table.getColumn("priority")
    if (value === "all") {
      column?.setFilterValue(undefined)
    } else {
      column?.setFilterValue(value)
    }
  }

  const statusFilter = table.getColumn("status")?.getFilterValue() as
    | string
    | undefined
  const careTypeFilter = table.getColumn("careType")?.getFilterValue() as
    | string
    | undefined
  const priorityFilter = table.getColumn("priority")?.getFilterValue() as
    | string
    | undefined

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {/* Status Filter */}
        <Select
          value={statusFilter || "all"}
          onValueChange={handleStatusChange}
        >
          <SelectTrigger className="w-full cursor-pointer">
            <SelectValue placeholder="Trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="cursor-pointer">
              Tất cả trạng thái
            </SelectItem>
            {careStatuses.map((status) => (
              <SelectItem
                key={status.value}
                value={status.value}
                className="cursor-pointer"
              >
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

        {/* Care Type Filter */}
        <Select
          value={careTypeFilter || "all"}
          onValueChange={handleCareTypeChange}
        >
          <SelectTrigger className="w-full cursor-pointer">
            <SelectValue placeholder="Loại chăm sóc" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="cursor-pointer">
              Tất cả loại
            </SelectItem>
            {careTypes.map((type) => (
              <SelectItem
                key={type.value}
                value={type.value}
                className="cursor-pointer"
              >
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

        {/* Priority Filter */}
        <Select
          value={priorityFilter || "all"}
          onValueChange={handlePriorityChange}
        >
          <SelectTrigger className="w-full cursor-pointer">
            <SelectValue placeholder="Ưu tiên" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="cursor-pointer">
              Tất cả ưu tiên
            </SelectItem>
            {["low", "normal", "high", "urgent"].map((p) => (
              <SelectItem key={p} value={p} className="cursor-pointer">
                {p === "low"
                  ? "Thấp"
                  : p === "normal"
                    ? "Bình thường"
                    : p === "high"
                      ? "Cao"
                      : "Khẩn cấp"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Tìm khách hàng..."
            value={
              (table.getColumn("customerName")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("customerName")?.setFilterValue(
                event.target.value
              )
            }
            className="w-[200px] lg:w-[300px] cursor-text"
          />
          <Button
            variant="outline"
            onClick={() => table.resetColumnFilters()}
            className="px-3 cursor-pointer"
            disabled={!isFiltered}
          >
            <RefreshCcw className="h-4 w-4" />
            <span className="hidden lg:block">Đặt lại</span>
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <DataTableViewOptions table={table} />
          <AddCustomerCareModal onAddCustomerCare={onAddCustomerCare} />
        </div>
      </div>
    </div>
  )
}
