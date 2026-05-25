import { doc, setDoc } from "firebase/firestore"

import { getFirestoreCollection, getFirestoreDocument } from "@/lib/firebase/firestore-query"
import { db } from "@/lib/firebase/client"

import rolesData from "./data/roles.json"
import type { Role, RoleSlug, UserRole } from "./types/role-types"

const roleMockData = rolesData as Role[]

export async function getRoles(): Promise<Role[]> {
  return getFirestoreCollection<Role>("roles", roleMockData)
}

export async function getUserRoles(): Promise<UserRole[]> {
  return getFirestoreCollection<UserRole>("user_roles", [])
}

export async function getRoleBySlug(slug: RoleSlug): Promise<Role | null> {
  const roles = await getRoles()
  return roles.find((r) => r.slug === slug) ?? null
}

export async function getUserRole(uid: string): Promise<Role | null> {
  if (!uid) return null
  // Đọc document theo UID (document ID = uid)
  const userRole = await getFirestoreDocument<UserRole>("user_roles", uid)
  if (!userRole) return null
  return getRoleBySlug(userRole.roleSlug as RoleSlug)
}

export function hasPermission(role: Role | null, permission: string): boolean {
  if (!role) return false
  return role.permissions.includes(permission as Role["permissions"][number])
}

export async function assignUserRole(uid: string, roleSlug: RoleSlug): Promise<void> {
  await setDoc(
    doc(db, "user_roles", uid),
    {
      uid,
      roleSlug,
      assignedAt: new Date().toISOString(),
    },
    { merge: true }
  )
}

export async function ensureUserRole(uid: string, roleSlug: RoleSlug): Promise<void> {
  await setDoc(
    doc(db, "user_roles", uid),
    {
      uid,
      roleSlug,
      assignedAt: new Date().toISOString(),
    },
    { merge: true }
  )
}
