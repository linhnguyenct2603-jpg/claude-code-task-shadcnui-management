"use client"

import { useCallback, useEffect, useState } from "react"
import { ArrowUp, BarChart3, CheckCircle2, Clock, LayoutGrid, ListTodo } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { buildColumns } from "@/modules/tasks/components/columns"
import { DataTable } from "@/modules/tasks/components/data-table"
import { KanbanBoard } from "@/modules/tasks/components/kanban-board"
import { TaskAttachmentsDialog } from "@/modules/tasks/components/task-attachments-dialog"
import {
  createTask,
  deleteTask,
  getTaskStats,
  getTasks,
  updateTask,
} from "@/modules/tasks/services/task-services"
import type { Task } from "@/modules/tasks/services/types/task-types"

export default function TaskPage() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<"list" | "kanban">("list")
  const [attachmentsDialog, setAttachmentsDialog] = useState<{
    open: boolean
    taskId: string
    taskTitle: string
  }>({ open: false, taskId: "", taskTitle: "" })

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const taskList = await getTasks()
        setTasks(taskList)
      } catch (error) {
        console.error("Failed to load tasks:", error)
      } finally {
        setLoading(false)
      }
    }

    loadTasks()
  }, [])

  const handleCreateTask = useCallback(async (newTask: Task) => {
    try {
      await createTask(newTask)
      setTasks(prev => [newTask, ...prev])
      toast.success("Task created successfully")
    } catch {
      toast.error("Failed to create task")
    }
  }, [])

  const handleUpdateTask = useCallback(async (taskId: string, data: Partial<Task>) => {
    try {
      await updateTask(taskId, data)
      setTasks(prev =>
        prev.map(t => (t.id === taskId ? { ...t, ...data } : t))
      )
      toast.success("Task updated successfully")
    } catch {
      toast.error("Failed to update task")
    }
  }, [])

  const handleDeleteTask = useCallback(async (taskId: string) => {
    try {
      await deleteTask(taskId)
      setTasks(prev => prev.filter(t => t.id !== taskId))
      toast.success("Task deleted successfully")
    } catch {
      toast.error("Failed to delete task")
    }
  }, [])

  const columns = buildColumns({
    onUpdate: handleUpdateTask,
    onDelete: handleDeleteTask,
    onAttachments: (taskId, taskTitle) => {
      setAttachmentsDialog({ open: true, taskId, taskTitle })
    },
  })
  const stats = getTaskStats(tasks)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-muted-foreground">Loading tasks...</div>
      </div>
    )
  }

  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col gap-4 px-4 md:px-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
            <p className="text-muted-foreground">
              A powerful task and issue tracker with list and kanban views.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={view === "list" ? "default" : "outline"}
              onClick={() => setView("list")}
              className="cursor-pointer"
            >
              <ListTodo className="mr-2 h-4 w-4" />
              List
            </Button>
            <Button
              size="sm"
              variant={view === "kanban" ? "default" : "outline"}
              onClick={() => setView("kanban")}
              className="cursor-pointer"
            >
              <LayoutGrid className="mr-2 h-4 w-4" />
              Kanban
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile view placeholder - shows message instead of images */}
      <div className="md:hidden px-4 md:px-6">
        <div className="flex items-center justify-center h-96 border rounded-lg bg-muted/20">
          <div className="text-center p-8">
            <h3 className="text-lg font-semibold mb-2">Tasks Dashboard</h3>
            <p className="text-muted-foreground">
              Please use a larger screen to view the full tasks interface.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden h-full flex-1 flex-col space-y-6 px-4 md:px-6 md:flex">
        {/* Attachments Dialog */}
        <TaskAttachmentsDialog
          open={attachmentsDialog.open}
          onOpenChange={(open) =>
            setAttachmentsDialog((prev) => ({ ...prev, open }))
          }
          taskId={attachmentsDialog.taskId}
          taskTitle={attachmentsDialog.taskTitle}
        />

        {/* Stats Cards */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Total Tasks</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.total}</span>
                    <span className="flex items-center gap-0.5 text-sm text-green-500">
                      <ArrowUp className="size-3.5" />
                      {stats.total > 0 ? Math.round((stats.done / stats.total) * 100) : 0}%
                    </span>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <ListTodo className="size-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Completed</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.done}</span>
                    <span className="flex items-center gap-0.5 text-sm text-green-500">
                      <ArrowUp className="size-3.5" />
                      {Math.round((stats.done / stats.total) * 100)}%
                    </span>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <CheckCircle2 className="size-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">In Progress</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.inProgress}</span>
                    <span className="flex items-center gap-0.5 text-sm text-green-500">
                      <ArrowUp className="size-3.5" />
                      {Math.round((stats.inProgress / stats.total) * 100)}%
                    </span>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <Clock className="size-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">To Do</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.todo}</span>
                    <span className="flex items-center gap-0.5 text-sm text-orange-500">
                      <ArrowUp className="size-3.5" />
                      {stats.total > 0 ? Math.round((stats.todo / stats.total) * 100) : 0}%
                    </span>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <BarChart3 className="size-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        {view === "kanban" ? (
          <Card>
            <CardHeader>
              <CardTitle>Kanban Board</CardTitle>
              <CardDescription>
                Drag and drop tasks between To Do, In Progress, and Done.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <KanbanBoard tasks={tasks} onUpdateStatus={handleUpdateTask} />
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Task Management</CardTitle>
              <CardDescription>
                View, filter, and manage all your project tasks in one place
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable
                data={tasks}
                columns={columns}
                onCreateTask={handleCreateTask}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}
