"use client"

import { useState } from "react"
import { format } from "date-fns"
import {
  FileText,
  Download,
  ExternalLink,
  Paperclip,
  Clock,
  Hash,
  Eye,
  Image,
  FileSpreadsheet,
  Presentation,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "sonner"
import type { Attachment } from "../services/types/iso-document-types"
import type { IsoDocument } from "../services/types/iso-document-types"

// ── File type config ─────────────────────────────────────────────────────────

function getFileColor(
  filetype: string
): { bg: string; text: string; border: string } {
  const colors: Record<string, { bg: string; text: string; border: string }> = {
    pdf: { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
    docx: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
    doc: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
    xlsx: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
    xls: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
    pptx: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      border: "border-orange-200",
    },
    ppt: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      border: "border-orange-200",
    },
    png: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
    },
    jpg: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
    },
    jpeg: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
    },
  }
  return (
    colors[filetype.toLowerCase()] ?? {
      bg: "bg-gray-50",
      text: "text-gray-700",
      border: "border-gray-200",
    }
  )
}

function getFileIcon(filetype: string) {
  const t = filetype.toLowerCase()
  if (t === "pdf") return <FileText className="h-7 w-7" />
  if (["png", "jpg", "jpeg", "gif", "webp"].includes(t))
    return <Image className="h-7 w-7" />
  if (["xlsx", "xls"].includes(t))
    return <FileSpreadsheet className="h-7 w-7" />
  if (["pptx", "ppt"].includes(t))
    return <Presentation className="h-7 w-7" />
  return <FileText className="h-7 w-7" />
}

function isMockUrl(url: string): boolean {
  return (
    url.includes("example.com") ||
    url.includes("placeholder") ||
    url.includes("via.placeholder") ||
    url.includes("localhost") ||
    (!url.startsWith("https://firebasestorage") &&
      !url.startsWith("https://storage.googleapis.com"))
  )
}

function isImageType(filetype: string): boolean {
  return ["png", "jpg", "jpeg", "gif", "webp"].includes(filetype.toLowerCase())
}

function isPdfType(filetype: string): boolean {
  return filetype.toLowerCase() === "pdf"
}

// ── Download / open handlers ─────────────────────────────────────────────────

function handleDownload(url: string, filename: string) {
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  link.target = "_blank"
  link.rel = "noopener noreferrer"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  toast.success(`Đang tải: ${filename}`)
}

function openInNewTab(url: string) {
  window.open(url, "_blank", "noopener,noreferrer")
}

// ── Preview panel ────────────────────────────────────────────────────────────

interface PreviewPanelProps {
  attachment: Attachment | null
  onClose: () => void
}

