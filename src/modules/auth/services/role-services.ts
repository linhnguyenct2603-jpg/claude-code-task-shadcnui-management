import { getFirestoreCollection } from "@/lib/firebase/firestore-query"

import rolesData from "./data/roles.json"
import userRolesData from "./data/user-roles.json"
import type { Role, RoleSlug, UserRole } from "./types/role-types"

const roleMockData = rolesData as Role[]
const userRoleMockData = userRolesData as UserRole[]

export async function getRoles(): Promise<Role[]> {
  return getFirestoreCollection<Role>("roles", roleMockData)
}

export async function getUserRoles(): Promise<UserRole[]> {
  return getFirestoreCollection<UserRole>("user_roles", userRoleMockData)
}

export async function getRoleBySlug(slug: RoleSlug): Promise<Role | null> {
  const roles = await getRoles()
  return roles.find((r) => r.slug === slug) ?? null
}

export async function getUserRole(uid: string): Promise<Role | null> {
  if (!uid) return null
  const userRoles = await getUserRoles()
  const userRole = userRoles.find((ur) => ur.uid === uid)
  if (!userRole) return null
  return getRoleBySlug(userRole.roleSlug)
}

export function hasPermission(role: Role | null, permission: string): boolean {
  if (!role) return false
  return role.permissions.includes(permission as Role["permissions"][number])
}
