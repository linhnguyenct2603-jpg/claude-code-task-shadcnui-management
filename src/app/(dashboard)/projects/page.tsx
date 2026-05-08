"use client"

import { useCallback, useEffect, useState } from "react"
import { AlertTriangle, ArrowUp, Briefcase, CheckCircle2, Clock, RefreshCw } from "lucide-react"
import { toast } from "sonner"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { buildColumns } from "@/modules/projects/components/columns"
import { DataTable } from "@/modules/projects/components/data-table"
import {
  createProject,
  deleteProject,
  getProjectStats,
  getProjects,
  updateProject,
} from "@/modules/projects/services/project-services"
import type { Project } from "@/modules/projects/services/types/project-types"

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [migrating, setMigrating] = useState(false)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectList = await getProjects()
        setProjects(projectList)
      } catch (error) {
        console.error("Failed to load projects:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  const handleMigrate = async () => {
    setMigrating(true)
    try {
      const res = await fetch("/api/projects/migrate", { method: "POST" })
      const data = await res.json()
      if (res.ok) {
        toast.success(data.message)
        const projectList = await getProjects()
        setProjects(projectList)
      } else {
        toast.error(data.error || "Migration failed")
      }
    } catch {
      toast.error("Migration failed")
    } finally {
      setMigrating(false)
    }
  }

  const handleCreateProject = useCallback(async (newProject: Project) => {
    try {
      await createProject(newProject)
      setProjects(prev => [newProject, ...prev])
      toast.success("Project created successfully")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to create project")
    }
  }, [])

  const handleUpdateProject = useCallback(async (projectId: string, data: Partial<Project>) => {
    try {
      await updateProject(projectId, data)
      setProjects(prev =>
        prev.map(p => (p.id === projectId ? { ...p, ...data } : p))
      )
      toast.success("Project updated successfully")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to update project")
    }
  }, [])

  const handleDeleteProject = useCallback(async (projectId: string) => {
    try {
      await deleteProject(projectId)
      setProjects(prev => prev.filter(p => p.id !== projectId))
      toast.success("Project deleted successfully")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to delete project")
    }
  }, [])

  const columns = buildColumns({ onUpdate: handleUpdateProject, onDelete: handleDeleteProject })
  const stats = getProjectStats(projects)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-muted-foreground">Loading projects...</div>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-2 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground">
              Manage and track all your projects in one place.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleMigrate}
            disabled={migrating}
            className="cursor-pointer gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${migrating ? "animate-spin" : ""}`} />
            {migrating ? "Migrating..." : "Migrate Data"}
          </Button>
        </div>
      </div>

      <div className="h-full flex-1 flex-col space-y-6 px-4 md:px-6">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Total Projects</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.total}</span>
                    <span className="flex items-center gap-0.5 text-sm text-green-500">
                      <ArrowUp className="size-3.5" />
                      {stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0}%
                    </span>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <Briefcase className="size-6" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">Active</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.active}</span>
                    <span className="flex items-center gap-0.5 text-sm text-green-500">
                      <ArrowUp className="size-3.5" />
                      {stats.total > 0 ? Math.round((stats.active / stats.total) * 100) : 0}%
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
                  <p className="text-muted-foreground text-sm font-medium">Completed</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.completed}</span>
                    <span className="flex items-center gap-0.5 text-sm text-orange-500">
                      <ArrowUp className="size-3.5" />
                      {stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0}%
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
                  <p className="text-muted-foreground text-sm font-medium">Critical</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.critical}</span>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <AlertTriangle className="size-6 text-red-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium">High Priority</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold">{stats.high}</span>
                  </div>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <ArrowUp className="size-6 text-orange-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Project Management</CardTitle>
            <CardDescription>
              View, filter, and manage all your projects in one place
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              data={projects}
              columns={columns}
              onCreateProject={handleCreateProject}
            />
          </CardContent>
        </Card>
      </div>
    </>
  )
}
