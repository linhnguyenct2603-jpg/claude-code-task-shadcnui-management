import {
  addFirestoreDocument,
  deleteFirestoreDocument,
  getFirestoreCollection,
  updateFirestoreDocument,
} from "@/lib/firebase/firestore-query"

import { projectMockData } from "./project-mock-data"
import { normalizeProject } from "./types/project-types"
import type { Project } from "./types/project-types"

export async function getProjects(): Promise<Project[]> {
  const raw = await getFirestoreCollection<Project>("projects", projectMockData)
  return raw.map((p) => normalizeProject(p))
}

export async function createProject(project: Project): Promise<string> {
  return addFirestoreDocument("projects", project as Record<string, unknown>, project.id)
}

export async function updateProject(
  projectId: string,
  data: Partial<Omit<Project, "id">>
): Promise<void> {
  return updateFirestoreDocument("projects", projectId, data as Record<string, unknown>)
}

export async function deleteProject(projectId: string): Promise<void> {
  return deleteFirestoreDocument("projects", projectId)
}

export function getProjectStats(projects: Project[]) {
  const total = projects.length
  const now = new Date()

  return {
    total,
    active: projects.filter((p) => {
      if (!p.dueDate) return false
      return new Date(p.dueDate) >= now
    }).length,
    completed: projects.filter((p) => {
      if (!p.dueDate) return false
      return new Date(p.dueDate) < now
    }).length,
    critical: projects.filter((p) => p.priority === "critical").length,
    high: projects.filter((p) => p.priority === "high").length,
  }
}
