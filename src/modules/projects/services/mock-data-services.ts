import { seedMockDataCollections } from "@/lib/firebase/mock-data-seeder"

import { projectMockData } from "./project-mock-data"

export function seedProjectsMockData() {
  return seedMockDataCollections("projects", [
    {
      collectionName: "projects",
      documents: projectMockData,
    },
  ])
}
