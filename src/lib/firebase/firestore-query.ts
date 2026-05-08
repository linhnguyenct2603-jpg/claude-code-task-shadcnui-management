import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore"

const FIRESTORE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
const FIRESTORE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID

async function getDb() {
  const { db } = await import("@/lib/firebase/client")
  return db
}

function mapFirestoreValue(value: any): any {
  if (value === null || value === undefined) return null
  if (typeof value === "string") return value
  if (typeof value === "number") return value
  if (typeof value === "boolean") return value
  if (value.integerValue !== undefined) return Number(value.integerValue)
  if (value.doubleValue !== undefined) return Number(value.doubleValue)
  if (value.booleanValue !== undefined) return value.booleanValue
  if (value.stringValue !== undefined) return value.stringValue
  if (value.timestampValue !== undefined) return value.timestampValue
  if (value.mapValue !== undefined) {
    return Object.fromEntries(
      Object.entries(value.mapValue.fields || {}).map(([key, fieldValue]) => [key, mapFirestoreValue(fieldValue)])
    )
  }
  if (value.arrayValue !== undefined) {
    return (value.arrayValue.values || []).map(mapFirestoreValue)
  }
  return null
}

function toFirestoreValue(value: unknown): any {
  if (value === null || value === undefined) {
    return { nullValue: null }
  }

  if (typeof value === "string") {
    return { stringValue: value }
  }

  if (typeof value === "number") {
    return { doubleValue: value }
  }

  if (typeof value === "boolean") {
    return { booleanValue: value }
  }

  if (value instanceof Date) {
    return { timestampValue: value.toISOString() }
  }

  if (Array.isArray(value)) {
    return { arrayValue: { values: value.map((item) => toFirestoreValue(item)) } }
  }

  if (typeof value === "object") {
    return {
      mapValue: {
        fields: Object.fromEntries(
          Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, toFirestoreValue(item)])
        ),
      },
    }
  }

  throw new Error(`Unsupported Firestore field value type: ${typeof value}`)
}

function buildFirestoreFields(data: Record<string, unknown>) {
  return {
    fields: Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, toFirestoreValue(value)])
    ),
  }
}

async function fetchFirestoreCollectionRest<T>(collectionName: string): Promise<T[]> {
  if (!FIRESTORE_API_KEY || !FIRESTORE_PROJECT_ID) {
    throw new Error("Missing Firestore REST API configuration")
  }

  const url = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(
    FIRESTORE_PROJECT_ID
  )}/databases/(default)/documents/${encodeURIComponent(collectionName)}?key=${encodeURIComponent(
    FIRESTORE_API_KEY
  )}`

  const response = await fetch(url)
  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Firestore REST read failed: ${response.status} ${errorText}`)
  }

  const result = await response.json()
  const documents = result.documents || []
  return documents.map((doc: any) => {
    const data = Object.fromEntries(
      Object.entries(doc.fields || {}).map(([key, value]) => [key, mapFirestoreValue(value)])
    )
    const id = data.id ?? doc.name?.split("/").pop()
    return {
      ...data,
      id,
    }
  })
}

