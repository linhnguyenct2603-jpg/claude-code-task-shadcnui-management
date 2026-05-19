"use client"

import { useEffect, useRef } from "react"
import { format, isToday, isYesterday } from "date-fns"
import { CheckCheck, MoreHorizontal, Reply, Copy, Trash2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import type { ChatMessage } from "@/modules/chat/services/types/chat-types"

interface MessageListProps {
  messages: ChatMessage[]
  currentUserId: string
  friendName?: string
  friendAvatar?: string
  friendStatus?: "online" | "offline"
}

export function MessageList({
  messages,
  currentUserId,
  friendName,
  friendAvatar,
}: MessageListProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const prevCountRef = useRef(0)
  const initialLoadRef = useRef(true)

  useEffect(() => {
    if (initialLoadRef.current) {
      initialLoadRef.current = false
      prevCountRef.current = messages.length
      return
    }
    if (messages.length > prevCountRef.current && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" })
    }
    prevCountRef.current = messages.length
  }, [messages])

  function formatTime(timestamp: string) {
    const date = new Date(timestamp)
    if (isToday(date)) return format(date, "HH:mm")
    if (isYesterday(date)) return `Yesterday ${format(date, "HH:mm")}`
    return format(date, "MMM d, HH:mm")
  }

  function groupByDay(msgs: ChatMessage[]) {
    const groups: { date: string; messages: ChatMessage[] }[] = []
    msgs.forEach((msg) => {
      const d = format(new Date(msg.updated), "yyyy-MM-dd")
      const last = groups[groups.length - 1]
      if (last && last.date === d) {
        last.messages.push(msg)
      } else {
        groups.push({ date: d, messages: [msg] })
      }
    })
    return groups
  }

  function formatDateHeader(dateStr: string) {
    const date = new Date(dateStr)
    if (isToday(date)) return "Today"
    if (isYesterday(date)) return "Yesterday"
    return format(date, "EEEE, MMMM d")
  }

  function showAvatar(msg: ChatMessage, idx: number) {
    if (msg.from === currentUserId) return false
    if (idx === 0) return true
    return messages[idx - 1].from !== msg.from
  }

  function isConsecutive(msg: ChatMessage, idx: number) {
    if (idx === 0) return false
    const prev = messages[idx - 1]
    if (prev.from !== msg.from) return false
    const diff = new Date(msg.updated).getTime() - new Date(prev.updated).getTime()
    return diff < 5 * 60 * 1000
  }

  const groups = groupByDay(messages)

  return (
    <ScrollArea className="flex-1 px-4" ref={scrollAreaRef}>
      <div className="space-y-4 py-4">
        {groups.map((group) => (
          <div key={group.date}>
            <div className="flex items-center justify-center py-2">
              <div className="text-xs text-muted-foreground bg-background px-3 py-1 rounded-full border">
                {formatDateHeader(group.date)}
              </div>
            </div>

            <div className="space-y-1">
              {group.messages.map((msg, msgIdx) => {
                const isOwn = msg.from === currentUserId
                const showAv = showAvatar(msg, msgIdx)
                const consecutive = isConsecutive(msg, msgIdx)
                const senderName = isOwn ? "You" : friendName ?? "User"

                return (
                  <div
                    key={msg.id}
                    className={cn(
                      "flex gap-3 group",
                      isOwn && "flex-row-reverse",
                      consecutive && !isOwn && "ml-12"
                    )}
                  >
                    {!isOwn && (
                      <div className="w-8">
                        {showAv && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={friendAvatar} alt={senderName} />
                            <AvatarFallback className="text-xs">
                              {(senderName ?? "U").split(" ").map((n) => n[0]).join("").slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    )}

                    <div className={cn("flex-1 max-w-[70%]", isOwn && "flex flex-col items-end")}>
                      {showAv && !isOwn && (
                        <div className="text-sm font-medium text-foreground mb-1">
                          {senderName}
                        </div>
                      )}

                      <div className="relative group/msg">
                        <div
                          className={cn(
                            "rounded-lg px-3 py-2 text-sm break-words",
                            isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
                          )}
                        >
                          <p>{msg.text}</p>
                          <div
                            className={cn(
                              "flex items-center gap-1 mt-1 text-xs",
                              isOwn ? "text-primary-foreground/70 justify-end" : "text-muted-foreground"
                            )}
                          >
                            <span>{formatTime(msg.updated)}</span>
                            {isOwn && <CheckCheck className="h-3 w-3" />}
                          </div>
                        </div>

                        <div className="absolute top-0 right-0 opacity-0 group-hover/msg:opacity-100">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 cursor-pointer">
                                <MoreHorizontal className="h-3 w-3" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem className="cursor-pointer">
                                <Reply className="h-4 w-4 mr-2" />
                                Reply
                              </DropdownMenuItem>
                              <DropdownMenuItem className="cursor-pointer">
                                <Copy className="h-4 w-4 mr-2" />
                                Copy
                              </DropdownMenuItem>
                              {isOwn && (
                                <>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="cursor-pointer text-destructive">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                  </DropdownMenuItem>
                                </>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </ScrollArea>
  )
}
