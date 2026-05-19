"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { TooltipProvider } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { FriendList } from "./friend-list"
import { ChatHeader } from "./chat-header"
import { MessageList } from "./message-list"
import { MessageInput } from "./message-input"
import { useChat } from "@/modules/chat/services/chat-services"
import {
  subscribeToFriends,
  subscribeToMessages,
  sendMessage,
  markConversationRead,
} from "@/modules/chat/services/chat-firebase"
import type { Friend, ChatMessage } from "@/modules/chat/services/types/chat-types"

interface ChatProps {
  initialFriends?: Friend[]
}

export function Chat({ initialFriends = [] }: ChatProps) {
  const {
    friends,
    messages,
    selectedFriendId,
    currentUserId,
    setFriends,
    setMessages,
    setSelectedFriendId,
  } = useChat()

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [unsubMessages, setUnsubMessages] = useState<(() => void) | null>(null)

  useEffect(() => {
    const unsub = subscribeToFriends(
      currentUserId,
      (data) => setFriends(data),
      () => {}
    )
    return () => unsub()
  }, [currentUserId, setFriends])

  useEffect(() => {
    if (!selectedFriendId) return

    if (unsubMessages) {
      unsubMessages()
    }

    const unsub = subscribeToMessages(
      currentUserId,
      selectedFriendId,
      (data) => setMessages(data),
      () => {}
    )
    setUnsubMessages(() => unsub)

    markConversationRead(currentUserId, selectedFriendId)

    return () => unsub()
  }, [selectedFriendId, currentUserId, setMessages])

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 1024) {
        setIsSidebarOpen(false)
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  const currentFriend = friends.find((f) => f.id === selectedFriendId) ?? null

  const handleSendMessage = async (text: string) => {
    if (!selectedFriendId) return
    try {
      await sendMessage(currentUserId, selectedFriendId, text)
    } catch {
      const optimisticMsg: ChatMessage = {
        id: `msg-${Date.now()}`,
        text,
        from: currentUserId,
        to: selectedFriendId,
        updated: new Date().toISOString(),
      }
      useChat.getState().addMessage(optimisticMsg)
    }
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div className="h-full min-h-[600px] max-h-[calc(100vh-200px)] flex rounded-lg border overflow-hidden bg-background">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div
          className={`
            w-100 border-r bg-background flex-shrink-0
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            lg:relative lg:block
            fixed inset-y-0 left-0 z-50
            transition-transform duration-300 ease-in-out
          `}
        >
          <div className="lg:hidden p-4 border-b flex items-center justify-between bg-background">
            <h2 className="text-lg font-semibold">Messages</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(false)}
              className="cursor-pointer"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <FriendList
            friends={friends}
            selectedFriendId={selectedFriendId}
            onSelectFriend={(id) => {
              setSelectedFriendId(id)
              setIsSidebarOpen(false)
            }}
          />
        </div>

        <div className="flex-1 flex flex-col min-w-0 bg-background">
          <div className="flex items-center h-16 px-4 border-b bg-background">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(true)}
              className="cursor-pointer lg:hidden mr-2"
            >
              <Menu className="h-4 w-4" />
            </Button>
            <div className="flex-1">
              <ChatHeader friend={currentFriend} />
            </div>
          </div>

          <div className="flex-1 flex flex-col min-h-0">
            {selectedFriendId ? (
              <>
                <MessageList
                  messages={messages}
                  currentUserId={currentUserId}
                  friendName={currentFriend?.name}
                  friendAvatar={currentFriend?.avatar}
                  friendStatus={currentFriend?.status}
                />
                <MessageInput
                  onSendMessage={handleSendMessage}
                  placeholder={`Message ${currentFriend?.name ?? ""}...`}
                />
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Welcome to Chat</h3>
                  <p className="text-muted-foreground">
                    Select a friend to start messaging
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