async function writeFirestoreDocumentRest<T extends Record<string, unknown>>(
  collectionName: string,
  data: T,
  documentId?: string,
  method: "POST" | "PATCH" = "POST"
): Promise<string> {
  if (!FIRESTORE_API_KEY || !FIRESTORE_PROJECT_ID) {
    throw new Error("Missing Firestore REST API configuration")
  }

  const baseUrl = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(
    FIRESTORE_PROJECT_ID
  )}/databases/(default)/documents/${encodeURIComponent(collectionName)}`

  const url = method === "POST"
    ? `${baseUrl}?${documentId ? `documentId=${encodeURIComponent(documentId)}&` : ""}key=${encodeURIComponent(
        FIRESTORE_API_KEY
      )}`
    : `${baseUrl}/${encodeURIComponent(documentId || "")}?key=${encodeURIComponent(FIRESTORE_API_KEY)}`

  const payload = buildFirestoreFields(data)
  const response = await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
  const responseText = await response.text()

  if (!response.ok) {
    throw new Error(`Firestore REST write failed: ${response.status} ${responseText}`)
  }

  const result = JSON.parse(responseText)
  return documentId ?? result.name?.split("/").pop()
}

async function promiseWithTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  let timeoutId: ReturnType<typeof setTimeout>
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error(`Operation timed out after ${ms}ms`)), ms)
  })
  return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timeoutId))
}

export async function getFirestoreCollection<T>(
  collectionName: string,
  fallbackData: T[]
): Promise<T[]> {
  try {
    const db = await getDb()
    const snapshot = await getDocs(collection(db, collectionName))

    if (snapshot.empty) {
      return fallbackData
    }

    return snapshot.docs.map((docSnap) => {
      const data = docSnap.data() as T
      const dataWithId = data as T & { id?: string | number }

      return {
        ...data,
        id: dataWithId.id ?? docSnap.id,
      }
    })
  } catch (error) {
    console.warn(`Failed to load ${collectionName} from Firestore SDK; trying REST fallback.`, error)
    try {
      return await fetchFirestoreCollectionRest<T>(collectionName)
    } catch (restError) {
      console.warn(`Firestore REST read also failed. Falling back to local mock data.`, restError)
      return fallbackData
    }
  }
}

export async function getFirestoreDocumentCollection<T>(
  collectionName: string,
  fallbackData: T[]
): Promise<T[]> {
  try {
    const db = await getDb()
    const snapshot = await getDocs(collection(db, collectionName))

    if (snapshot.empty) {
      return fallbackData
    }

    return snapshot.docs.map((docSnap) => docSnap.data() as T)
  } catch (error) {
    console.warn(`Failed to load ${collectionName} from Firestore SDK; trying REST fallback.`, error)
    try {
      return await fetchFirestoreCollectionRest<T>(collectionName)
    } catch (restError) {
      console.warn(`Firestore REST read also failed. Falling back to local mock data.`, restError)
      return fallbackData
    }
  }
}

export async function addFirestoreDocument<T extends Record<string, unknown>>(
  collectionName: string,
  data: T,
  documentId?: string
): Promise<string> {
  try {
    const db = await getDb()
    if (documentId) {
      await promiseWithTimeout(setDoc(doc(db, collectionName, documentId), data), 10000)
      return documentId
    }
    const docRef = await promiseWithTimeout(addDoc(collection(db, collectionName), data), 10000)
    return docRef.id
  } catch (sdkError: any) {
    console.warn(`[Firestore] SDK write failed for ${collectionName}. Trying REST fallback.`, sdkError?.message || sdkError)
    try {
      const id = await writeFirestoreDocumentRest(collectionName, data, documentId)
      return id
    } catch (restError: any) {
      console.error(`[Firestore] Both SDK and REST write failed for ${collectionName}:`, sdkError, restError)
      throw new Error(`Failed to save document to ${collectionName}. Error: ${restError?.message || "Unknown error"}`)
    }
  }
}

export async function updateFirestoreDocument(
  collectionName: string,
  documentId: string,
  data: Record<string, unknown>
): Promise<void> {
  try {
    const db = await getDb()
    await promiseWithTimeout(updateDoc(doc(db, collectionName, documentId), data), 10000)
  } catch (sdkError: any) {
    console.warn(`[Firestore] SDK update failed for ${collectionName}/${documentId}. Trying REST fallback.`, sdkError?.message || sdkError)
    try {
      await writeFirestoreDocumentRest(collectionName, data, documentId, "PATCH")
      console.log(`[Firestore] REST update succeeded for ${documentId}`)
    } catch (restError: any) {
      console.error(`[Firestore] REST update also failed for ${collectionName}/${documentId}:`, restError?.message || restError)
      throw new Error(`Failed to update document in ${collectionName}. Error: ${restError?.message || "Unknown error"}`)
    }
  }
}

export async function deleteFirestoreDocument(
  collectionName: string,
  documentId: string
): Promise<void> {
  try {
    const db = await getDb()
    await promiseWithTimeout(deleteDoc(doc(db, collectionName, documentId)), 10000)
  } catch (sdkError: any) {
    console.warn(`[Firestore] SDK delete failed for ${collectionName}/${documentId}. Trying REST fallback.`, sdkError?.message || sdkError)
    if (!FIRESTORE_API_KEY || !FIRESTORE_PROJECT_ID) {
      throw sdkError
    }
    const url = `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(
      FIRESTORE_PROJECT_ID
    )}/databases/(default)/documents/${encodeURIComponent(collectionName)}/${encodeURIComponent(
      documentId
    )}?key=${encodeURIComponent(FIRESTORE_API_KEY)}`
    try {
      const response = await fetch(url, { method: "DELETE" })
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Firestore REST delete failed: ${response.status} ${errorText}`)
      }
    } catch (restError: any) {
      console.error(`[Firestore] REST delete also failed for ${collectionName}/${documentId}:`, restError?.message || restError)
      throw new Error(`Failed to delete document from ${collectionName}. Error: ${restError?.message || "Unknown error"}`)
    }
  }
}
