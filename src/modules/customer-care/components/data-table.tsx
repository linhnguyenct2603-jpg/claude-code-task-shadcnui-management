"use client"

import * as React from "react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  carePriorities,
  careStatuses,
  careTypes,
} from "@/modules/customer-care/services/customer-care-mock-data"
import type { CustomerCareItem } from "@/modules/customer-care/services/types/customer-care-types"
import { DataTablePagination } from "./data-table-pagination"
import { DataTableRowActions } from "./data-table-row-actions"
import { DataTableToolbar } from "./data-table-toolbar"

function getColumns(
  onDelete: ((id: string) => void) | undefined
): ColumnDef<CustomerCareItem>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px] cursor-pointer"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px] cursor-pointer"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: "Mã",
      cell: ({ row }) => (
        <span className="font-mono text-sm font-medium">
          {row.getValue("id")}
        </span>
      ),
    },
    {
      accessorKey: "customerName",
      header: "Khách hàng",
      cell: ({ row }) => (
        <div className="space-y-0.5">
          <span className="font-medium">{row.getValue("customerName")}</span>
          <div className="text-xs text-muted-foreground">
            {row.original.customerPhone}
          </div>
        </div>
      ),
    },
    {
      accessorKey: "careType",
      header: "Loại chăm sóc",
      cell: ({ row }) => {
        const type = careTypes.find(
          (t) => t.value === row.getValue("careType")
        )
        if (!type) return null
        return (
          <Badge variant="outline" className="flex w-fit gap-1.5">
            {type.icon && <type.icon className="h-3.5 w-3.5" />}
            {type.label}
          </Badge>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
    },
    {
      accessorKey: "status",
      header: "Trạng thái",
      cell: ({ row }) => {
        const status = careStatuses.find(
          (s) => s.value === row.getValue("status")
        )
        if (!status) return null
        const statusColors: Record<string, string> = {
          new: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
          in_progress:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
          resolved:
            "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
          closed: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
        }
        return (
          <Badge
            variant="secondary"
            className={cn(
              "flex w-fit gap-1.5 font-normal",
              statusColors[status.value] ?? ""
            )}
          >
            {status.icon && <status.icon className="h-3.5 w-3.5" />}
            {status.label}
          </Badge>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
    },
    {
      accessorKey: "priority",
      header: "Ưu tiên",
      cell: ({ row }) => {
        const priority = carePriorities.find(
          (p) => p.value === row.getValue("priority")
        )
        if (!priority) return null
        const priorityColors: Record<string, string> = {
          low: "border-gray-400 text-gray-600 dark:text-gray-400",
          normal: "border-blue-400 text-blue-600 dark:text-blue-400",
          high: "border-orange-500 text-orange-700 dark:text-orange-400",
          urgent: "border-red-600 text-red-700 dark:text-red-400",
        }
        return (
          <Badge
            variant="outline"
            className={cn(
              "border-2",
              priorityColors[priority.value] ?? ""
            )}
          >
            {priority.label}
          </Badge>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
    },
    {
      accessorKey: "assignedTo",
      header: "Nhân viên",
      cell: ({ row }) => (
        <span className="text-sm">{row.getValue("assignedTo")}</span>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Ngày tạo",
      cell: ({ row }) => {
        const date = new Date(row.getValue("createdAt"))
        return (
          <span className="text-sm text-muted-foreground">
            {date.toLocaleDateString("vi-VN")}
          </span>
        )
      },
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DataTableRowActions
          row={row}
          onDelete={onDelete}
        />
      ),
    },
  ]
}

interface DataTableProps {
  data: CustomerCareItem[]
  onAddCustomerCare?: (item: CustomerCareItem) => void
  onDeleteCustomerCare?: (id: string) => void
}

export function DataTable({
  data,
  onAddCustomerCare,
  onDeleteCustomerCare,
}: DataTableProps) {
  const columns = React.useMemo(
    () => getColumns(onDeleteCustomerCare),
    [onDeleteCustomerCare]
  )

  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] =
    React.useState<ColumnFiltersState>([])
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} onAddCustomerCare={onAddCustomerCare} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Không có kết quả.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
}
