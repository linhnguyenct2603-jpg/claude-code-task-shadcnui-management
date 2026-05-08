"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { priorities } from "@/modules/projects/services/types/project-types"
import type { Project } from "@/modules/projects/services/types/project-types"

const projectFormSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title must be at most 100 characters"),
  priority: z.enum(["low", "medium", "high", "critical"]),
  startDate: z.string().optional(),
  dueDate: z.string().optional(),
})

type ProjectFormData = z.infer<typeof projectFormSchema>

interface AddProjectModalProps {
  onAddProject?: (project: Project) => void
  trigger?: React.ReactNode
}

export function AddProjectModal({ onAddProject, trigger }: AddProjectModalProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<ProjectFormData>({
    title: "",
    priority: "medium",
    startDate: "",
    dueDate: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const generateProjectId = () => {
    const number = Math.floor(Math.random() * 9999) + 1
    return `PROJ-${String(number).padStart(4, "0")}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const validatedData = projectFormSchema.parse(formData)

      const now = new Date().toISOString()
      const newProject: Project = {
        id: generateProjectId(),
        title: validatedData.title,
        priority: validatedData.priority,
        startDate: validatedData.startDate || "",
        dueDate: validatedData.dueDate || "",
        createdAt: now,
        updatedAt: now,
      }

      onAddProject?.(newProject)

      setFormData({ title: "", priority: "medium", startDate: "", dueDate: "" })
      setErrors({})
      setOpen(false)
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {}
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as string] = issue.message
          }
        })
        setErrors(newErrors)
      }
    }
  }

  const handleCancel = () => {
    setFormData({ title: "", priority: "medium", startDate: "", dueDate: "" })
    setErrors({})
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="default" size="sm" className="cursor-pointer">
            <Plus className="w-4 h-4" />
            Add Project
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
          <DialogDescription>
            Create a new project. Fill in the details below.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Project Title *</Label>
            <Input
              id="title"
              placeholder="Enter project title..."
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              maxLength={100}
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title}</p>
            )}
            <p className="text-xs text-muted-foreground">
              {formData.title.length}/100 characters
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Select
              value={formData.priority}
              onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value as ProjectFormData["priority"] }))}
            >
              <SelectTrigger className="w-full cursor-pointer">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                {priorities.map((p) => (
                  <SelectItem key={p.value} value={p.value} className="cursor-pointer">
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Start Date</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                className={errors.startDate ? "border-red-500" : ""}
              />
              {errors.startDate && (
                <p className="text-sm text-red-500">{errors.startDate}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData(prev => ({ ...prev, dueDate: e.target.value }))}
                className={errors.dueDate ? "border-red-500" : ""}
              />
              {errors.dueDate && (
                <p className="text-sm text-red-500">{errors.dueDate}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={handleCancel} className="cursor-pointer">
              Cancel
            </Button>
            <Button type="submit" className="cursor-pointer">
              <Plus className="w-4 h-4 mr-2" />
              Create Project
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
