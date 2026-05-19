"use client"

import { useEffect, useState } from "react"
import { FileText, Plus } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { IsoDocumentTable } from "@/modules/iso-documents/components/iso-document-table"
import { AddIsoDocumentModal } from "@/modules/iso-documents/components/add-iso-document-modal"
import {
  subscribeToIsoDocuments,
  updateIsoDocument,
  deleteIsoDocument,
} from "@/modules/iso-documents/services/iso-document-services"
import type { IsoDocument } from "@/modules/iso-documents/services/types/iso-document-types"

export default function IsoDocumentsPage() {
  const [documents, setDocuments] = useState<IsoDocument[]>([])
  const [loading, setLoading] = useState(true)
  const [addModalOpen, setAddModalOpen] = useState(false)

  // Real-time subscription
  useEffect(() => {
    const unsub = subscribeToIsoDocuments(
      (docs) => {
        setDocuments(docs)
        setLoading(false)
      },
      (err) => {
        console.error("Failed to load ISO documents:", err)
        setLoading(false)
      }
    )
    return () => unsub()
  }, [])

  const handleCreated = (newDoc: IsoDocument) => {
    setDocuments((prev) => [newDoc, ...prev])
  }

  const handleUpdate = async (docId: string, data: Partial<IsoDocument>) => {
    await updateIsoDocument(docId, data)
    setDocuments((prev) =>
      prev.map((d) =>
        d.id === docId ? { ...d, ...data, updatedAt: new Date().toISOString() } : d
      )
    )
  }

  const handleDelete = async (docId: string) => {
    await deleteIsoDocument(docId)
    setDocuments((prev) => prev.filter((d) => d.id !== docId))
  }

  // Stats
  const total = documents.length
  const published = documents.filter((d) => d.status === "published").length
  const draft = documents.filter((d) => d.status === "draft").length
  const totalAttachments = documents.reduce(
    (sum, d) => sum + (d.attachments?.length ?? 0),
    0
  )

  return (
    <div className="px-4 md:px-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Quản lý Biểu mẫu ISO
          </h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            Quản lý các biểu mẫu và tài liệu ISO của tổ chức
          </p>
        </div>
        <Button
          onClick={() => setAddModalOpen(true)}
          className="cursor-pointer"
        >
          <Plus className="h-4 w-4 mr-2" />
          Thêm biểu mẫu mới
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Tổng biểu mẫu"
          value={total}
          icon={<FileText className="h-5 w-5" />}
          loading={loading}
        />
        <StatCard
          title="Đã xuất bản"
          value={published}
          icon={<FileText className="h-5 w-5 text-green-600" />}
          loading={loading}
          accentColor="text-green-600"
        />
        <StatCard
          title="Nháp"
          value={draft}
          icon={<FileText className="h-5 w-5 text-yellow-600" />}
          loading={loading}
          accentColor="text-yellow-600"
        />
        <StatCard
          title="Tệp đính kèm"
          value={totalAttachments}
          icon={<FileText className="h-5 w-5 text-blue-600" />}
          loading={loading}
          accentColor="text-blue-600"
        />
      </div>

      {/* Table */}
      <IsoDocumentTable
        documents={documents}
        loading={loading}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />

      {/* Add modal */}
      <AddIsoDocumentModal
        open={addModalOpen}
        onOpenChange={setAddModalOpen}
        onCreated={handleCreated}
      />
    </div>
  )
}

function StatCard({
  title,
  value,
  icon,
  loading,
  accentColor = "text-muted-foreground",
}: {
  title: string
  value: number
  icon: React.ReactNode
  loading: boolean
  accentColor?: string
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={accentColor}>{icon}</div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="h-8 w-16" />
        ) : (
          <div className="text-2xl font-bold">{value}</div>
        )}
      </CardContent>
    </Card>
  )
}
