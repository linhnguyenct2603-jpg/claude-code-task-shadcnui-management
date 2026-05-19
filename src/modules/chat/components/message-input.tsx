"use client"

import { useState, useRef } from "react"
import { Send, Paperclip, Smile, Image as ImageIcon, FileText, Mic } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface MessageInputProps {
  onSendMessage: (text: string) => void
  disabled?: boolean
  placeholder?: string
}

export function MessageInput({ onSendMessage, disabled = false, placeholder = "Type a message..." }: MessageInputProps) {
  const [message, setMessage] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSend = () => {
    const trimmed = message.trim()
    if (trimmed && !disabled) {
      onSendMessage(trimmed)
      setMessage("")
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`
    }
  }

  return (
    <div className="border-t p-4">
      <div className="flex items-end gap-2">
        <TooltipProvider>
          <DropdownMenu>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    disabled={disabled}
                    className="cursor-pointer"
                  >
                    <Paperclip className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent><p>Attach file</p></TooltipContent>
            </Tooltip>
            <DropdownMenuContent side="top" align="start">
              <DropdownMenuItem className="cursor-pointer">
                <ImageIcon className="h-4 w-4 mr-2" />
                Photo or video
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <FileText className="h-4 w-4 mr-2" />
                Document
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipProvider>

        <div className="flex-1 relative">
          <Textarea
            ref={textareaRef}
            placeholder={placeholder}
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            className={cn(
              "min-h-[40px] max-h-[120px] resize-none cursor-text",
              "pr-16"
            )}
            rows={1}
          />

          <div className="absolute right-2 bottom-2 flex items-center gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 cursor-pointer">
                    <Smile className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent><p>Add emoji</p></TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              {message.trim() ? (
                <Button onClick={handleSend} disabled={disabled} className="cursor-pointer">
                  <Send className="h-4 w-4" />
                </Button>
              ) : (
                <Button variant="ghost" size="icon" disabled={disabled} className="cursor-pointer">
                  <Mic className="h-4 w-4" />
                </Button>
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>{message.trim() ? "Send message" : "Voice message"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
