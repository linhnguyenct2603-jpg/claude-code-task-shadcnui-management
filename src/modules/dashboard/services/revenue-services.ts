"use client"

import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { db } from "@/lib/firebase/client"
import { revenueMockData } from "./revenue-mock-data"
import type { Revenue } from "./types/revenue-types"

export function subscribeToRevenues(
  onData: (data: Revenue[]) => void,
  onError?: (error: Error) => void
): () => void {
  const q = query(collection(db, "revenues"), orderBy("month", "asc"))

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      if (snapshot.empty) {
        onData(revenueMockData)
        return
      }

      const data: Revenue[] = snapshot.docs.map((doc) => {
        const raw = doc.data()
        return {
          ...raw,
          id: doc.id,
        } as Revenue
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
