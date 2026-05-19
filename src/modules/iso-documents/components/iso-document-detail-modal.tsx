"use client"

import { useState, useCallback } from "react"
import { format } from "date-fns"
import {
  FileText,
  Download,
  ExternalLink,
  Paperclip,
  Clock,
  Hash,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  X,
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
import { Slider } from "@/components/ui/slider"
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
  if (t === "pdf") return <FileText className="h-8 w-8" />
  if (["png", "jpg", "jpeg", "gif", "webp"].includes(t))
    return <Image className="h-8 w-8" />
  if (["xlsx", "xls"].includes(t))
    return <FileSpreadsheet className="h-8 w-8" />
  if (["pptx", "ppt"].includes(t))
    return <Presentation className="h-8 w-8" />
  return <FileText className="h-8 w-8" />
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

function isDocType(filetype: string): boolean {
  return ["pdf", "docx", "doc", "pptx", "ppt", "xlsx", "xls"].includes(
    filetype.toLowerCase()
  )
}

// ── Handlers ─────────────────────────────────────────────────────────────────

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

// ── Image preview modal ───────────────────────────────────────────────────────

interface ImagePreviewModalProps {
  attachment: Attachment | null
  onClose: () => void
}

function ImagePreviewModal({
  attachment,
  onClose,
}: ImagePreviewModalProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const resetView = useCallback(() => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }, [])

  const zoomIn = () => setScale((s) => Math.min(s + 0.25, 3))
  const zoomOut = () => setScale((s) => Math.max(s - 0.25, 0.25))

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return
    setIsDragging(true)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    })
  }

  const handleMouseUp = () => setIsDragging(false)

  if (!attachment) return null

  return (
    <Dialog open={!!attachment} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <Image className="h-4 w-4 text-muted-foreground shrink-0" />
            <span className="text-sm font-medium truncate">
              {attachment.filename}
            </span>
            <Badge variant="secondary" className="text-xs shrink-0">
              {Math.round(scale * 100)}%
            </Badge>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              onClick={zoomOut}
              title="Thu nhỏ"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <div className="w-[100px] px-1">
              <Slider
                value={[scale]}
                min={0.25}
                max={3}
                step={0.05}
                onValueChange={(value) => setScale(value[0])}
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              onClick={zoomIn}
              title="Phóng to"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              onClick={resetView}
              title="Đặt lại"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-5 mx-1" />
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              onClick={() => openInNewTab(attachment.url)}
              title="Mở trong tab mới"
            >
              <ExternalLink className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              onClick={() => handleDownload(attachment.url, attachment.filename)}
              title="Tải xuống"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 cursor-pointer"
              onClick={onClose}
              title="Đóng"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Image canvas */}
        <div
          className="flex-1 overflow-hidden bg-black/95 flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={attachment.url}
            alt={attachment.filename}
            draggable={false}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transition: isDragging ? "none" : "transform 0.15s ease",
              maxWidth: "90vw",
              maxHeight: "calc(90vh - 60px)",
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

// ── File action card (PDF, Docx, Xlsx, Pptx...) ───────────────────────────────

interface FileActionCardProps {
  attachment: Attachment
}

function FileActionCard({ attachment }: FileActionCardProps) {
  const colors = getFileColor(attachment.filetype)
  const mock = isMockUrl(attachment.url)

  const label =
    attachment.filetype.toLowerCase() === "pdf"
      ? "Mở PDF"
      : attachment.filetype.toLowerCase() === "docx" ||
          attachment.filetype.toLowerCase() === "doc"
        ? "Mở tài liệu"
        : attachment.filetype.toLowerCase() === "xlsx" ||
            attachment.filetype.toLowerCase() === "xls"
          ? "Mở bảng tính"
          : attachment.filetype.toLowerCase() === "pptx" ||
              attachment.filetype.toLowerCase() === "ppt"
            ? "Mở bản trình chiếu"
            : "Mở file"

  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
      <div
        className={cn(
          "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center",
          colors.bg
        )}
      >
        <div className={colors.text}>{getFileIcon(attachment.filetype)}</div>
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm">{attachment.filename}</p>
        {attachment.summary && (
          <p className="text-xs text-muted-foreground mt-0.5">
            {attachment.summary}
          </p>
        )}
        <div className="flex gap-2 mt-3">
          {mock ? (
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
          ) : (
            <>
              <Button
                size="sm"
                className="cursor-pointer"
                onClick={() => openInNewTab(attachment.url)}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                {label}
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
            </>
          )}
        </div>
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
}

