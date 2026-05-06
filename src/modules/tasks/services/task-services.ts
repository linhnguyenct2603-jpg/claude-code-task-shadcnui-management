import {
  addFirestoreDocument,
  deleteFirestoreDocument,
  getFirestoreCollection,
  updateFirestoreDocument,
} from "@/lib/firebase/firestore-query"

import { taskMockData } from "./task-mock-data"
import type { Task } from "./types/task-types"

export async function getTasks(): Promise<Task[]> {
  return getFirestoreCollection<Task>("tasks", taskMockData)
}

export async function createTask(task: Task): Promise<string> {
  return addFirestoreDocument("tasks", task as Record<string, unknown>, task.id)
}

export async function updateTask(
  taskId: string,
  data: Partial<Omit<Task, "id">>
): Promise<void> {
  return updateFirestoreDocument("tasks", taskId, data as Record<string, unknown>)
}

export async function deleteTask(taskId: string): Promise<void> {
  return deleteFirestoreDocument("tasks", taskId)
}

export function getTaskStats(tasks: Task[]) {
  const total = tasks.length

  return {
    total,
    completed: tasks.filter((task) => task.status === "completed").length,
    inProgress: tasks.filter((task) => task.status === "in progress").length,
    pending: tasks.filter((task) => task.status === "pending").length,
  }
}
