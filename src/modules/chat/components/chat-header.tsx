"use client"

import { Phone, Video, Search, MoreVertical, Bell, BellOff } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import type { Friend } from "@/modules/chat/services/types/chat-types"

interface ChatHeaderProps {
  friend: Friend | null
  onToggleMute?: () => void
}

export function ChatHeader({ friend, onToggleMute }: ChatHeaderProps) {
  if (!friend) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Select a friend to start chatting</p>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between h-full">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={friend.avatar} alt={friend.name} />
          <AvatarFallback>
            {friend.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </AvatarFallback>
        </Avatar>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="font-semibold">{friend.name}</h2>
            {friend.unreadCount > 0 && (
              <span className="text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                {friend.unreadCount} new
              </span>
            )}
          </div>
          <p className={`text-sm ${friend.status === "online" ? "text-green-600" : "text-muted-foreground"}`}>
            {friend.status === "online" ? "Active now" : "Offline"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Search className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent><p>Search messages</p></TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Phone className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent><p>Voice call</p></TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <Video className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent><p>Video call</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="cursor-pointer">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onToggleMute} className="cursor-pointer">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <Search className="h-4 w-4 mr-2" />
              Search
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-destructive">
              Delete conversation
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
