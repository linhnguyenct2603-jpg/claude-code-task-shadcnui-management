"use server"

import { cookies } from "next/headers"
import { adminAuth } from "@/lib/firebase/admin"

export async function setSessionCookie(idToken: string): Promise<void> {
  const expiresIn = 60 * 60 * 24 * 5 * 1000 // 5 days

  const sessionCookie = await adminAuth().createSessionCookie(idToken, { expiresIn })

  const cookieStore = await cookies()
  cookieStore.set("session", sessionCookie, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: expiresIn / 1000,
  })
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete("session")
}
