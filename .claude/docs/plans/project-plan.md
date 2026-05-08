# Kế hoạch: Chức năng quản lý dự án (Projects)

## Context

Thêm module **projects** mới theo đúng module pattern của codebase (tham khảo canonical `tasks`). Module cho phép CRUD dự án với collection `projects` trên Firebase Firestore, gồm title, startDate, dueDate, createdAt, updatedAt.

## Các file cần tạo

### 1. Types + Mock Data

- **`src/modules/projects/services/types/project-types.ts`** — zod schema + TypeScript interface `Project` (id, title, startDate, dueDate, createdAt, updatedAt)
- **`src/modules/projects/services/data/projects.json`** — 5 mock project items
- **`src/modules/projects/services/project-mock-data.ts`** — import JSON, export `projectSchema` và `projectMockData`
- **`src/modules/projects/services/mock-data-services.ts`** — seed function cho mock data seeder

### 2. Services

- **`src/modules/projects/services/project-services.ts`** — `getProjects`, `createProject`, `updateProject`, `deleteProject` dùng `getFirestoreCollection` / `addFirestoreDocument` / `updateFirestoreDocument` / `deleteFirestoreDocument`

### 3. Components (tất cả `"use client"`)

- **`src/modules/projects/components/data-table-column-header.tsx`** — copy từ tasks (không đổi)
- **`src/modules/projects/components/data-table-pagination.tsx`** — generic, không cần đổi
- **`src/modules/projects/components/data-table-view-options.tsx`** — copy từ tasks (không đổi)
- **`src/modules/projects/components/data-table-toolbar.tsx`** — search + Add Project button (bỏ filters vì project chỉ có title/startDate/dueDate, giữ lại search)
- **`src/modules/projects/components/data-table-row-actions.tsx`** — Edit (dialog có title/startDate/dueDate) + Delete confirmation dialog
- **`src/modules/projects/components/add-project-modal.tsx`** — Dialog form với title (required, max 100), startDate, dueDate (date picker inputs). Auto-generate id `PROJ-XXXX` và set createdAt/updateAt
- **`src/modules/projects/components/data-table.tsx`** — Tanstack Table, tương tự tasks nhưng generic cho Project

### 4. Columns

- **`src/modules/projects/components/columns.tsx`** — `buildColumns()` trả về columns: select checkbox, id (PROJ-XXXX), title, startDate (format date), dueDate (format date), actions (edit/delete). Có sorting trên id/title/startDate/dueDate.

### 5. Page

- **`src/app/(dashboard)/projects/page.tsx`** — Client component, state `projects[]`, load từ `getProjects()`, handle CRUD callbacks, hiển thị stat cards (total, active, completed count) + data table. Thêm `"use client"` và pattern giống hệt tasks page.

### 6. Sidebar nav

- **`src/components/app-sidebar.tsx`** — Thêm `projects` vào navGroups (Apps section), icon `Briefcase` từ lucide-react, url `/projects`

### 7. Mock Data Seeder

- **`src/modules/mock-data-services.ts`** — Thêm `projects` vào `mockDataFeatures` array (import `seedProjectsMockData`)

## Chi tiết từng file

### `project-types.ts`
```typescript
export const projectSchema = z.object({
  id: z.string(),
  title: z.string().min(1).max(100),
  startDate: z.string().optional(), // ISO date string
  dueDate: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})
export type Project = z.infer<typeof projectSchema>
```

### `data-table.tsx`
Generic wrapper giống tasks, nhận `columns` + `data` + `onCreateProject`.

### `columns.tsx`
Columns: select (checkbox), id, title (sortable), startDate (sortable, format `dd/MM/yyyy`), dueDate (sortable, format `dd/MM/yyyy`), actions. Edit/Delete gọi qua `buildColumns({ onUpdate, onDelete })`.

### `add-project-modal.tsx`
Form có 3 field:
- **Title**: Input text, required, max 100, validate với zod
- **Start Date**: Input type="date"
- **Due Date**: Input type="date"
Auto-gen id `PROJ-${Math.floor(Math.random() * 9999) + 1}` padding 4 digits. Submit gọi `onAddProject`.

### `data-table-row-actions.tsx`
Edit dialog giống add nhưng pre-fill data. Delete dialog confirm. Dùng zod validation cho title.

### `page.tsx`
Layout:
- Header: "Projects" + description
- Stats: Total, Active (dueDate > now), Completed (dueDate passed)
- Card chứa DataTable

## Verification

1. Chạy `npx tsc --noEmit` kiểm tra TypeScript
2. Chạy `npm run dev` và truy cập `/projects`
3. Test: Add project mới → hiện trong table → Edit → Delete
4. Test: Search, sort các cột hoạt động
5. Mock data seeder tại `/mock-data` seed được projects
