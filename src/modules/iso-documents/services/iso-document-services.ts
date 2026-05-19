import {
  collection,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore"
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage"
import { db, storage } from "@/lib/firebase/client"
import { isoDocumentMockData } from "./iso-document-mock-data"
import type { IsoDocument, Attachment } from "./types/iso-document-types"

// ── Real-time subscription ───────────────────────────────────────────────────

export function subscribeToIsoDocuments(
  onNext: (docs: IsoDocument[]) => void,
  onError: (err: Error) => void
): () => void {
  const q = query(collection(db, "iso_documents"), orderBy("updatedAt", "desc"))

  return onSnapshot(
    q,
    (snapshot) => {
      const docs: IsoDocument[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data()
        const updatedAt =
          data.updatedAt instanceof Timestamp
            ? data.updatedAt.toDate().toISOString()
            : (data.updatedAt as string) ?? new Date().toISOString()
        return {
          id: docSnap.id,
          name: data.name ?? "",
          type: data.type ?? "",
          status: data.status ?? "draft",
          size: data.size ?? "",
          updatedAt,
          attachments: data.attachments ?? [],
        }
      })

      if (docs.length === 0) {
        onNext(isoDocumentMockData)
      } else {
        onNext(docs)
      }
    },
    (err) => {
      console.warn("Firestore iso_documents error:", err)
      onNext(isoDocumentMockData)
    }
  )
}

// ── CRUD ─────────────────────────────────────────────────────────────────────

export async function createIsoDocument(
  data: Omit<IsoDocument, "id" | "updatedAt">
): Promise<string> {
  const docRef = await addDoc(collection(db, "iso_documents"), {
    ...data,
    updatedAt: serverTimestamp(),
  })
  return docRef.id
}

/**
 * Creates a Firestore document with a specific ID.
 * Used when we need the ID upfront for Storage file paths.
 */
export async function createIsoDocumentWithId(
  docId: string,
  data: Omit<IsoDocument, "id" | "updatedAt">
): Promise<void> {
  const docRef = doc(db, "iso_documents", docId)
  await setDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

export async function updateIsoDocument(
  docId: string,
  data: Partial<Omit<IsoDocument, "id">>
): Promise<void> {
  const docRef = doc(db, "iso_documents", docId)
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(),
  })
}

export async function deleteIsoDocument(docId: string): Promise<void> {
  const docRef = doc(db, "iso_documents", docId)
  await deleteDoc(docRef)
}

// ── Firebase Storage helpers ──────────────────────────────────────────────────

/**
 * Uploads a file to Firebase Storage under `iso_forms/{docId}/{filename}`.
 * Returns the public download URL.
 */
export async function uploadFileToStorage(
  docId: string,
  file: File
): Promise<string> {
  const storagePath = `iso_forms/${docId}/${file.name}`
  const storageRef = ref(storage, storagePath)
  await uploadBytes(storageRef, file)
  return getDownloadURL(storageRef)
}

/**
 * Deletes a file from Firebase Storage.
 */
export async function deleteFileFromStorage(url: string): Promise<void> {
  try {
    const storageRef = ref(storage, url)
    await deleteObject(storageRef)
  } catch {
    // File may not exist, ignore
  }
}

/**
 * Uploads multiple attachments to Firebase Storage and returns
 * the list of Attachment objects with their download URLs.
 */
export async function uploadAttachments(
  docId: string,
  files: File[]
): Promise<Attachment[]> {
  return Promise.all(
    files.map(async (file) => {
      const url = await uploadFileToStorage(docId, file)
      return {
        filename: file.name,
        filetype: file.name.split(".").pop() ?? "",
        url,
        summary: "",
      }
    })
  )
}

// ── Helpers ──────────────────────────────────────────────────────────────────

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

export function getFileExtension(filename: string): string {
  return filename.split(".").pop()?.toLowerCase() ?? ""
}

export const FILE_TYPE_OPTIONS = [
  { label: "PDF", value: "pdf" },
  { label: "Word", value: "docx" },
  { label: "Excel", value: "xlsx" },
  { label: "All", value: "all" },
]

export const STATUS_OPTIONS = [
  { label: "Nháp", value: "draft" },
  { label: "Đã xuất bản", value: "published" },
]
