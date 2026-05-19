import { seedMockDataCollections } from "@/lib/firebase/mock-data-seeder"
import { friendMockData, messageMockData } from "./chat-mock-data"
import type { ChatMessage } from "./types/chat-types"

const CURRENT_USER = "user-1"

const messageDocuments = Object.entries(messageMockData).flatMap(
  ([friendId, messages]) =>
    messages.map((message: ChatMessage) => {
      const conversationId = [CURRENT_USER, friendId].sort().join("--")
      return { ...message, friendId, conversationId }
    })
)

export function seedChatMockData() {
  return seedMockDataCollections("chat", [
    { collectionName: "friends", documents: friendMockData },
    {
      collectionName: "messages",
      documents: messageDocuments,
      getDocumentId: (document) => document.id as string,
    },
  ])
}
