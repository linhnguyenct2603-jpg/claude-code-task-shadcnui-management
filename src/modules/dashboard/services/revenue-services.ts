"use client"

import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore"
import { db } from "@/lib/firebase/client"
import { revenueMockData } from "./revenue-mock-data"
import type { Revenue } from "./types/revenue-types"

export function subscribeToRevenues(
  onData: (data: Revenue[]) => void,
  onError?: (error: Error) => void
): () => void {
  const q = query(collection(db, "revenues"), orderBy("month", "asc"))

  return subscribeWithQuery(q, onData, onError)
}

export function subscribeToRevenuesByYear(
  year: number,
  onData: (data: Revenue[]) => void,
  onError?: (error: Error) => void
): () => void {
  const q = query(
    collection(db, "revenues"),
    where("year", "==", year),
    orderBy("month", "asc")
  )

  return subscribeWithQuery(q, onData, onError)
}

function subscribeWithQuery(
  q: ReturnType<typeof query>,
  onData: (data: Revenue[]) => void,
  onError?: (error: Error) => void
): () => void {
  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      if (snapshot.empty) {
        onData(revenueMockData)
        return
      }

      const data: Revenue[] = snapshot.docs.map((doc) => {
        const raw = doc.data() as Record<string, unknown>
        return {
          ...raw,
          id: doc.id,
        } as unknown as Revenue
      })

      onData(data)
    },
    (error) => {
      console.warn("[Revenue] Firestore realtime error:", error)
      onError?.(error)
      onData(revenueMockData)
    }
  )

  return unsubscribe
}

export function getAvailableYears(data: Revenue[]): number[] {
  const years = new Set(data.map((r) => r.year))
  return Array.from(years).sort((a, b) => b - a)
}
