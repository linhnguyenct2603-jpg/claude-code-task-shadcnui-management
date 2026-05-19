"use client"

import { format, isToday, isYesterday, isThisYear } from "date-fns"
import { Search, MoreVertical, UserPlus, Filter, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useChat } from "@/modules/chat/services/chat-services"
import type { Friend } from "@/modules/chat/services/types/chat-types"

interface FriendListProps {
  friends: Friend[]
  selectedFriendId: string | null
  onSelectFriend: (friendId: string) => void
}

function formatMessageTime(timestamp: string): string {
  const date = new Date(timestamp)
  if (isToday(date)) return format(date, "h:mm a")
  if (isYesterday(date)) return "Yesterday"
  if (isThisYear(date)) return format(date, "MMM d")
  return format(date, "dd/MM/yy")
}

export function FriendList({ friends, selectedFriendId, onSelectFriend }: FriendListProps) {
  const { searchQuery, setSearchQuery } = useChat()

  const filteredFriends = friends.filter((f) =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedFriends = [...filteredFriends].sort((a, b) => {
    if (a.unreadCount > 0 && b.unreadCount === 0) return -1
    if (a.unreadCount === 0 && b.unreadCount > 0) return 1
    return new Date(b.lastMessage.updated).getTime() - new Date(a.lastMessage.updated).getTime()
  })

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="hidden lg:flex items-center justify-between h-16 px-4 border-b flex-shrink-0">
        <h2 className="text-lg font-semibold">Messages</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 cursor-pointer">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer">
              <UserPlus className="h-4 w-4 mr-2" />
              New Chat
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="px-4 py-3 border-b flex-shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search friends..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 cursor-text"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {sortedFriends.map((friend) => (
            <div
              key={friend.id}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-accent/50 transition-colors",
                selectedFriendId === friend.id && "bg-accent text-accent-foreground"
              )}
              onClick={() => onSelectFriend(friend.id)}
            >
              <div className="relative flex-shrink-0">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>
                    {friend.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                {friend.status === "online" && (
                  <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full" />
                )}
              </div>

              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="flex items-center justify-between mb-1 min-w-0">
                  <h3 className="font-medium truncate max-w-[160px] lg:max-w-[180px]">{friend.name}</h3>
                  <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                    {formatMessageTime(friend.lastMessage.updated)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 min-w-0">
                  <p className="text-sm text-muted-foreground truncate flex-1 min-w-0 max-w-[180px] lg:max-w-[200px]">
                    {friend.lastMessage.text}
                  </p>
                  {friend.unreadCount > 0 && (
                    <Badge
                      variant="default"
                      className="min-w-[20px] h-5 text-xs cursor-pointer flex-shrink-0"
                    >
                      {friend.unreadCount > 99 ? "99+" : friend.unreadCount}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}

          {sortedFriends.length === 0 && (
            <div className="text-center py-8 text-muted-foreground text-sm">
              No friends found
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
