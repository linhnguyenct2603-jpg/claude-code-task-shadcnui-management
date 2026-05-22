"use client"

import * as React from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useAuth } from "@/contexts/auth-context"
import { filterNavGroups, sidebarMenuConfig } from "@/modules/auth/services/sidebar-menu-config"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, role, hasPermission } = useAuth()

  const navGroups = React.useMemo(
    () => filterNavGroups(sidebarMenuConfig, hasPermission),
    [hasPermission]
  )

  const displayUser = user
    ? {
        name: user.displayName || user.email || "User",
        email: user.email || "",
        avatar: "",
      }
    : null

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Logo size={24} className="text-current" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {role?.name || "Dashboard"}
                  </span>
                  <span className="truncate text-xs">
                    {user?.displayName || "RBAC Dashboard"}
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {navGroups.map((group) => (
          <NavMain key={group.label} label={group.label} items={group.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        {displayUser && <NavUser user={displayUser} />}
      </SidebarFooter>
    </Sidebar>
  )
}
