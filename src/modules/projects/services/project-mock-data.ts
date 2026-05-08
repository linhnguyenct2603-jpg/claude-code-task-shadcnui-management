import { projectSchema } from "./types/project-types"

import projectsData from "./data/projects.json"

export const projectMockData = projectSchema.array().parse(projectsData)
