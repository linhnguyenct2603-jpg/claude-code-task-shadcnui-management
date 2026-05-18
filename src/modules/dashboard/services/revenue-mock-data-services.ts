import "server-only"

import { seedMockDataCollections } from "@/lib/firebase/mock-data-seeder"
import { revenueMockData } from "./revenue-mock-data"

export function seedRevenuesMockData() {
  return seedMockDataCollections("revenues", [
    {
      collectionName: "revenues",
      documents: revenueMockData,
      getDocumentId: (_, index) => revenueMockData[index]?.id ?? `REV-${index + 1}`,
    },
  ])
}
