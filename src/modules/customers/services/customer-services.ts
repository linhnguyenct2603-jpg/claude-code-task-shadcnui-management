import {
  addFirestoreDocument,
  deleteFirestoreDocument,
  getFirestoreCollection,
  updateFirestoreDocument,
} from "@/lib/firebase/firestore-query"

import { customerMockData } from "./customer-mock-data"
import type { Customer } from "./types/customer-types"

async function getDb() {
  const { db } = await import("@/lib/firebase/client")
  return db
}

export async function getCustomers(): Promise<Customer[]> {
  return getFirestoreCollection<Customer>("register_users", customerMockData)
}

export async function createCustomer(customer: Customer): Promise<string> {
  return addFirestoreDocument(
    "register_users",
    customer as Record<string, unknown>,
    customer.id
  )
}

export async function updateCustomer(
  customerId: string,
  data: Partial<Omit<Customer, "id">>
): Promise<void> {
  return updateFirestoreDocument(
    "register_users",
    customerId,
    data as Record<string, unknown>
  )
}

export async function deleteCustomer(customerId: string): Promise<void> {
  return deleteFirestoreDocument("register_users", customerId)
}

export function getCustomerStats(customers: Customer[]) {
  return {
    total: customers.length,
  }
}
