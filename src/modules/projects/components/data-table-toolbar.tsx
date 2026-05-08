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
import { DataTableViewOptions } from "./data-table-view-options"
import { AddProjectModal } from "./add-project-modal"

import { priorities } from "@/modules/projects/services/types/project-types"
import type { Project } from "@/modules/projects/services/types/project-types"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  onCreateProject?: (project: Project) => void
}

export function DataTableToolbar<TData>({
  table,
  onCreateProject,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  const priorityFilter = table.getColumn("priority")?.getFilterValue() as string | undefined

  const handlePriorityChange = (value: string) => {
    const column = table.getColumn("priority")
    if (value === "all") {
      column?.setFilterValue(undefined)
    } else {
      column?.setFilterValue(value)
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <Select
          value={priorityFilter || "all"}
          onValueChange={handlePriorityChange}
        >
          <SelectTrigger className="w-full cursor-pointer">
            <SelectValue placeholder="All Priorities" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className="cursor-pointer">All Priorities</SelectItem>
            {priorities.map((p) => (
              <SelectItem key={p.value} value={p.value} className="cursor-pointer">
                {p.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input
          placeholder="Search Project"
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="cursor-text"
        />
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => table.resetColumnFilters()}
          className="px-3 cursor-pointer"
          disabled={!isFiltered}
        >
          <RefreshCcw className="h-4 w-4" />
          <span className="hidden lg:block">Reset Filters</span>
        </Button>
        <div className="flex items-center space-x-2">
          <DataTableViewOptions table={table} />
          <AddProjectModal onAddProject={onCreateProject} />
        </div>
      </div>
    </div>
  )
}
