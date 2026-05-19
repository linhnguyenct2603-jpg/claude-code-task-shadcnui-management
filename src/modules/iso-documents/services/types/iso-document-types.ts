import { z } from "zod"

export const isoDocumentStatusEnum = z.enum(["draft", "published"])
export type IsoDocumentStatus = z.infer<typeof isoDocumentStatusEnum>

// Full document schema (read from Firestore)
export const isoDocumentSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Tên biểu mẫu không được để trống"),
  type: z.string().min(1),
  status: isoDocumentStatusEnum,
  size: z.string().min(1),
  updatedAt: z.string().optional(),
  attachments: z
    .array(
      z.object({
        filename: z.string(),
        filetype: z.string(),
        url: z.string(),
        summary: z.string(),
      })
    )
    .optional(),
})

// Schema for creating a new document (form validation)
export const createIsoDocumentSchema = z.object({
  name: z.string().min(1, "Tên biểu mẫu không được để trống"),
  status: isoDocumentStatusEnum,
})

export type CreateIsoDocumentValues = z.infer<typeof createIsoDocumentSchema>
export type IsoDocument = z.infer<typeof isoDocumentSchema>

export interface Attachment {
  filename: string
  filetype: string
  url: string
  summary: string
}
