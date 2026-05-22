export type RoleSlug =
  | "administrator"
  | "director"
  | "accounting"
  | "staff"
  | "customer"

export type MenuPermission =
  | "dashboard"
  | "dashboard_2"
  | "dashboard_3"
  | "chart"
  | "mail"
  | "tasks"
  | "chat"
  | "calendar"
  | "users"
  | "iso_documents"
  | "quiz"
  | "quiz_monitor"
  | "settings"
  | "faqs"
  | "pricing"
  | "mock_data"
  | "landing"
  | "errors"
  | "customer_care"
  | "projects"

export interface Role {
  id: string
  name: string
  slug: RoleSlug
  description: string
  permissions: MenuPermission[]
  createdAt: string
  updatedAt: string
}

export interface UserRole {
  id: string
  uid: string
  roleSlug: RoleSlug
  assignedAt: string
  assignedBy: string | null
}
