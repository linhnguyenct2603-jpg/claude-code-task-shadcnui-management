"use client"

import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  Timestamp,
  writeBatch,
} from "firebase/firestore"
import { db } from "@/lib/firebase/client"
import type { Friend, ChatMessage } from "./types/chat-types"
import { friendMockData } from "./chat-mock-data"
import { messageMockData } from "./chat-mock-data"

export function subscribeToFriends(
  currentUserId: string,
  onNext: (friends: Friend[]) => void,
  onError: (err: Error) => void
): () => void {
  const q = query(
    collection(db, "friends"),
    where("participants", "array-contains", currentUserId),
    orderBy("lastMessageAt", "desc")
  )

  return onSnapshot(
    q,
    (snapshot) => {
      const friends: Friend[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data()
        const updated = data.lastMessageAt instanceof Timestamp
          ? data.lastMessageAt.toDate().toISOString()
          : (data.lastMessage?.updated ?? new Date().toISOString())
        return {
          id: docSnap.id,
          name: data.name ?? "",
          avatar: data.avatar ?? "",
          status: data.status ?? "offline",
          lastMessage: {
            text: data.lastMessage?.text ?? "",
            updated,
          },
          unreadCount: data.unreadCount ?? 0,
        }
      })

      if (friends.length === 0) {
        onNext(friendMockData)
      } else {
        onNext(friends)
      }
    },
    (err) => {
      console.warn("Firestore friends listener error, falling back to mock:", err)
      onNext(friendMockData)
    }
  )
}

export function subscribeToMessages(
  currentUserId: string,
  friendId: string,
  onNext: (messages: ChatMessage[]) => void,
  onError: (err: Error) => void
): () => void {
  const conversationId = [currentUserId, friendId].sort().join("--")

  const q = query(
    collection(db, "messages"),
    where("conversationId", "==", conversationId),
    orderBy("updated", "asc")
  )

  return onSnapshot(
    q,
    (snapshot) => {
      const messages: ChatMessage[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data()
        const ts = data.updated instanceof Timestamp
          ? data.updated.toDate().toISOString()
          : (data.updated ?? new Date().toISOString())
        return {
          id: docSnap.id,
          text: data.text ?? "",
          from: data.from ?? "",
          to: data.to ?? "",
          updated: ts,
        }
      })

      if (messages.length === 0) {
        const fallback = messageMockData[friendId] ?? []
        onNext(fallback)
      } else {
        onNext(messages)
      }
    },
    (err) => {
      console.warn("Firestore messages listener error, falling back to mock:", err)
      const fallback = messageMockData[friendId] ?? []
      onNext(fallback)
    }
  )
}

export async function sendMessage(
  currentUserId: string,
  friendId: string,
  text: string
): Promise<void> {
  const batch = writeBatch(db)
  const conversationId = [currentUserId, friendId].sort().join("--")
  const now = Timestamp.now()

  const messageRef = doc(collection(db, "messages"))
  const friendRef = doc(db, "friends", friendId)

  batch.set(messageRef, {
    text,
    from: currentUserId,
    to: friendId,
    conversationId,
    updated: now,
  })

  batch.update(friendRef, {
    lastMessage: { text, updated: now.toDate().toISOString() },
    lastMessageAt: now,
  })

  await batch.commit()
}

export async function markConversationRead(
  currentUserId: string,
  friendId: string
): Promise<void> {
  const friendRef = doc(db, "friends", friendId)
  await updateDoc(friendRef, { unreadCount: 0 })
}
