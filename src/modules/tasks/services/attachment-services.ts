import {
  deleteObject,
  getDownloadURL,
  ref as storageRef,
  uploadBytesResumable,
} from "firebase/storage"

import { storage, db } from "@/lib/firebase/client"
import type { Attachment } from "./types/task-types"

const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB

const BLOCKED_EXTENSIONS = new Set(["exe", "sh", "bat", "cmd"])

const ALLOWED_MIME_TYPES: Record<string, string> = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
  "application/vnd.ms-excel": "xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
  "application/vnd.ms-powerpoint": "ppt",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
  "text/plain": "txt",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
  "image/webp": "webp",
}

const ALLOWED_EXTENSIONS = new Set([
  "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx",
  "txt", "jpg", "jpeg", "png", "gif", "webp",
])

export function validateFile(file: File): string | null {
  const ext = file.name.split(".").pop()?.toLowerCase() ?? ""

  if (BLOCKED_EXTENSIONS.has(ext)) {
    return `File extension .${ext} is not allowed for security reasons.`
  }

  if (file.size > MAX_FILE_SIZE) {
    const sizeMB = (file.size / 1024 / 1024).toFixed(1)
    return `File size (${sizeMB}MB) exceeds the 50MB limit.`
  }

  const mimeExt = ALLOWED_MIME_TYPES[file.type]
  if (!mimeExt && !ALLOWED_EXTENSIONS.has(ext)) {
    return `File type "${file.type || ext || "unknown"}" is not supported.`
  }

  return null
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

export function getFileExtension(fileName: string): string {
  return fileName.split(".").pop()?.toLowerCase() ?? ""
}

export function isImageType(mimeType: string): boolean {
  return mimeType.startsWith("image/")
}

function sanitizeFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_")
}

export async function uploadFile(
  file: File,
  taskId: string,
  onProgress?: (progress: number) => void
): Promise<string> {
  const safeName = sanitizeFileName(file.name)
  const path = `tasks/${taskId}/attachments/${safeName}`
  const storageReference = storageRef(storage, path)

  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageReference, file)

    task.on(
      "state_changed",
      (snapshot) => {
        const progress =
          snapshot.totalBytes === 0
            ? 0
            : Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        onProgress?.(progress)
      },
      (error) => {
        console.error(`[Storage] Upload failed for ${path}:`, error)
        reject(error)
      },
      async () => {
        try {
          const url = await getDownloadURL(task.snapshot.ref)
          resolve(url)
        } catch (err) {
          console.error(`[Storage] Failed to get download URL for ${path}:`, err)
          reject(err)
        }
      }
    )
  })
}

export async function deleteFileFromStorage(fileUrl: string): Promise<void> {
  try {
    const fileRef = storageRef(storage, fileUrl)
    await deleteObject(fileRef)
  } catch (err: any) {
    // Ignore "not found" errors
    if (err?.code === "storage/object-not-found") return
    console.warn(`[Storage] Failed to delete file ${fileUrl}:`, err)
    throw err
  }
}

export async function getAttachments(
  taskId: string,
  fallback: Attachment[] = []
): Promise<Attachment[]> {
  try {
    const { collection, getDocs } = await import("firebase/firestore")
    const attachmentsRef = collection(db, "tasks", taskId, "attachments")
    const snapshot = await getDocs(attachmentsRef)

    if (snapshot.empty) return fallback

    return snapshot.docs.map((docSnap) => {
      const data = docSnap.data() as Omit<Attachment, "id">
      return { ...data, id: docSnap.id }
    })
  } catch (err: any) {
    console.warn(`[Attachments] Failed to load for task ${taskId}:`, err?.message || err)
    return fallback
  }
}

export async function saveAttachment(
  taskId: string,
  attachment: Omit<Attachment, "id">
): Promise<string> {
  try {
    const { collection, addDoc, doc, setDoc } = await import("firebase/firestore")

    // Ensure the task document exists (needed for subcollection)
    const taskRef = doc(db, "tasks", taskId)
    await setDoc(taskRef, { _placeholder: true }, { merge: true })

    const attachmentsRef = collection(db, "tasks", taskId, "attachments")
    const docRef = await addDoc(attachmentsRef, attachment)
    return docRef.id
  } catch (err: any) {
    console.error(`[Attachments] Failed to save attachment for task ${taskId}:`, err?.message || err)
    throw new Error(`Failed to save attachment: ${err?.message || "Unknown error"}`)
  }
}

export async function deleteAttachment(
  taskId: string,
  attachmentId: string,
  fileUrl: string
): Promise<void> {
  try {
    const { doc, deleteDoc } = await import("firebase/firestore")

    // Try to delete from storage first
    await deleteFileFromStorage(fileUrl)
  } catch {
    // Continue even if storage delete fails
  }

  try {
    const { doc, deleteDoc } = await import("firebase/firestore")
    const attachmentRef = doc(db, "tasks", taskId, "attachments", attachmentId)
    await deleteDoc(attachmentRef)
  } catch (err: any) {
    console.error(`[Attachments] Failed to delete attachment ${attachmentId}:`, err?.message || err)
    throw new Error(`Failed to delete attachment: ${err?.message || "Unknown error"}`)
  }
}

export async function deleteAllAttachments(taskId: string): Promise<void> {
  const attachments = await getAttachments(taskId)
  await Promise.allSettled(
    attachments.map((a) =>
      deleteAttachment(taskId, a.id, a.fileUrl).catch(() => {})
    )
  )
}
