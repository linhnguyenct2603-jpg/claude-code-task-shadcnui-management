"use client"

import type { Table } from "@tanstack/react-table"
import { RefreshCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  onAddCustomer: () => void
}

export function DataTableToolbar<TData>({
  table,
  onAddCustomer,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Tìm kiếm theo tên..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="w-[240px] cursor-text"
        />
        <Button
          variant="outline"
          onClick={() => table.resetColumnFilters()}
          className="px-3 cursor-pointer"
          disabled={!isFiltered}
        >
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <DataTableViewOptions table={table} />
        <Button variant="default" size="sm" onClick={onAddCustomer} className="cursor-pointer">
          Thêm khách hàng
        </Button>
      </div>
    </div>
  )
}
