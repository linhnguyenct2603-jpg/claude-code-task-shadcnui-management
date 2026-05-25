"use client"

import { useEffect, useState } from "react"
import { Shield, Plus, Save, Loader2 } from "lucide-react"

import { getUsers } from "@/modules/users/services/user-services"
import { getRoles, getUserRole, assignUserRole } from "@/modules/auth/services/role-services"
import type { Role, RoleSlug } from "@/modules/auth/services/types/role-types"
import type { User } from "@/modules/users/services/types/user-types"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"

const roleLabelMap: Record<RoleSlug, string> = {
  administrator: "Administrator",
  director: "Director",
  accounting: "Accounting",
  staff: "Staff",
  customer: "Customer",
}

const roleColorMap: Record<RoleSlug, string> = {
  administrator: "bg-red-500",
  director: "bg-blue-500",
  accounting: "bg-amber-500",
  staff: "bg-green-500",
  customer: "bg-purple-500",
}

interface UserWithRole {
  user: User
  role: Role | null
}

export default function UserRolesSettingsPage() {
  const [roles, setRoles] = useState<Role[]>([])
  const [usersWithRoles, setUsersWithRoles] = useState<UserWithRole[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [savingUid, setSavingUid] = useState<string | null>(null)

  // Form state for assigning new role
  const [uidInput, setUidInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [selectedRole, setSelectedRole] = useState<RoleSlug | "">("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    async function load() {
      setIsLoading(true)
      try {
        const [loadedRoles, loadedUsers] = await Promise.all([getRoles(), getUsers()])
        setRoles(loadedRoles)

        // Fetch role for each user by their uid (mock user id = uid)
        const withRoles = await Promise.all(
          loadedUsers.map(async (user) => ({
            user,
            role: await getUserRole(user.id.toString()),
          }))
        )
        setUsersWithRoles(withRoles)
      } catch (err) {
        console.error("Failed to load data:", err)
        toast.error("Không thể tải dữ liệu phân quyền.")
      } finally {
        setIsLoading(false)
      }
    }
    load()
  }, [])

  async function handleAssignRole(uid: string, roleSlug: RoleSlug) {
    setSavingUid(uid)
    try {
      await assignUserRole(uid, roleSlug)
      setUsersWithRoles((prev) =>
        prev.map((uw) =>
          uw.user.id.toString() === uid
            ? { ...uw, role: roles.find((r) => r.slug === roleSlug) ?? null }
            : uw
        )
      )
      toast.success("Phân quyền thành công!")
    } catch {
      toast.error("Lỗi khi lưu phân quyền.")
    } finally {
      setSavingUid(null)
    }
  }

  async function handleAddNewRole() {
    if (!uidInput.trim() || !selectedRole) {
      toast.error("Vui lòng nhập Firebase UID và chọn vai trò.")
      return
    }
    setIsSubmitting(true)
    try {
      await assignUserRole(uidInput.trim(), selectedRole as RoleSlug)
      toast.success("Đã gán vai trò thành công!")
      setUidInput("")
      setEmailInput("")
      setSelectedRole("")
    } catch {
      toast.error("Lỗi khi gán phân quyền.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Phân quyền người dùng</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Gán Firebase UID của người dùng vào vai trò để hiển thị sidebar đúng theo RLS.
        </p>
      </div>

      {/* Add new role assignment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Plus className="h-4 w-4" />
            Gán vai trò mới
          </CardTitle>
          <CardDescription>
            Nhập Firebase UID của người dùng (lấy từ Firebase Console &gt; Authentication) và chọn vai trò.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Firebase UID</Label>
              <Input
                placeholder="Ví dụ: abc123XYZ..."
                value={uidInput}
                onChange={(e) => setUidInput(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Email (tùy chọn, để ghi chú)</Label>
              <Input
                placeholder=" Ví dụ: user@example.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Vai trò</Label>
              <Select
                value={selectedRole}
                onValueChange={(v) => setSelectedRole(v as RoleSlug)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn vai trò..." />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role.slug} value={role.slug}>
                      {roleLabelMap[role.slug]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4">
            <Button onClick={handleAddNewRole} disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              Lưu phân quyền
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* User role management table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Shield className="h-4 w-4" />
            Quản lý vai trò người dùng
          </CardTitle>
          <CardDescription>
            Chọn vai trò cho từng người dùng. Thay đổi sẽ cập nhật sidebar ngay lập tức cho họ.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Firebase UID</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Tên</TableHead>
                <TableHead>Vai trò hiện tại</TableHead>
                <TableHead>Thay đổi vai trò</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersWithRoles.map(({ user, role }) => (
                <TableRow key={user.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {user.id}
                  </TableCell>
                  <TableCell className="text-sm">{user.email}</TableCell>
                  <TableCell className="text-sm">{user.name}</TableCell>
                  <TableCell>
                    {role ? (
                      <Badge className={`${roleColorMap[role.slug]} text-white border-0`}>
                        {roleLabelMap[role.slug]}
                      </Badge>
                    ) : (
                      <Badge variant="outline">Chưa gán</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <Select
                      value={role?.slug ?? ""}
                      onValueChange={(v) =>
                        handleAssignRole(user.id.toString(), v as RoleSlug)
                      }
                      disabled={savingUid === user.id.toString()}
                    >
                      <SelectTrigger className="w-[160px]">
                        {savingUid === user.id.toString() ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <SelectValue placeholder="Chọn vai trò..." />
                        )}
                      </SelectTrigger>
                      <SelectContent>
                        {roles.map((r) => (
                          <SelectItem key={r.slug} value={r.slug}>
                            {roleLabelMap[r.slug]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Role summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Tóm tắt vai trò &amp; quyền truy cập</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((role) => (
              <div key={role.slug} className="flex flex-col gap-1 p-3 border rounded-lg">
                <div className="flex items-center gap-2">
                  <Badge className={`${roleColorMap[role.slug]} text-white border-0`}>
                    {roleLabelMap[role.slug]}
                  </Badge>
                  <span className="text-xs text-muted-foreground ml-auto">
                    {usersWithRoles.filter((uw) => uw.role?.slug === role.slug).length} user(s)
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{role.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {role.permissions.map((perm) => (
                    <Badge key={perm} variant="secondary" className="text-[10px] px-1.5 py-0">
                      {perm}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
