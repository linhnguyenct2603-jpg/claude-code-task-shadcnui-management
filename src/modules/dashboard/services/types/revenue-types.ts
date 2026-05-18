import { z } from "zod"

export const revenueSchema = z.object({
  id: z.string().optional(),
  month: z.number().min(1).max(12),
  revenue: z.number().nonnegative(),
  year: z.number().default(2025),
})

export type Revenue = z.infer<typeof revenueSchema>
