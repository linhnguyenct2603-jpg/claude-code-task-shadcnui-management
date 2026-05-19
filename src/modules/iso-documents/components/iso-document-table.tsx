"use client"

import { useState, useMemo } from "react"
import { format } from "date-fns"
import { FileText, MoreHorizontal, Pencil, Trash2, Eye, Upload, Download } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from "sonner"
import type { IsoDocument } from "../services/types/iso-document-types"
import {
  deleteIsoDocument,
  updateIsoDocument,
  FILE_TYPE_OPTIONS,
  STATUS_OPTIONS,
} from "../services/iso-document-services"
import { IsoDocumentDetailModal } from "./iso-document-detail-modal"

// ── File type badge colors ───────────────────────────────────────────────────

function FileTypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    pdf: "bg-red-100 text-red-700 border-red-200",
    docx: "bg-blue-100 text-blue-700 border-blue-200",
    xlsx: "bg-green-100 text-green-700 border-green-200",
    pptx: "bg-orange-100 text-orange-700 border-orange-200",
  }
  const color = colors[type.toLowerCase()] ?? "bg-gray-100 text-gray-700 border-gray-200"
  return (
    <Badge variant="outline" className={cn("font-medium", color)}>
      {type.toUpperCase()}
    </Badge>
  )
}

// ── Status badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: string }) {
  if (status === "published") {
    return (
      <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100">
        Đã xuất bản
      </Badge>
    )
  }
  return (
    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100">
      Nháp
    </Badge>
  )
}

// ── Filter bar ───────────────────────────────────────────────────────────────

interface IsoDocumentFiltersProps {
  search: string
  onSearchChange: (v: string) => void
  statusFilter: string
  onStatusChange: (v: string) => void
  typeFilter: string
  onTypeChange: (v: string) => void
}

export function IsoDocumentFilters({
  search,
  onSearchChange,
  statusFilter,
  onStatusChange,
  typeFilter,
  onTypeChange,
}: IsoDocumentFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Input
        placeholder="Tìm kiếm biểu mẫu..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="sm:max-w-[280px] cursor-text"
      />
      <div className="flex gap-2 flex-wrap">
        <Select value={statusFilter} onValueChange={onStatusChange}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả trạng thái</SelectItem>
            {STATUS_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={typeFilter} onValueChange={onTypeChange}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Loại tệp" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả loại</SelectItem>
            {FILE_TYPE_OPTIONS.filter((f) => f.value !== "all").map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

// ── Skeleton rows ────────────────────────────────────────────────────────────

function TableSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <TableRow key={i}>
          <TableCell className="w-[40%]">
            <Skeleton className="h-5 w-48" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-5 w-16" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-5 w-20" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-5 w-24" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-5 w-20" />
          </TableCell>
          <TableCell>
            <Skeleton className="h-8 w-8 rounded" />
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}

// ── Main table ───────────────────────────────────────────────────────────────

interface IsoDocumentTableProps {
  documents: IsoDocument[]
  loading: boolean
  onUpdate: (docId: string, data: Partial<IsoDocument>) => Promise<void>
  onDelete: (docId: string) => Promise<void>
}

export function IsoDocumentTable({
  documents,
  loading,
  onUpdate,
  onDelete,
}: IsoDocumentTableProps) {
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [docToDelete, setDocToDelete] = useState<IsoDocument | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [detailOpen, setDetailOpen] = useState(false)
  const [docToView, setDocToView] = useState<IsoDocument | null>(null)

  // Filter logic
  const filtered = useMemo(() => {
    return documents.filter((doc) => {
      const matchSearch =
        !search ||
        doc.name.toLowerCase().includes(search.toLowerCase())
      const matchStatus = statusFilter === "all" || doc.status === statusFilter
      const matchType = typeFilter === "all" || doc.type === typeFilter
      return matchSearch && matchStatus && matchType
    })
  }, [documents, search, statusFilter, typeFilter])

  const handleDeleteConfirm = async () => {
    if (!docToDelete) return
    setDeleting(true)
    try {
      await onDelete(docToDelete.id)
      setDeleteOpen(false)
      setDocToDelete(null)
      toast.success("Xóa biểu mẫu thành công")
    } catch {
      toast.error("Xóa biểu mẫu thất bại")
    } finally {
      setDeleting(false)
    }
  }

  const handleToggleStatus = async (doc: IsoDocument) => {
    const newStatus = doc.status === "draft" ? "published" : "draft"
    try {
      await onUpdate(doc.id, { status: newStatus })
      toast.success(
        newStatus === "published"
          ? "Đã xuất bản biểu mẫu"
          : "Đã chuyển sang nháp"
      )
    } catch {
      toast.error("Cập nhật trạng thái thất bại")
    }
  }

  return (
    <div className="space-y-4">
      <IsoDocumentFilters
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
      />

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Tên biểu mẫu</TableHead>
              <TableHead>Loại</TableHead>
              <TableHead>Kích thước</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Cập nhật</TableHead>
              <TableHead className="w-[60px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableSkeleton />
            ) : filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-12">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground">
                    <FileText className="h-10 w-10 opacity-30" />
                    <p className="font-medium">Không tìm thấy biểu mẫu nào</p>
                    <p className="text-sm">Thử thay đổi bộ lọc hoặc tạo biểu mẫu mới</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <button
                      className="flex items-center gap-3 text-left hover:text-primary transition-colors cursor-pointer w-full"
                      onClick={() => {
                        setDocToView(doc)
                        setDetailOpen(true)
                      }}
                    >
                      <FileText className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-medium truncate max-w-[300px]">{doc.name}</p>
                        {doc.attachments && doc.attachments.length > 0 && (
                          <p className="text-xs text-muted-foreground">
                            {doc.attachments.length} tệp đính kèm
                          </p>
                        )}
                      </div>
                    </button>
                  </TableCell>
                  <TableCell>
                    <FileTypeBadge type={doc.type} />
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {doc.size}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={doc.status} />
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {doc.updatedAt
                      ? format(new Date(doc.updatedAt), "dd/MM/yyyy")
                      : "—"}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="cursor-pointer"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          className="cursor-pointer"
                          onClick={() => {
                            setDocToView(doc)
                            setDetailOpen(true)
                          }}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Xem chi tiết
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="cursor-pointer"
                          onClick={() => handleToggleStatus(doc)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          {doc.status === "draft" ? "Xuất bản" : "Chuyển nháp"}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="cursor-pointer text-destructive"
                          onClick={() => {
                            setDocToDelete(doc)
                            setDeleteOpen(true)
                          }}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Xóa
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Delete confirmation dialog */}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent className="sm:max-w-[420px]">
          <DialogHeader>
            <DialogTitle>Xác nhận xóa biểu mẫu</DialogTitle>
            <DialogDescription>
              Bạn có chắc chắn muốn xóa biểu mẫu &quot;
              <span className="font-medium text-foreground">
                {docToDelete?.name}
              </span>
              &quot;? Hành động này không thể hoàn tác.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setDeleteOpen(false)
                setDocToDelete(null)
              }}
            >
              Hủy
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteConfirm}
              disabled={deleting}
            >
              {deleting ? "Đang xóa..." : "Xóa"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Document detail modal */}
      <IsoDocumentDetailModal
        open={detailOpen}
        onOpenChange={setDetailOpen}
        document={docToView}
      />
    </div>
  )
}
