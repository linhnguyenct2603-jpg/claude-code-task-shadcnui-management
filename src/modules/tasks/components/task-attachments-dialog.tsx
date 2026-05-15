"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import {
  AlertCircle,
  CheckCircle2,
  Download,
  File,
  FileText,
  Image,
  Loader2,
  Paperclip,
  Trash2,
  Upload,
  X,
} from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import type { Attachment } from "@/modules/tasks/services/types/task-types"
import {
  deleteAttachment,
  formatFileSize,
  getAttachments,
  isImageType,
  saveAttachment,
  uploadFile,
  validateFile,
} from "@/modules/tasks/services/attachment-services"

interface UploadItem {
  id: string
  file: File
  progress: number
  error: string | null
  done: boolean
}

interface TaskAttachmentsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  taskId: string
  taskTitle: string
}

export function TaskAttachmentsDialog({
  open,
  onOpenChange,
  taskId,
  taskTitle,
}: TaskAttachmentsDialogProps) {
  const [attachments, setAttachments] = useState<Attachment[]>([])
  const [loading, setLoading] = useState(false)
  const [uploads, setUploads] = useState<UploadItem[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [listError, setListError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!open) return
    setListError(null)
    setLoading(true)
    setUploads([])

    getAttachments(taskId)
      .then((data) => {
        setAttachments(data)
        setListError(null)
      })
      .catch((err) => {
        const msg = err?.message || "Failed to load attachments"
        setListError(msg)
        setAttachments([])
      })
      .finally(() => setLoading(false))
  }, [open, taskId])

  const handleFileSelect = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return
      const fileArray = Array.from(files)

      const newItems: UploadItem[] = fileArray.map((file) => {
        const error = validateFile(file)
        return { id: `${Date.now()}-${file.name}`, file, progress: 0, error: error ?? null, done: !!error }
      })

      setUploads((prev) => [...prev, ...newItems])

      for (const item of newItems) {
        if (item.error) continue

        try {
          const fileUrl = await uploadFile(item.file, taskId, (progress) => {
            setUploads((prev) =>
              prev.map((u) =>
                u.id === item.id ? { ...u, progress } : u
              )
            )
          })

          const attachment: Omit<Attachment, "id"> = {
            fileName: item.file.name,
            fileUrl,
            fileSize: item.file.size,
            fileType: item.file.type,
            uploadedAt: new Date().toISOString(),
            uploadedBy: "current-user",
          }

          const savedId = await saveAttachment(taskId, attachment)
          const saved: Attachment = { ...attachment, id: savedId }

          setAttachments((prev) => [saved, ...prev])
          setUploads((prev) =>
            prev.map((u) =>
              u.id === item.id ? { ...u, progress: 100, done: true } : u
            )
          )
        } catch (err: any) {
          const msg = err?.message || "Upload failed. Please try again."
          setUploads((prev) =>
            prev.map((u) =>
              u.id === item.id ? { ...u, error: msg, done: true } : u
            )
          )
        }
      }
    },
    [taskId]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)
      handleFileSelect(e.dataTransfer.files)
    },
    [handleFileSelect]
  )

  const handleDelete = useCallback(
    async (attachment: Attachment) => {
      try {
        await deleteAttachment(taskId, attachment.id, attachment.fileUrl)
        setAttachments((prev) => prev.filter((a) => a.id !== attachment.id))
      } catch (err: any) {
        const msg = err?.message || "Failed to delete attachment"
        setListError(msg)
      }
    },
    [taskId]
  )

  const clearDoneUploads = () => {
    setUploads((prev) => prev.filter((u) => !u.done))
  }

  const getFileIcon = (fileType: string) => {
    if (isImageType(fileType)) return <Image className="h-4 w-4 text-blue-500" />
    if (fileType === "application/pdf") return <FileText className="h-4 w-4 text-red-500" />
    if (fileType.includes("word") || fileType.includes("document"))
      return <FileText className="h-4 w-4 text-blue-600" />
    if (fileType.includes("excel") || fileType.includes("spreadsheet"))
      return <FileText className="h-4 w-4 text-green-600" />
    if (fileType.includes("powerpoint") || fileType.includes("presentation"))
      return <FileText className="h-4 w-4 text-orange-600" />
    return <File className="h-4 w-4 text-muted-foreground" />
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[85vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Paperclip className="h-4 w-4" />
            Attachments
          </DialogTitle>
          <DialogDescription className="text-xs">
            <span className="font-mono font-medium">{taskId}</span> — {taskTitle}
          </DialogDescription>
        </DialogHeader>

        {/* Drop Zone */}
        <div
          className={cn(
            "relative border-2 border-dashed rounded-lg p-5 transition-all cursor-pointer select-none flex-shrink-0",
            isDragOver
              ? "border-primary bg-primary/5 text-primary"
              : "border-muted-foreground/25 hover:border-muted-foreground/50 hover:bg-muted/30"
          )}
          onDragOver={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsDragOver(true)
          }}
          onDragLeave={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsDragOver(false)
          }}
          onDrop={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleDrop(e)
          }}
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif,.webp"
            className="hidden"
            onChange={(e) => handleFileSelect(e.target.files)}
            onClick={(e) => {
              ;(e.target as HTMLInputElement).value = ""
            }}
          />
          <div className="flex flex-col items-center text-center gap-2">
            {isDragOver ? (
              <Upload className="h-7 w-7 text-primary" />
            ) : (
              <Upload className="h-7 w-7 text-muted-foreground" />
            )}
            <div>
              <p className="text-sm font-medium">
                {isDragOver ? "Drop files here" : "Drag & drop files or click to browse"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Max 50MB per file. PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT, JPG, PNG, GIF, WEBP
              </p>
            </div>
          </div>
        </div>

        {/* Upload Progress */}
        {uploads.length > 0 && (
          <div className="space-y-2 flex-shrink-0 overflow-y-auto max-h-48">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Uploading ({uploads.filter((u) => !u.done).length} remaining)
              </span>
              <button
                onClick={clearDoneUploads}
                className="text-xs text-muted-foreground hover:text-foreground cursor-pointer"
              >
                Clear done
              </button>
            </div>
            {uploads.map((item) => (
              <div key={item.id} className="flex items-center gap-2.5">
                {getFileIcon(item.file.type)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs truncate">{item.file.name}</span>
                    <span className="text-xs text-muted-foreground shrink-0">
                      {item.error ? (
                        <span className="text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          Failed
                        </span>
                      ) : item.done ? (
                        <span className="text-green-500 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" />
                          Done
                        </span>
                      ) : (
                        <span className="text-muted-foreground">{item.progress}%</span>
                      )}
                    </span>
                  </div>
                  {!item.error && !item.done && (
                    <Progress value={item.progress} className="h-1 mt-1" />
                  )}
                  {item.error && (
                    <p className="text-xs text-red-500 mt-0.5">{item.error}</p>
                  )}
                </div>
                {item.error && (
                  <button
                    onClick={() =>
                      setUploads((prev) => prev.filter((u) => u.id !== item.id))
                    }
                    className="cursor-pointer shrink-0"
                  >
                    <X className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground" />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Divider */}
        {(uploads.length > 0 || attachments.length > 0 || loading || listError) && (
          <div className="border-t flex-shrink-0" />
        )}

        {/* Error Banner */}
        {listError && (
          <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900 p-3 flex-shrink-0">
            <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
            <p className="text-xs text-red-600 dark:text-red-400">{listError}</p>
          </div>
        )}

        {/* Attachments List */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {loading ? (
            <div className="flex items-center justify-center gap-2 py-8 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Loading attachments...</span>
            </div>
          ) : attachments.length === 0 && !listError ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <Paperclip className="h-8 w-8 text-muted-foreground/40 mb-2" />
              <p className="text-sm text-muted-foreground">No attachments yet</p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Upload files using the area above
              </p>
            </div>
          ) : (
            <div className="space-y-1.5">
              <div className="text-xs font-medium text-muted-foreground px-1 pb-1">
                {attachments.length} file{attachments.length !== 1 ? "s" : ""}
              </div>
              {attachments.map((att) => (
                <div
                  key={att.id}
                  className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-muted/40 transition-colors group"
                >
                  {getFileIcon(att.fileType)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{att.fileName}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{formatFileSize(att.fileSize)}</span>
                      <span>·</span>
                      <span>
                        {new Date(att.uploadedAt).toLocaleDateString("vi-VN", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={att.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={att.fileName}
                      className="p-1.5 rounded-md hover:bg-muted cursor-pointer"
                      title="Download"
                    >
                      <Download className="h-4 w-4" />
                    </a>
                    <button
                      onClick={() => handleDelete(att)}
                      className="p-1.5 rounded-md hover:bg-muted text-destructive cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
