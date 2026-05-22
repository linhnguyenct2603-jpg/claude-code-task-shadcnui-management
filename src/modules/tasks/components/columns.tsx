"use client"

import type { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

import { priorities, statuses, tags } from "@/modules/tasks/services/task-mock-data"
import type { Task } from "@/modules/tasks/services/types/task-types"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export interface BuildColumnsProps {
  currentUserUid: string | null
  onUpdate: (taskId: string, data: Partial<Task>) => Promise<void>
  onDelete: (taskId: string) => Promise<void>
  onAttachments: (taskId: string, taskTitle: string) => void
}

export function buildColumns({ currentUserUid, onUpdate, onDelete, onAttachments }: BuildColumnsProps): ColumnDef<Task>[] {
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
        <DataTableColumnHeader column={column} title="Task" />
      ),
      cell: ({ row }) => (
        <div className="w-[90px] font-medium">{row.getValue("id")}</div>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[400px] truncate font-medium">
              {row.getValue("title")}
            </span>
          </div>
        )
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = statuses.find(
          (s) => s.value === row.getValue("status")
        )

        if (!status) {
          return null
        }

        return (
          <div className="flex w-[140px] items-center">
            {status.icon && (
              <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
            )}
            <span className="text-sm">{status.label}</span>
          </div>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
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
          return null
        }

        const priorityColors: Record<string, string> = {
          high: "border-red-500 text-red-600 dark:text-red-400",
          medium: "border-yellow-500 text-yellow-600 dark:text-yellow-400",
          low: "border-gray-400 text-gray-500 dark:text-gray-400",
        }

        return (
          <div className="flex items-center">
            <Badge
              variant="outline"
              className={cn(
                "pl-2",
                priorityColors[priority.value] || ""
              )}
            >
              {priority.icon && (
                <priority.icon className="mr-1 h-3 w-3" />
              )}
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
      accessorKey: "assignee",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Assignee" />
      ),
      cell: ({ row }) => {
        const assignee = row.getValue("assignee") as string | undefined
        if (!assignee) {
          return <span className="text-muted-foreground text-sm">—</span>
        }
        return (
          <div className="flex items-center">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-xs font-medium">
              {assignee.charAt(0).toUpperCase()}
            </div>
            <span className="ml-2 text-sm">{assignee}</span>
          </div>
        )
      },
    },
    {
      accessorKey: "reporter",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Reporter" />
      ),
      cell: ({ row }) => {
        const reporter = row.getValue("reporter") as string | undefined
        if (!reporter) {
          return <span className="text-muted-foreground text-sm">—</span>
        }
        return (
          <div className="flex items-center">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
              {reporter.charAt(0).toUpperCase()}
            </div>
            <span className="ml-2 text-sm">{reporter}</span>
          </div>
        )
      },
    },
    {
      accessorKey: "dueDate",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Due Date" />
      ),
      cell: ({ row }) => {
        const dueDate = row.getValue("dueDate") as string | undefined
        if (!dueDate) {
          return <span className="text-muted-foreground text-sm">—</span>
        }
        const date = new Date(dueDate)
        const isOverdue = date < new Date()
        return (
          <span className={cn("text-sm", isOverdue && "text-red-500 font-medium")}>
            {date.toLocaleDateString("vi-VN")}
          </span>
        )
      },
    },
    {
      accessorKey: "tags",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Tags" />
      ),
      cell: ({ row }) => {
        const taskTags = row.getValue("tags") as string[] | undefined
        if (!taskTags || taskTags.length === 0) {
          return <span className="text-muted-foreground text-sm">—</span>
        }
        return (
          <div className="flex flex-wrap gap-1 max-w-[200px]">
            {taskTags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs px-1.5 py-0">
                {tag}
              </Badge>
            ))}
            {taskTags.length > 3 && (
              <Badge variant="secondary" className="text-xs px-1.5 py-0">
                +{taskTags.length - 3}
              </Badge>
            )}
          </div>
        )
      },
      filterFn: (row, id, value) => {
        const rowTags = (row.getValue(id) as string[]) || []
        return value.some((v: string) => rowTags.includes(v))
      },
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DataTableRowActions
          row={row}
          currentUserUid={currentUserUid}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onAttachments={onAttachments}
        />
      ),
    },
  ]
}
