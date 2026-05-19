"use client"

import { create } from "zustand"
import type { Friend, ChatMessage } from "./types/chat-types"

interface ChatState {
  friends: Friend[]
  messages: ChatMessage[]
  selectedFriendId: string | null
  currentUserId: string
  searchQuery: string
}

interface ChatActions {
  setFriends: (friends: Friend[]) => void
  setMessages: (messages: ChatMessage[]) => void
  setSelectedFriendId: (friendId: string | null) => void
  setSearchQuery: (query: string) => void
  addMessage: (message: ChatMessage) => void
  syncFriendLastMessage: (friendId: string, message: ChatMessage) => void
}

export const useChat = create<ChatState & ChatActions>((set, get) => ({
  friends: [],
  messages: [],
  selectedFriendId: null,
  currentUserId: "user-1",
  searchQuery: "",

  setFriends: (friends) => set({ friends }),

  setMessages: (messages) => set({ messages }),

  setSelectedFriendId: (friendId) => set({ selectedFriendId: friendId }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  addMessage: (message) =>
    set((state) => {
      // Prevent duplicate messages from re-subscription
      const exists = state.messages.some((m) => m.id === message.id)
      if (exists) return state
      return {
        messages: [...state.messages, message],
        friends: state.friends.map((f) =>
          f.id === message.to
            ? {
                ...f,
                lastMessage: { text: message.text, updated: message.updated },
              }
            : f
        ),
      }
    }),

  syncFriendLastMessage: (friendId, message) =>
    set((state) => ({
      friends: state.friends.map((f) =>
        f.id === friendId
          ? {
              ...f,
              lastMessage: { text: message.text, updated: message.updated },
            }
          : f
      ),
    })),
}))

export type { Friend, ChatMessage }
