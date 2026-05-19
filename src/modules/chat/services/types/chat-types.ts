export interface Friend {
  id: string
  name: string
  avatar: string
  status: "online" | "offline"
  lastMessage: {
    text: string
    updated: string
  }
  unreadCount: number
}

export interface ChatMessage {
  id: string
  text: string
  from: string
  to: string
  updated: string
}