function AttachmentRow({
  attachment,
  isActive,
  onSelect,
  onDownload,
}: AttachmentRowProps) {
  const colors = getFileColor(attachment.filetype)
  const mock = isMockUrl(attachment.url)
  const isImage = isImageType(attachment.filetype)

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
  const [selectedAttachment, setSelectedAttachment] = useState<Attachment | null>(
    null
  )
  const [imageModalAttachment, setImageModalAttachment] = useState<Attachment | null>(
    null
  )

  if (!document) return null

  const attachments = document.attachments ?? []
  const primaryTypeColor = getFileColor(document.type)

  return (
    <>
      {/* ── Image full-screen preview modal ── */}
      <ImagePreviewModal
        attachment={imageModalAttachment}
        onClose={() => setImageModalAttachment(null)}
      />

      {/* ── Document detail modal ── */}
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
                    <div
                      className={cn(
                        "text-sm font-black uppercase",
                        primaryTypeColor.text
                      )}
                    >
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
                        {document.status === "published"
                          ? "Đã xuất bản"
                          : "Nháp"}
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

            {/* ── Body ── */}
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
                        onDownload={() =>
                          handleDownload(att.url, att.filename)
                        }
                      />
                    ))}
                  </div>
                )}

                {/* Preview / action area */}
                {attachments.length > 0 && (
                  <>
                    <Separator />
                    {selectedAttachment ? (
                      isImageType(selectedAttachment.filetype) ? (
                        /* ── Image: open full-screen modal ── */
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Image className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-semibold">
                              Xem trước hình ảnh
                            </span>
                          </div>
                          {/* Thumbnail preview */}
                          <div
                            className="relative rounded-lg border overflow-hidden bg-muted/20 cursor-pointer group"
                            onClick={() =>
                              setImageModalAttachment(selectedAttachment)
                            }
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={selectedAttachment.url}
                              alt={selectedAttachment.filename}
                              className={cn(
                                "w-full object-contain transition-opacity",
                                isMockUrl(selectedAttachment.url)
                                  ? "opacity-30 h-[160px]"
                                  : "max-h-[200px]"
                              )}
                            />
                            {isMockUrl(selectedAttachment.url) ? (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-xs text-muted-foreground">
                                  Không khả dụng (Mock)
                                </p>
                              </div>
                            ) : (
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="flex items-center gap-2 text-white text-sm font-medium">
                                  <ZoomIn className="h-5 w-5" />
                                  Bấm để xem full-screen
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="cursor-pointer"
                              onClick={() =>
                                setImageModalAttachment(selectedAttachment)
                              }
                              disabled={isMockUrl(selectedAttachment.url)}
                            >
                              <ZoomIn className="h-4 w-4 mr-2" />
                              Xem full-screen
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="cursor-pointer"
                              onClick={() =>
                                handleDownload(
                                  selectedAttachment.url,
                                  selectedAttachment.filename
                                )
                              }
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Tải xuống
                            </Button>
                          </div>
                        </div>
                      ) : (
                        /* ── PDF / Docx / Xlsx / Pptx: card + open in new tab ── */
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-semibold">
                              Xem trước tài liệu
                            </span>
                          </div>
                          <FileActionCard attachment={selectedAttachment} />
                        </div>
                      )
                    ) : (
                      <div className="flex flex-col items-center gap-2 py-6 text-muted-foreground border border-dashed rounded-lg">
                        <FileText className="h-6 w-6 opacity-30" />
                        <p className="text-sm">
                          Bấm vào một tệp để xem hoặc tải xuống
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
    </>
  )
}
