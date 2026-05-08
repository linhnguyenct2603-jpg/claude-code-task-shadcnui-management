"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { format, parseISO } from "date-fns"
import { vi } from "date-fns/locale"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

import { priorities } from "@/modules/projects/services/types/project-types"
import type { Project } from "@/modules/projects/services/types/project-types"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export interface BuildColumnsProps {
  onUpdate: (projectId: string, data: Partial<Project>) => Promise<void>
  onDelete: (projectId: string) => Promise<void>
}

function formatDate(dateStr: string | undefined): string {
  if (!dateStr) return "—"
  try {
    return format(parseISO(dateStr), "dd/MM/yyyy", { locale: vi })
  } catch {
    return dateStr
  }
}

function isOverdue(dateStr: string | undefined): boolean {
  if (!dateStr) return false
  return new Date(dateStr) < new Date()
}

function isActive(dateStr: string | undefined): boolean {
  if (!dateStr) return false
  return new Date(dateStr) >= new Date()
}

export function buildColumns({ onUpdate, onDelete }: BuildColumnsProps): ColumnDef<Project>[] {
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
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" />
      ),
      cell: ({ row }) => (
        <div className="w-[100px] font-medium">{row.getValue("id")}</div>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
      cell: ({ row }) => (
        <div className="max-w-[500px] truncate font-medium">
          {row.getValue("title")}
        </div>
      ),
    },
    {
      accessorKey: "priority",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Priority" />
      ),
      cell: ({ row }) => {
        const priority = priorities.find(
          (p) => p.value === row.getValue("priority")
        )

        if (!priority) {
          return (
            <div className="w-[110px]">
              <Badge variant="outline" className={cn("pl-2", "border-blue-500 text-blue-600 dark:text-blue-400")}>
                <span className="text-sm">Medium</span>
              </Badge>
            </div>
          )
        }

        const priorityColors = {
          critical: "border-red-500 text-red-600 dark:text-red-400",
          high: "border-orange-500 text-orange-600 dark:text-orange-400",
          medium: "border-blue-500 text-blue-600 dark:text-blue-400",
          low: "border-gray-500 text-gray-600 dark:text-gray-400",
        }

        return (
          <div className="w-[110px]">
            <Badge
              variant="outline"
              className={cn(
                "pl-2",
                priorityColors[priority.value as keyof typeof priorityColors]
              )}
            >
              <span className="text-sm">{priority.label}</span>
            </Badge>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
    },
    {
      accessorKey: "startDate",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Start Date" />
      ),
      cell: ({ row }) => (
        <div className="w-[130px] text-sm">
          {formatDate(row.getValue("startDate"))}
        </div>
      ),
    },
    {
      accessorKey: "dueDate",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Due Date" />
      ),
      cell: ({ row }) => {
        const dueDate = row.getValue("dueDate") as string | undefined
        const overdue = isOverdue(dueDate)
        const active = isActive(dueDate)

        return (
          <div className="w-[130px]">
            <Badge
              variant="outline"
              className={cn(
                overdue && "border-red-500 text-red-600 dark:text-red-400",
                active && !overdue && "border-green-500 text-green-600 dark:text-green-400"
              )}
            >
              {formatDate(dueDate)}
            </Badge>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DataTableRowActions
          row={row}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ),
    },
  ]
}
