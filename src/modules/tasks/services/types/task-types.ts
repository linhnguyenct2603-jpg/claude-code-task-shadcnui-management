import { z } from "zod"

export const priorityEnum = z.enum(["low", "medium", "high"])
export type Priority = z.infer<typeof priorityEnum>

export const statusEnum = z.enum(["todo", "in_progress", "done"])
export type Status = z.infer<typeof statusEnum>

export const tagEnum = z.enum([
  "Bug",
  "Feature",
  "improvement",
  "ui",
  "documentation",
  "backend",
  "testing",
  "refactor",
  "performance",
  "security",
])
export type Tag = z.infer<typeof tagEnum>

export const taskSchema = z.object({
  id: z.string(),
  title: z.string().max(200, "Tiêu đề tối đa 200 ký tự"),
  priority: priorityEnum,
  status: statusEnum,
  assignee: z.string().optional(),
  dueDate: z.string().optional(),
  description: z.string().optional(),
  tags: z.array(tagEnum).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})

export type Task = z.infer<typeof taskSchema>

export const attachmentSchema = z.object({
  id: z.string(),
  fileName: z.string(),
  fileUrl: z.string(),
  fileSize: z.number(),
  fileType: z.string(),
  uploadedAt: z.string(),
  uploadedBy: z.string().optional(),
})

export type Attachment = z.infer<typeof attachmentSchema>
