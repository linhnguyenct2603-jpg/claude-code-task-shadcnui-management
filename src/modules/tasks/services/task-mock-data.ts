import {
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Circle,
  Clock,
  Minus,
  PlayCircle,
  ChevronsUp,
} from "lucide-react"

import tasksData from "./data/tasks.json"

import { taskSchema } from "./types/task-types"

export const priorities = [
  {
    label: "Thấp",
    value: "low",
    icon: ChevronDown,
  },
  {
    label: "Trung bình",
    value: "medium",
    icon: Minus,
  },
  {
    label: "Cao",
    value: "high",
    icon: ChevronUp,
  },
]

export const statuses = [
  {
    value: "todo",
    label: "To Do",
    icon: Clock,
  },
  {
    value: "in_progress",
    label: "In Progress",
    icon: PlayCircle,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2,
  },
]

export const tags = [
  { value: "Bug", label: "Bug" },
  { value: "Feature", label: "Feature" },
  { value: "improvement", label: "Improvement" },
  { value: "ui", label: "UI" },
  { value: "documentation", label: "Documentation" },
  { value: "backend", label: "Backend" },
  { value: "testing", label: "Testing" },
  { value: "refactor", label: "Refactor" },
  { value: "performance", label: "Performance" },
  { value: "security", label: "Security" },
]

export const taskMockData = taskSchema.array().parse(tasksData)
