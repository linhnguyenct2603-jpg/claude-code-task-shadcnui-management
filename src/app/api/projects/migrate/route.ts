import { NextResponse } from "next/server"

import { db } from "@/lib/firebase/client"

import { collection, getDocs, writeBatch, doc } from "firebase/firestore"

export async function POST() {
  try {
    const snapshot = await getDocs(collection(db, "projects"))

    const batch = writeBatch(db)
    let count = 0

    snapshot.docs.forEach((docSnap) => {
      const data = docSnap.data()
      if (data.priority === undefined) {
        batch.update(doc(db, "projects", docSnap.id), {
          priority: "medium",
          updatedAt: new Date().toISOString(),
        })
        count++
      }
    })

    if (count === 0) {
      return NextResponse.json({ message: "No documents need migration", migrated: 0 })
    }

    await batch.commit()

    return NextResponse.json({
      message: `Migrated ${count} project(s) successfully`,
      migrated: count,
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: "Migration failed", detail: error?.message },
      { status: 500 }
    )
  }
}