function PreviewPanel({ attachment, onClose }: PreviewPanelProps) {
  if (!attachment) return null

  const filetype = attachment.filetype.toLowerCase()
  const mock = isMockUrl(attachment.url)
  const colors = getFileColor(attachment.filetype)
  const isImage = isImageType(filetype)
  const isPdf = isPdfType(filetype)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-semibold">Xem trước</span>
          <span className="text-xs text-muted-foreground truncate max-w-[200px]">
            — {attachment.filename}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0 cursor-pointer"
            onClick={onClose}
            title="Đóng xem trước"
          >
            ✕
          </Button>
        </div>
      </div>

      <div className="rounded-lg border overflow-hidden bg-muted/20">
        {mock ? (
          /* ── Mock URL: placeholder ── */
          <div className="flex flex-col items-center gap-3 py-12 px-6 text-center">
            <div className={cn("p-4 rounded-full", colors.bg)}>
              <div className={colors.text}>{getFileIcon(attachment.filetype)}</div>
            </div>
            <div>
              <p className="font-medium text-sm">{attachment.filename}</p>
              <p className="text-xs text-muted-foreground mt-1 max-w-[280px]">
                File này là dữ liệu mẫu (mock). Không thể xem trực tuyến.
                Vui lòng tải xuống để xem nội dung.
              </p>
            </div>
            <Button
              size="sm"
              className="cursor-pointer"
              onClick={() =>
                handleDownload(attachment.url, attachment.filename)
              }
            >
              <Download className="h-4 w-4 mr-2" />
              Tải xuống để xem
            </Button>
          </div>
        ) : isImage ? (
          /* ── Image: embed directly ── */
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={attachment.url}
              alt={attachment.filename}
              className="w-full max-h-[360px] object-contain"
            />
            <div className="absolute bottom-3 right-3 flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                className="h-8 cursor-pointer shadow-md"
                onClick={() => openInNewTab(attachment.url)}
              >
                <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                Phóng to
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="h-8 cursor-pointer shadow-md"
                onClick={() =>
                  handleDownload(attachment.url, attachment.filename)
                }
              >
                <Download className="h-3.5 w-3.5 mr-1.5" />
                Tải xuống
              </Button>
            </div>
          </div>
        ) : isPdf ? (
          /* ── PDF: open in new tab (Firebase Storage blocks iframe) ── */
          <div className="flex flex-col items-center gap-4 py-12 px-6 text-center">
            <div className={cn("p-5 rounded-full", colors.bg)}>
              <div className={colors.text}>
                <FileText className="h-10 w-10" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm">{attachment.filename}</p>
              <p className="text-xs text-muted-foreground mt-1 max-w-[280px]">
                File PDF sẽ được mở trong tab mới để đảm bảo bảo mật.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="cursor-pointer"
                onClick={() => openInNewTab(attachment.url)}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Mở PDF trong tab mới
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="cursor-pointer"
                onClick={() =>
                  handleDownload(attachment.url, attachment.filename)
                }
              >
                <Download className="h-4 w-4 mr-2" />
                Tải xuống
              </Button>
            </div>
          </div>
        ) : (
          /* ── Other types (docx, xlsx, pptx...): open in new tab ── */
          <div className="flex flex-col items-center gap-4 py-12 px-6 text-center">
            <div className={cn("p-5 rounded-full", colors.bg)}>
              <div className={colors.text}>{getFileIcon(attachment.filetype)}</div>
            </div>
            <div>
              <p className="font-semibold text-sm">{attachment.filename}</p>
              <p className="text-xs text-muted-foreground mt-1 max-w-[280px]">
                Loại file này không hỗ trợ xem trước trực tiếp. Mở bằng ứng
                dụng tương ứng trên máy tính của bạn.
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="cursor-pointer"
                onClick={() => openInNewTab(attachment.url)}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Mở bằng ứng dụng
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="cursor-pointer"
                onClick={() =>
                  handleDownload(attachment.url, attachment.filename)
                }
              >
                <Download className="h-4 w-4 mr-2" />
                Tải xuống
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Single attachment row ─────────────────────────────────────────────────────

interface AttachmentRowProps {
  attachment: Attachment
  isActive: boolean
  onSelect: () => void
  onDownload: () => void
  onOpen: () => void
}

function AttachmentRow({
  attachment,
  isActive,
  onSelect,
  onDownload,
  onOpen,
}: AttachmentRowProps) {
  const colors = getFileColor(attachment.filetype)
  const mock = isMockUrl(attachment.url)
  const isImage = isImageType(attachment.filetype)
  const isPdf = isPdfType(attachment.filetype)
  const canView = (isImage || isPdf) && !mock

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer",
        isActive
          ? "bg-primary/5 border-primary/30 ring-1 ring-primary/20"
          : "bg-card hover:bg-muted/30 hover:border-muted-foreground/30"
      )}
      onClick={onSelect}
    >
      <div
        className={cn(
          "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
          colors.bg
        )}
      >
        <div className={colors.text}>
          {getFileIcon(attachment.filetype)}
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-medium text-sm truncate">{attachment.filename}</p>
          <Badge
            variant="outline"
            className={cn(
              "text-xs font-medium flex-shrink-0",
              colors.text,
              colors.bg,
              colors.border
            )}
          >
            {attachment.filetype.toUpperCase()}
          </Badge>
          {mock && (
            <Badge variant="secondary" className="text-xs flex-shrink-0">
              Mock
            </Badge>
          )}
        </div>
        {attachment.summary && (
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
            {attachment.summary}
          </p>
        )}
      </div>

      <div className="flex items-center gap-1 flex-shrink-0">
        {canView && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 cursor-pointer"
            title="Xem trước"
            onClick={(e) => {
              e.stopPropagation()
              onOpen()
            }}
          >
            <Eye className="h-3.5 w-3.5" />
          </Button>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 cursor-pointer text-primary"
          title="Tải xuống"
          onClick={(e) => {
            e.stopPropagation()
            onDownload()
          }}
        >
          <Download className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  )
}

// ── Main detail modal ────────────────────────────────────────────────────────

interface IsoDocumentDetailModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  document: IsoDocument | null
}

