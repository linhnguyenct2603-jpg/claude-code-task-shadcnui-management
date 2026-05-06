"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"
import { StatCards } from "@/modules/users/components/stat-cards"
import { DataTable } from "@/modules/users/components/data-table"
import { createUser, getUsers, saveUser } from "@/modules/users/services/user-services"
import type { User, UserFormValues } from "@/modules/users/services/types/user-types"

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsers()
        setUsers(data)
      } catch (error) {
        console.error("Failed to load users:", error)
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  const handleAddUser = async (userData: UserFormValues) => {
    const newUser = createUser(users, userData)

    try {
      await saveUser(newUser)
      setUsers((prev) => [newUser, ...prev])
      toast.success("User added successfully")
    } catch (error) {
      console.error("Failed to save user:", error)
      toast.error("Failed to add user. Please try again.")
    }
  }

  const handleDeleteUser = (id: number) => {
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  const handleEditUser = (user: User) => {
    // For now, just log the user to edit
    // In a real app, you'd open an edit dialog
    console.log("Edit user:", user)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-muted-foreground">Loading users...</div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="@container/main px-4 lg:px-6">
        <StatCards />
      </div>
      
      <div className="@container/main px-4 lg:px-6 mt-8 lg:mt-12">
        <DataTable 
          users={users}
          onDeleteUser={handleDeleteUser}
          onEditUser={handleEditUser}
          onAddUser={handleAddUser}
        />
      </div>
    </div>
  )
}
