import { seedMockDataCollections } from "@/lib/firebase/mock-data-seeder"

import roleMockData from "./data/roles.json"
import userRoleMockData from "./data/user-roles.json"

export function seedAuthMockData() {
  return seedMockDataCollections("auth", [
    {
      collectionName: "roles",
      documents: roleMockData,
    },
    {
      collectionName: "user_roles",
      documents: userRoleMockData,
    },
  ])
}
