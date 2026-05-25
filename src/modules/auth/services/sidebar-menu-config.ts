import {
  AlertTriangle,
  BarChart3,
  BookMarked,
  Calendar,
  CheckSquare,
  CreditCard,
  Database,
  HelpCircle,
  LayoutDashboard,
  LayoutPanelLeft,
  LayoutTemplate,
  Mail,
  Megaphone,
  MessageCircle,
  Monitor,
  Settings,
  Shield,
  Users,
  FileText,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface NavItem {
  title: string
  url: string
  icon: LucideIcon
  permission: string
  target?: "_blank"
  items?: NavItem[]
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

export const sidebarMenuConfig: NavGroup[] = [
  {
    label: "Dashboards",
    items: [
      {
        title: "Dashboard 1",
        url: "/dashboard",
        icon: LayoutDashboard,
        permission: "dashboard",
      },
      {
        title: "Dashboard 2",
        url: "/dashboard-2",
        icon: LayoutPanelLeft,
        permission: "dashboard_2",
      },
      {
        title: "Dashboard 3",
        url: "/dashboard-3",
        icon: Megaphone,
        permission: "dashboard_3",
      },
      {
        title: "Biểu đồ doanh thu",
        url: "/chart",
        icon: BarChart3,
        permission: "chart",
      },
    ],
  },
  {
    label: "Apps",
    items: [
      {
        title: "Mail",
        url: "/mail",
        icon: Mail,
        permission: "mail",
      },
      {
        title: "Tasks",
        url: "/tasks",
        icon: CheckSquare,
        permission: "tasks",
      },
      {
        title: "Chat",
        url: "/chat",
        icon: MessageCircle,
        permission: "chat",
      },
      {
        title: "Calendar",
        url: "/calendar",
        icon: Calendar,
        permission: "calendar",
      },
      {
        title: "Users",
        url: "/users",
        icon: Users,
        permission: "users",
      },
      {
        title: "Biểu mẫu ISO",
        url: "/iso-documents",
        icon: FileText,
        permission: "iso_documents",
      },
      {
        title: "Quiz",
        url: "/quiz",
        icon: BookMarked,
        permission: "quiz",
      },
      {
        title: "Quiz Monitor",
        url: "/quiz-monitor",
        icon: Monitor,
        permission: "quiz_monitor",
      },
    ],
  },
  {
    label: "Pages",
    items: [
      {
        title: "Landing",
        url: "/landing",
        target: "_blank",
        icon: LayoutTemplate,
        permission: "landing",
      },
      {
        title: "Auth Pages",
        url: "#",
        icon: Shield,
        permission: "errors",
        items: [
          { title: "Sign In", url: "/sign-in", icon: Shield, permission: "errors" },
          { title: "Sign Up", url: "/sign-up", icon: Shield, permission: "errors" },
          { title: "Forgot Password", url: "/forgot-password", icon: Shield, permission: "errors" },
        ],
      },
      {
        title: "Errors",
        url: "#",
        icon: AlertTriangle,
        permission: "errors",
        items: [
          { title: "Unauthorized", url: "/errors/unauthorized", icon: AlertTriangle, permission: "errors" },
          { title: "Forbidden", url: "/errors/forbidden", icon: AlertTriangle, permission: "errors" },
          { title: "Not Found", url: "/errors/not-found", icon: AlertTriangle, permission: "errors" },
          { title: "Internal Server Error", url: "/errors/internal-server-error", icon: AlertTriangle, permission: "errors" },
          { title: "Under Maintenance", url: "/errors/under-maintenance", icon: AlertTriangle, permission: "errors" },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
        permission: "settings",
        items: [
          { title: "User Settings", url: "/settings/user", icon: Settings, permission: "settings" },
          { title: "Account Settings", url: "/settings/account", icon: Settings, permission: "settings" },
          { title: "Plans & Billing", url: "/settings/billing", icon: Settings, permission: "settings" },
          { title: "Appearance", url: "/settings/appearance", icon: Settings, permission: "settings" },
          { title: "Notifications", url: "/settings/notifications", icon: Settings, permission: "settings" },
          { title: "Connections", url: "/settings/connections", icon: Settings, permission: "settings" },
          { title: "Phân quyền User", url: "/settings/roles", icon: Shield, permission: "users" },
        ],
      },
      {
        title: "FAQs",
        url: "/faqs",
        icon: HelpCircle,
        permission: "faqs",
      },
      {
        title: "Pricing",
        url: "/pricing",
        icon: CreditCard,
        permission: "pricing",
      },
      {
        title: "Mock Data",
        url: "/mock-data",
        icon: Database,
        permission: "mock_data",
      },
    ],
  },
]

export function filterNavGroups(
  groups: NavGroup[],
  hasPermission: (permission: string) => boolean
): NavGroup[] {
  return groups
    .map((group) => {
      const filteredItems = group.items
        .map((item) => {
          if (!hasPermission(item.permission)) return null

          if (item.items) {
            const filteredSubItems = item.items.filter((sub) =>
              hasPermission(sub.permission)
            )
            if (filteredSubItems.length === 0) return null
            return { ...item, items: filteredSubItems }
          }

          return item
        })
        .filter((item): item is NavItem => item !== null)

      if (filteredItems.length === 0) return null
      return { label: group.label, items: filteredItems }
    })
    .filter((group): group is NavGroup => group !== null)
}