export function IsoDocumentDetailModal({
  open,
  onOpenChange,
  document,
}: IsoDocumentDetailModalProps) {
  const [selectedAttachment, setSelectedAttachment] = useState<Attachment | null>(null)

  if (!document) return null

  const attachments = document.attachments ?? []
  const primaryTypeColor = getFileColor(document.type)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[680px] max-h-[90vh] p-0">
        <div className="flex flex-col max-h-[90vh]">
          {/* ── Header ── */}
          <div className="px-6 pt-6 pb-4">
            <DialogHeader className="space-y-0">
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
                    primaryTypeColor.bg
                  )}
                >
                  <div className={cn("text-sm font-black uppercase", primaryTypeColor.text)}>
                    {document.type}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <DialogTitle className="text-lg leading-snug">
                    {document.name}
                  </DialogTitle>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-xs font-semibold uppercase",
                        primaryTypeColor.text,
                        primaryTypeColor.bg,
                        primaryTypeColor.border
                      )}
                    >
                      {document.type}
                    </Badge>
                    <Badge
                      className={cn(
                        "text-xs",
                        document.status === "published"
                          ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-100"
                          : "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100"
                      )}
                    >
                      {document.status === "published" ? "Đã xuất bản" : "Nháp"}
                    </Badge>
                  </div>
                </div>
              </div>
            </DialogHeader>

            {/* ── Metadata ── */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="flex items-center gap-1.5 text-xs">
                <Hash className="h-3 w-3 text-muted-foreground" />
                <span className="text-muted-foreground">ID:</span>
                <span className="font-mono bg-muted px-1 py-0.5 rounded truncate">
                  {document.id}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <FileText className="h-3 w-3 text-muted-foreground" />
                <span className="text-muted-foreground">Kích thước:</span>
                <span className="font-medium">{document.size || "—"}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span className="text-muted-foreground">Cập nhật:</span>
                <span className="font-medium">
                  {document.updatedAt
                    ? format(new Date(document.updatedAt), "dd/MM/yyyy")
                    : "—"}
                </span>
              </div>
            </div>
          </div>

          <Separator />

          {/* ── Body: attachments list + preview ── */}
          <ScrollArea className="flex-1 px-6">
            <div className="py-4 space-y-4">
              {/* Attachments header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Paperclip className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-semibold">Tệp đính kèm</span>
                  <Badge variant="secondary" className="text-xs">
                    {attachments.length}
                  </Badge>
                </div>
                {attachments.length > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs cursor-pointer"
                    onClick={() => {
                      attachments.forEach((att) => {
                        handleDownload(att.url, att.filename)
                      })
                    }}
                  >
                    <Download className="h-3.5 w-3.5 mr-1.5" />
                    Tải tất cả
                  </Button>
                )}
              </div>

              {/* Attachment list */}
              {attachments.length === 0 ? (
                <div className="flex flex-col items-center gap-2 py-8 text-muted-foreground border border-dashed rounded-lg">
                  <Paperclip className="h-8 w-8 opacity-30" />
                  <p className="text-sm">Không có tệp đính kèm</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {attachments.map((att, idx) => (
                    <AttachmentRow
                      key={`${att.filename}-${idx}`}
                      attachment={att}
                      isActive={
                        selectedAttachment?.filename === att.filename &&
                        selectedAttachment?.url === att.url
                      }
                      onSelect={() =>
                        setSelectedAttachment(
                          selectedAttachment?.filename === att.filename &&
                            selectedAttachment?.url === att.url
                            ? null
                            : att
                        )
                      }
                      onOpen={() => openInNewTab(att.url)}
                      onDownload={() =>
                        handleDownload(att.url, att.filename)
                      }
                    />
                  ))}
                </div>
              )}

              {/* Preview panel */}
              {attachments.length > 0 && (
                <>
                  <Separator />
                  {selectedAttachment ? (
                    <PreviewPanel
                      attachment={selectedAttachment}
                      onClose={() => setSelectedAttachment(null)}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 py-6 text-muted-foreground border border-dashed rounded-lg">
                      <Eye className="h-6 w-6 opacity-30" />
                      <p className="text-sm">
                        Bấm vào một tệp để xem trước hoặc tải xuống
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
