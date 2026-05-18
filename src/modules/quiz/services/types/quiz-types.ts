import { z } from "zod"

export const questionSchema = z.object({
  id: z.string().optional(),
  content: z.string(),
  option1: z.string(),
  option2: z.string(),
  option3: z.string(),
  option4: z.string(),
  correctOption: z.string(),
  topic: z.string().default("Animals"),
})

export type Question = z.infer<typeof questionSchema>

export const quizResultSchema = z.object({
  id: z.string().optional(),
  username: z.string(),
  questionId: z.string(),
  questionContent: z.string(),
  selectedOption: z.string(),
  correctOption: z.string(),
  isCorrect: z.boolean(),
  answeredAt: z.string(),
  topic: z.string().optional(),
})

export type QuizResult = z.infer<typeof quizResultSchema>
