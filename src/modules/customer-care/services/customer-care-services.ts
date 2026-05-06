import {
  addFirestoreDocument,
  deleteFirestoreDocument,
  getFirestoreCollection,
  updateFirestoreDocument,
} from "@/lib/firebase/firestore-query"

import { customerCareMockData } from "./customer-care-mock-data"
import type { CustomerCareItem } from "./types/customer-care-types"

const COLLECTION_NAME = "customer_cares"

export async function getCustomerCares(): Promise<CustomerCareItem[]> {
  return getFirestoreCollection<CustomerCareItem>(
    COLLECTION_NAME,
    customerCareMockData
  )
}

export async function createCustomerCare(
  data: Omit<CustomerCareItem, "id">
): Promise<string> {
  const cleanData = Object.fromEntries(
    Object.entries(data).filter(([, v]) => v !== undefined)
  )
  return addFirestoreDocument(COLLECTION_NAME, cleanData)
}

export async function updateCustomerCare(
  id: string,
  data: Partial<Omit<CustomerCareItem, "id">>
): Promise<void> {
  return updateFirestoreDocument(COLLECTION_NAME, id, data as Record<string, unknown>)
}

export async function deleteCustomerCare(id: string): Promise<void> {
  return deleteFirestoreDocument(COLLECTION_NAME, id)
}

export function getCustomerCareStats(items: CustomerCareItem[]) {
  const total = items.length
  return {
    total,
    new: items.filter((item) => item.status === "new").length,
    inProgress: items.filter((item) => item.status === "in_progress").length,
    resolved: items.filter((item) => item.status === "resolved").length,
    closed: items.filter((item) => item.status === "closed").length,
    urgent: items.filter((item) => item.priority === "urgent").length,
    highPriority: items.filter(
      (item) => item.priority === "high" || item.priority === "urgent"
    ).length,
  }
}
