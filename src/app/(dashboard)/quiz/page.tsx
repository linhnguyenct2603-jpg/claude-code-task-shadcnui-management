"use client"

import { useState } from "react"
import { BookOpen, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QuizClient } from "@/modules/quiz/components/quiz-client"

function isValidFullName(value: string) {
  const trimmed = value.trim()
  return trimmed.length >= 4 && trimmed.includes(" ")
}

export default function QuizPage() {
  const [fullName, setFullName] = useState("")
  const [started, setStarted] = useState(false)
  const [touched, setTouched] = useState(false)

  const isValid = isValidFullName(fullName)
  const showError = touched && !isValid

  return (
    <>
      <div className="px-4 lg:px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight">Bài kiểm tra tiếng Anh</h1>
          <p className="text-muted-foreground">
            Trả lời câu hỏi trắc nghiệm về từ vựng — kết quả được ghi nhận realtime
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-6 space-y-6">
        {!started ? (
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-3 text-primary" />
              <CardTitle>Xin chào!</CardTitle>
              <CardDescription>
                Nhập họ và tên đầy đủ để bắt đầu bài kiểm tra
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Họ và tên
                </Label>
                <Input
                  id="fullName"
                  placeholder="VD: Nguyễn Văn A"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onBlur={() => setTouched(true)}
                  onKeyDown={(e) => e.key === "Enter" && isValid && setStarted(true)}
                  className="text-center font-medium"
                />
                {showError && (
                  <p className="text-xs text-destructive">
                    Vui lòng nhập họ và tên đầy đủ (ít nhất họ và tên, có khoảng trắng)
                  </p>
                )}
              </div>
              <Button
                className="w-full cursor-pointer"
                disabled={!isValid}
                onClick={() => {
                  setTouched(true)
                  if (isValid) setStarted(true)
                }}
              >
                Bắt đầu làm bài
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                10 câu hỏi về chủ đề Animals (Động vật)
              </p>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="flex items-center gap-3 max-w-2xl mx-auto">
              <div className="bg-primary/10 rounded-full px-3 py-1.5 text-sm font-medium text-primary">
                {fullName.trim()}
              </div>
              <span className="text-muted-foreground text-sm">đang làm bài...</span>
            </div>
            <QuizClient username={fullName.trim()} />
          </>
        )}
      </div>
    </>
  )
}
