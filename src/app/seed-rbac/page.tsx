import { Database, UploadCloud } from "lucide-react"
import { revalidatePath } from "next/cache"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { seedAuthMockData } from "@/modules/auth/services/mock-data-services"

async function seedRolesAction() {
  "use server"
  await seedAuthMockData()
  revalidatePath("/seed-rbac")
}

export default async function SeedRbacPage() {
  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "16rem",
        "--sidebar-width-icon": "3rem",
      } as React.CSSProperties}
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">RBAC Seed Data</span>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">RBAC Seed Data</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Seed roles và user_roles vào Firestore.
              </p>
            </div>
          </div>

          {/* Seed button */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                Firestore Collections
              </CardTitle>
              <CardDescription>
                2 collections sẽ được seed: <code>roles</code> và <code>user_roles</code>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Collection</TableHead>
                    <TableHead>Documents</TableHead>
                    <TableHead>Mô tả</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell><code className="text-xs">roles</code></TableCell>
                    <TableCell><Badge variant="secondary">5</Badge></TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      administrator, director, accounting, staff, customer
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><code className="text-xs">user_roles</code></TableCell>
                    <TableCell><Badge variant="secondary">5</Badge></TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      Map UID placeholder → role slug
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <form action={seedRolesAction}>
                <Button type="submit" className="cursor-pointer w-full">
                  <UploadCloud className="h-4 w-4" />
                  Seed Roles & User Roles
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Roles preview */}
          <Card>
            <CardHeader>
              <CardTitle>Roles sẽ được seed</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Role</TableHead>
                    <TableHead>Slug</TableHead>
                    <TableHead>Permissions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Administrator</TableCell>
                    <TableCell><Badge variant="default">administrator</Badge></TableCell>
                    <TableCell className="text-xs text-muted-foreground">Tất cả (20 menus)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Director</TableCell>
                    <TableCell><Badge variant="outline">director</Badge></TableCell>
                    <TableCell className="text-xs text-muted-foreground">dashboard, dashboard_2, dashboard_3, chart, iso_documents</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Accounting</TableCell>
                    <TableCell><Badge variant="outline">accounting</Badge></TableCell>
                    <TableCell className="text-xs text-muted-foreground">dashboard_3, chart, iso_documents</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Staff</TableCell>
                    <TableCell><Badge variant="outline">staff</Badge></TableCell>
                    <TableCell className="text-xs text-muted-foreground">iso_documents</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Customer</TableCell>
                    <TableCell><Badge variant="outline">customer</Badge></TableCell>
                    <TableCell className="text-xs text-muted-foreground">chart</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card className="border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/20">
            <CardContent className="text-sm text-blue-700 dark:text-blue-300 space-y-2 pt-4">
              <p className="font-medium">Cách gán role cho user thật:</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Vào <strong>Firebase Console → Firestore Database</strong></li>
                <li>Mở collection <code>user_roles</code></li>
                <li>Tạo document mới với ID = Firebase UID của user</li>
                <li>Thêm field <code>uid</code> = Firebase UID, <code>roleSlug</code> = role mong muốn</li>
              </ol>
              <p className="mt-2 text-xs">
                Ví dụ: uid = &quot;abc123xyz&quot;, roleSlug = &quot;administrator&quot;
              </p>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
