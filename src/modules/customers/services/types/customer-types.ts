import { z } from "zod"

export const customerSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Họ tên là bắt buộc"),
  email: z.string().email("Email không hợp lệ"),
  phone: z.string().min(1, "Số điện thoại là bắt buộc"),
  message: z.string().optional(),
  createdAt: z.union([z.string(), z.number(), z.date()]).optional(),
})

export type Customer = z.infer<typeof customerSchema>
