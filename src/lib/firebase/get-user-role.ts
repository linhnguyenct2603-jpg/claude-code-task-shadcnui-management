import "server-only"

import { cookies } from "next/headers"
import { adminAuth, adminDb } from "@/lib/firebase/admin"
import type { Role } from "@/modules/auth/services/types/role-types"

export async function getServerUserRole(): Promise<{
  uid: string | null
  role: Role | null
}> {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get("session")?.value

  if (!sessionCookie) {
    return { uid: null, role: null }
  }

  let decodedToken: { uid: string; email?: string }
  try {
    decodedToken = await adminAuth().verifySessionCookie(sessionCookie, true)
  } catch {
    return { uid: null, role: null }
  }

  const uid = decodedToken.uid

  try {
    const userRolesSnap = await adminDb()
      .collection("user_roles")
      .where("uid", "==", uid)
      .limit(1)
      .get()

    if (userRolesSnap.empty) {
      return { uid, role: null }
    }

    const userRoleData = userRolesSnap.docs[0].data()
    const roleSlug: string = userRoleData.roleSlug

    const rolesSnap = await adminDb()
      .collection("roles")
      .where("slug", "==", roleSlug)
      .limit(1)
      .get()

    if (rolesSnap.empty) {
      return { uid, role: null }
    }

    const roleData = rolesSnap.docs[0].data()
    const role: Role = {
      id: rolesSnap.docs[0].id,
      name: roleData.name,
      slug: roleData.slug,
      description: roleData.description,
      permissions: roleData.permissions,
      createdAt: roleData.createdAt?.toDate?.()?.toISOString() ?? "",
      updatedAt: roleData.updatedAt?.toDate?.()?.toISOString() ?? "",
    }

    return { uid, role }
  } catch {
    return { uid, role: null }
  }
}

export async function createSessionCookie(idToken: string): Promise<string> {
  const expiresIn = 60 * 60 * 24 * 5 * 1000 // 5 days
  return adminAuth().createSessionCookie(idToken, { expiresIn })
}
