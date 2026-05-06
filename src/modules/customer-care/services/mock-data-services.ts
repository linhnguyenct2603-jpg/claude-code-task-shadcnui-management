import "server-only"

import { seedMockDataCollections } from "@/lib/firebase/mock-data-seeder"

import { customerCareMockData } from "./customer-care-mock-data"

export function seedCustomerCareMockData() {
  return seedMockDataCollections("customer_cares", [
    {
      collectionName: "customer_cares",
      documents: customerCareMockData,
    },
  ])
}
