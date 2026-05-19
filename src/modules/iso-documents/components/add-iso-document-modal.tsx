"use client"

import { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Upload, X, FileText, Plus, Loader2, Trash2 } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  createIsoDocumentSchema,
  type IsoDocument,
  type Attachment,
} from "../services/types/iso-document-types"
import {
  createIsoDocumentWithId,
  formatFileSize,
  getFileExtension,
  uploadAttachments,
  STATUS_OPTIONS,
  FILE_TYPE_OPTIONS,
} from "../services/iso-document-services"

interface AddIsoDocumentModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreated: (doc: IsoDocument) => void
}

export function AddIsoDocumentModal({
  open,
  onOpenChange,
  onCreated,
}: AddIsoDocumentModalProps) {
  const [submitting, setSubmitting] = useState(false)
  const [uploadingFiles, setUploadingFiles] = useState<File[]>([])
  const [attachmentSummaries, setAttachmentSummaries] = useState<Record<string, string>>({})
  const [isDragging, setIsDragging] = useState(false)
  const [primaryFile, setPrimaryFile] = useState<File | null>(null)

  const form = useForm({
    resolver: zodResolver(createIsoDocumentSchema),
    defaultValues: {
      name: "",
      status: "draft",
    },
  })

  // ── Drag & drop handlers ──────────────────────────────────────────────────

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const files = Array.from(e.dataTransfer.files)
      addFiles(files)
    },
    [primaryFile]
  )

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    addFiles(files)
    e.target.value = ""
  }

  const addFiles = (files: File[]) => {
    if (!primaryFile && files.length > 0) {
      const file = files[0]
      setPrimaryFile(file)
      files = files.slice(1)
    }
    setUploadingFiles((prev) => [...prev, ...files])
  }

  const removePrimaryFile = () => {
    setPrimaryFile(null)
  }

  const removeAttachment = (index: number) => {
    setUploadingFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const updateAttachmentSummary = (index: number, summary: string) => {
    setAttachmentSummaries((prev) => ({ ...prev, [index]: summary }))
  }

  const handleSubmit = async (
    values: { name: string; status: "draft" | "published" }
  ) => {
    setSubmitting(true)
    try {
      const docId = `iso-${Date.now()}`
      const docType = primaryFile ? getFileExtension(primaryFile.name) : ""
      const docSize = primaryFile ? formatFileSize(primaryFile.size) : ""
      const allFiles = primaryFile
        ? [primaryFile, ...uploadingFiles]
        : uploadingFiles

      // 1. Upload all files to Firebase Storage (using docId for path)
      let attachments: Attachment[] = []
      if (allFiles.length > 0) {
        attachments = await uploadAttachments(docId, allFiles)
        attachments = attachments.map((att, idx) => ({
          ...att,
          summary: attachmentSummaries[idx] ?? "",
        }))
      }

      // 2. Create Firestore document with the same docId
      await createIsoDocumentWithId(docId, {
        name: values.name,
        type: docType,
        status: values.status as "draft" | "published",
        size: docSize,
        attachments,
      })

      const newDoc: IsoDocument = {
        id: docId,
        name: values.name,
        type: docType,
        status: values.status as "draft" | "published",
        size: docSize,
        updatedAt: new Date().toISOString(),
        attachments,
      }

      onCreated(newDoc)
      toast.success("Tạo biểu mẫu thành công")
      handleClose()
    } catch (err) {
      console.error("Failed to create ISO document:", err)
      toast.error("Tạo biểu mẫu thất bại. Vui lòng thử lại.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleClose = () => {
    setPrimaryFile(null)
    setUploadingFiles([])
    setAttachmentSummaries({})
    setIsDragging(false)
    form.reset()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Thêm biểu mẫu ISO mới</DialogTitle>
          <DialogDescription>
            Tải lên biểu mẫu và các tệp đính kèm liên quan.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
            {/* ── Primary file upload ── */}
            <div>
              <FormLabel>Tệp chính</FormLabel>
              {primaryFile ? (
                <div className="flex items-center gap-3 mt-1.5 p-3 border rounded-lg bg-muted/30">
                  <FileText className="h-8 w-8 text-muted-foreground flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{primaryFile.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(primaryFile.size)} • {getFileExtension(primaryFile.name).toUpperCase()}
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer flex-shrink-0"
                    onClick={removePrimaryFile}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <label
                  className={cn(
                    "flex flex-col items-center justify-center gap-3 mt-1.5 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
                    "min-h-[120px] hover:border-primary/50",
                    isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25"
                  )}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <div className="text-center">
                    <p className="text-sm font-medium">
                      Kéo thả tệp hoặc{" "}
                      <span className="text-primary">bấm để chọn</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, DOCX, XLSX (tối đa 50MB)
                    </p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.docx,.doc,.xlsx,.xls,.pptx,.ppt"
                    onChange={handleFileInputChange}
                  />
                </label>
              )}
            </div>

            {/* ── Document name ── */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên biểu mẫu *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="VD: Quy trình An toàn Lao động"
                      {...field}
                      className="cursor-text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ── Status ── */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trạng thái</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="cursor-pointer">
                        <SelectValue placeholder="Chọn trạng thái" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {STATUS_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ── Attachments ── */}
            {uploadingFiles.length > 0 && (
              <div className="space-y-2">
                <FormLabel>Tệp đính kèm ({uploadingFiles.length})</FormLabel>
                {uploadingFiles.map((file, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2 border rounded-lg">
                    <FileText className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <p className="text-xs text-muted-foreground mb-1.5">
                        {formatFileSize(file.size)}
                      </p>
                      <Input
                        placeholder="Mô tả / tóm tắt tệp đính kèm..."
                        value={attachmentSummaries[idx] ?? ""}
                        onChange={(e) => updateAttachmentSummary(idx, e.target.value)}
                        className="text-sm cursor-text"
                      />
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer flex-shrink-0 mt-0.5"
                      onClick={() => removeAttachment(idx)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))}

                {/* Drop zone for additional attachments */}
                <label
                  className="flex items-center justify-center gap-2 py-2 border border-dashed rounded-md cursor-pointer text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => {
                    e.preventDefault()
                    setIsDragging(false)
                    const files = Array.from(e.dataTransfer.files)
                    addFiles(files)
                  }}
                >
                  <Plus className="h-4 w-4" />
                  Thêm tệp đính kèm
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    accept=".pdf,.docx,.doc,.xlsx,.xls,.pptx,.ppt,.png,.jpg,.jpeg"
                    onChange={handleFileInputChange}
                  />
                </label>
              </div>
            )}

            {/* Show "add attachment" button when no attachments yet */}
            {uploadingFiles.length === 0 && (
              <Button
                type="button"
                variant="outline"
                className="w-full cursor-pointer"
                onClick={() => {
                  const input = document.createElement("input")
                  input.type = "file"
                  input.multiple = true
                  input.accept = ".pdf,.docx,.doc,.xlsx,.xls,.pptx,.ppt,.png,.jpg,.jpeg"
                  input.onchange = (e) => {
                    const files = Array.from(
                      (e.target as HTMLInputElement).files ?? []
                    )
                    addFiles(files)
                  }
                  input.click()
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Thêm tệp đính kèm
              </Button>
            )}

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="cursor-pointer"
              >
                Hủy
              </Button>
              <Button
                type="submit"
                disabled={submitting}
                className="cursor-pointer"
              >
                {submitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                {submitting ? "Đang tạo..." : "Tạo biểu mẫu"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
