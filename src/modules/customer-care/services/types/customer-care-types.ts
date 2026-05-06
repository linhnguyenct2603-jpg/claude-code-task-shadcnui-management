import { z } from "zod"

export const customerCareSchema = z.object({
  id: z.string(),
  customerName: z.string(),
  customerPhone: z.string(),
  customerEmail: z.string().optional(),
  careType: z.string(),
  status: z.string(),
  priority: z.string(),
  assignedTo: z.string(),
  notes: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  resolvedAt: z.string().optional(),
})

export type CustomerCareItem = z.infer<typeof customerCareSchema>
