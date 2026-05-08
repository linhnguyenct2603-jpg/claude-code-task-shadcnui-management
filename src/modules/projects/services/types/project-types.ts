import { z } from "zod"

export const priorities = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
  { label: "Critical", value: "critical" },
] as const

export type ProjectPriority = (typeof priorities)[number]["value"]

export const projectSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Title is required").max(100, "Title must be at most 100 characters"),
  priority: z.enum(["low", "medium", "high", "critical"]).default("medium"),
  startDate: z.string().optional(),
  dueDate: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

export type Project = z.infer<typeof projectSchema>

export function normalizeProject(project: Partial<Project> & { id: string }): Project {
  return projectSchema.parse({
    ...project,
    priority: project.priority ?? "medium",
  })
}
