import friendsData from "./data/friends.json"
import messagesData from "./data/messages.json"
import type { Friend, ChatMessage } from "./types/chat-types"

export const friendMockData = friendsData as Friend[]
export const messageMockData = messagesData as Record<string, ChatMessage[]>
