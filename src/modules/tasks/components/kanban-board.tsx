"use client"

import { useCallback, useMemo, useState } from "react"
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  useDroppable,
  useDraggable,
  DragOverlay,
  closestCorners,
} from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Task } from "@/modules/tasks/services/types/task-types"

const kanbanColumns = [
  {
    id: "todo",
    title: "To Do",
    description: "Tasks ready to start",
    accent: "bg-sky-500",
  },
  {
    id: "in_progress",
    title: "In Progress",
    description: "Tasks currently being worked on",
    accent: "bg-amber-500",
  },
  {
    id: "done",
    title: "Done",
    description: "Completed tasks",
    accent: "bg-emerald-500",
  },
]

interface KanbanBoardProps {
  tasks: Task[]
  onUpdateStatus: (taskId: string, data: Partial<Task>) => Promise<void>
}

function KanbanTaskCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
    data: { status: task.status },
  })

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "rounded-xl border border-border bg-background p-4 shadow-sm transition",
        isDragging && "opacity-50 shadow-lg"
      )}
      style={{ transform: CSS.Translate.toString(transform), cursor: "grab" }}
      {...listeners}
      {...attributes}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold leading-none">{task.title}</p>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
            {task.description || "No description."}
          </p>
        </div>
        <Badge className="shrink-0">{task.priority}</Badge>
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>{task.assignee || "Unassigned"}</span>
        <span>{task.dueDate ? new Date(task.dueDate).toLocaleDateString("vi-VN") : "No due date"}</span>
      </div>
    </div>
  )
}

function DroppableColumn({
  columnId,
  title,
  description,
  accent,
  tasksInColumn,
  isOver,
}: {
  columnId: string
  title: string
  description: string
  accent: string
  tasksInColumn: Task[]
  isOver: boolean
}) {
  const { setNodeRef } = useDroppable({ id: columnId })

  return (
    <div ref={setNodeRef}>
      <div className="flex min-h-[420px] flex-col rounded-3xl border border-border bg-muted/20 p-4">
        <div className="mb-4 flex items-center justify-between gap-2">
          <div>
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
          <span className={cn("h-2 w-2 rounded-full", accent)} />
        </div>
        <div
          className={cn(
            "space-y-3 rounded-3xl p-1 transition min-h-[360px]",
            isOver && "bg-sky-100/50 dark:bg-sky-900/20 ring-2 ring-sky-400/50 ring-inset"
          )}
        >
          {tasksInColumn.length > 0 ? (
            tasksInColumn.map((task) => <KanbanTaskCard key={task.id} task={task} />)
          ) : (
            <div className="rounded-2xl border border-dashed border-border p-4 text-sm text-muted-foreground text-center">
              No tasks in this column.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function KanbanBoard({ tasks, onUpdateStatus }: KanbanBoardProps) {
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null)
  const [overColumnId, setOverColumnId] = useState<string | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  )

  const groupedTasks = useMemo(() => {
    const result: Record<string, Task[]> = {
      todo: [],
      in_progress: [],
      done: [],
    }
    for (const task of tasks) {
      if (result[task.status]) {
        result[task.status].push(task)
      }
    }
    return result
  }, [tasks])

  const activeTask = activeTaskId ? tasks.find((t) => t.id === activeTaskId) ?? null : null

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveTaskId(event.active.id as string)
  }, [])

  const handleDragOver = useCallback((event: DragOverEvent) => {
    const overId = event.over?.id as string | undefined
    if (!overId) {
      setOverColumnId(null)
      return
    }
    const isColumn = kanbanColumns.some((col) => col.id === overId)
    setOverColumnId(isColumn ? overId : null)
  }, [])

  const handleDragEnd = useCallback(
    async (event: DragEndEvent) => {
      const activeId = event.active.id as string
      const overId = event.over?.id as string | undefined

      setActiveTaskId(null)
      setOverColumnId(null)

      if (!overId || activeId === overId) return

      const activeTask = tasks.find((t) => t.id === activeId)
      if (!activeTask) return

      let newStatus: Task["status"] | null = null

      if (kanbanColumns.some((col) => col.id === overId)) {
        newStatus = overId as Task["status"]
      } else {
        const overTask = tasks.find((t) => t.id === overId)
        if (overTask) {
          newStatus = overTask.status
        }
      }

      if (newStatus && activeTask.status !== newStatus) {
        await onUpdateStatus(activeId, { status: newStatus })
      }
    },
    [tasks, onUpdateStatus]
  )

  return (
    <div className="space-y-4">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {kanbanColumns.map((column) => (
            <DroppableColumn
              key={column.id}
              columnId={column.id}
              title={column.title}
              description={column.description}
              accent={column.accent}
              tasksInColumn={groupedTasks[column.id] ?? []}
              isOver={overColumnId === column.id}
            />
          ))}
        </div>
        <DragOverlay dropAnimation={null}>
          {activeTask ? (
            <div className="w-80 rotate-2 scale-105">
              <Card className="shadow-xl border-primary/50">
                <CardContent className="p-4">
                  <p className="text-sm font-semibold">{activeTask.title}</p>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                    {activeTask.description || "No description."}
                  </p>
                </CardContent>
              </Card>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  )
}
