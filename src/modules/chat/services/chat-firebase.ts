"use client"

import { useEffect, useRef } from "react"
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
  Timestamp,
  writeBatch,
} from "firebase/firestore"
import { db } from "@/lib/firebase/client"
import { useChat } from "./chat-services"
import type { Friend, ChatMessage } from "./types/chat-types"
import { friendMockData } from "./chat-mock-data"
import { messageMockData } from "./chat-mock-data"

const CURRENT_USER = "user-1"

function getConversationId(a: string, b: string) {
  return [a, b].sort().join("--")
}

// ── Friends ──────────────────────────────────────────────────────────────────

export function subscribeToFriends(
  onFriends: (friends: Friend[]) => void
): () => void {
  const q = query(
    collection(db, "friends"),
    where("participants", "array-contains", CURRENT_USER),
    orderBy("lastMessageAt", "desc")
  )

  return onSnapshot(
    q,
    (snapshot) => {
      const friends: Friend[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data()
        const updated =
          data.lastMessageAt instanceof Timestamp
            ? data.lastMessageAt.toDate().toISOString()
            : data.lastMessage?.updated ?? new Date().toISOString()
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
        onFriends(friendMockData)
      } else {
        onFriends(friends)
      }
    },
    (err) => {
      console.warn("Firestore friends error:", err)
      onFriends(friendMockData)
    }
  )
}

// ── Hook for message subscription ───────────────────────────────────────────

export function useMessagesSubscription(friendId: string | null) {
  const { setMessages, messages } = useChat()
  const unsubRef = useRef<(() => void) | null>(null)
  const loadedRef = useRef(false)

  useEffect(() => {
    if (!friendId) return

    // Reset state for new conversation
    setMessages([])
    loadedRef.current = false

    const conversationId = getConversationId(CURRENT_USER, friendId)

    const q = query(
      collection(db, "messages"),
      where("conversationId", "==", conversationId),
      orderBy("updated", "asc")
    )

    unsubRef.current = onSnapshot(
      q,
      (snapshot) => {
        const msgs: ChatMessage[] = snapshot.docs.map((docSnap) => {
          const data = docSnap.data()
          const ts =
            data.updated instanceof Timestamp
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

        if (msgs.length === 0 && !loadedRef.current) {
          // First load: Firestore is empty → use mock data once
          loadedRef.current = true
          setMessages(messageMockData[friendId] ?? [])
        } else {
          loadedRef.current = true
          setMessages(msgs)
          // Sync lastMessage into friends list
          if (msgs.length > 0) {
            const latest = msgs[msgs.length - 1]
            useChat.getState().syncFriendLastMessage(friendId, latest)
          }
        }
      },
      (err) => {
        console.warn("Firestore messages error:", err)
        if (!loadedRef.current) {
          loadedRef.current = true
          setMessages(messageMockData[friendId] ?? [])
        }
      }
    )

    return () => {
      unsubRef.current?.()
      unsubRef.current = null
    }
  }, [friendId, setMessages])
}

// ── Actions ─────────────────────────────────────────────────────────────────

export async function sendMessage(friendId: string, text: string): Promise<void> {
  const batch = writeBatch(db)
  const conversationId = getConversationId(CURRENT_USER, friendId)
  const now = Timestamp.now()

  const messageRef = doc(collection(db, "messages"))
  const friendRef = doc(db, "friends", friendId)

  batch.set(messageRef, {
    text,
    from: CURRENT_USER,
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

export async function markConversationRead(friendId: string): Promise<void> {
  try {
    await updateDoc(doc(db, "friends", friendId), { unreadCount: 0 })
  } catch {
    // Silently ignore — not critical
  }
}
