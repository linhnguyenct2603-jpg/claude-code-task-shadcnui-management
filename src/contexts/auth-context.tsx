"use client"

import { User } from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth"
import * as React from "react"
import { auth } from "@/lib/firebase/client"
import { getUserRole, ensureUserRole } from "@/modules/auth/services/role-services"
import type { Role } from "@/modules/auth/services/types/role-types"

export interface AuthContextValue {
  user: User | null
  role: Role | null
  isLoading: boolean
  isRoleLoading: boolean
  hasPermission: (permission: string) => boolean
}

const initialState: AuthContextValue = {
  user: null,
  role: null,
  isLoading: true,
  isRoleLoading: false,
  hasPermission: () => false,
}

export const AuthContext = React.createContext<AuthContextValue>(initialState)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null)
  const [role, setRole] = React.useState<Role | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isRoleLoading, setIsRoleLoading] = React.useState(false)

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)
      setIsLoading(false)

      if (!currentUser) {
        setRole(null)
        return
      }

      setIsRoleLoading(true)
      try {
        let userRole = await getUserRole(currentUser.uid)
        // Auto-seed role if not assigned yet (defaults to administrator)
        if (!userRole) {
          await ensureUserRole(currentUser.uid, "administrator")
          userRole = await getUserRole(currentUser.uid)
        }
        setRole(userRole)
      } catch {
        setRole(null)
      } finally {
        setIsRoleLoading(false)
      }
    })

    return unsubscribe
  }, [])

  const hasPermission = React.useCallback(
    (permission: string): boolean => {
      if (!role) return false
      return (role.permissions as string[]).includes(permission)
    },
    [role]
  )

  return (
    <AuthContext.Provider value={{ user, role, isLoading, isRoleLoading, hasPermission }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
