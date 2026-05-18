"use client"

import { useCallback, useEffect, useState } from "react"
import {
  BookOpen,
  CheckCircle2,
  Circle,
  ClipboardCheck,
  Loader2,
  Send,
  XCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Skeleton } from "@/components/ui/skeleton"
import { subscribeToQuestions, submitQuizResult } from "../services/quiz-services"
import type { Question } from "../services/types/quiz-types"

interface QuizSummary {
  total: number
  correct: number
  wrong: number
  score: number
}

function ResultCard({ result, onRestart }: { result: QuizSummary; onRestart: () => void }) {
  const percentage = result.score
  const color =
    percentage >= 80
      ? "text-green-500"
      : percentage >= 50
      ? "text-yellow-500"
      : "text-red-500"

  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader className="text-center">
        <ClipboardCheck className="h-12 w-12 mx-auto mb-4 text-primary" />
        <CardTitle className="text-2xl">Kết quả bài kiểm tra</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-2">
          <div className={`text-6xl font-bold ${color}`}>{result.score}%</div>
          <p className="text-muted-foreground">
            Bạn trả lời đúng <strong>{result.correct}</strong> / {result.total} câu
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-lg bg-green-50 dark:bg-green-950/20 p-3">
            <CheckCircle2 className="h-5 w-5 mx-auto mb-1 text-green-500" />
            <div className="text-2xl font-bold text-green-600">{result.correct}</div>
            <div className="text-xs text-muted-foreground">Đúng</div>
          </div>
          <div className="rounded-lg bg-red-50 dark:bg-red-950/20 p-3">
            <XCircle className="h-5 w-5 mx-auto mb-1 text-red-500" />
            <div className="text-2xl font-bold text-red-600">{result.wrong}</div>
            <div className="text-xs text-muted-foreground">Sai</div>
          </div>
          <div className="rounded-lg bg-muted p-3">
            <BookOpen className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
            <div className="text-2xl font-bold">{result.total}</div>
            <div className="text-xs text-muted-foreground">Tổng câu</div>
          </div>
        </div>

        <Button className="w-full cursor-pointer" onClick={onRestart}>
          Làm lại bài mới
        </Button>
      </CardContent>
    </Card>
  )
}

export function QuizClient({ username }: { username: string }) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [summary, setSummary] = useState<QuizSummary | null>(null)
  const [localScore, setLocalScore] = useState({ correct: 0, total: 0 })

  useEffect(() => {
    const unsub = subscribeToQuestions(
      (data) => {
        setQuestions(data)
        setLoading(false)
      },
      () => setLoading(false)
    )
    return unsub
  }, [])

  const current = questions[currentIndex]

  const handleSubmit = useCallback(async () => {
    if (!selectedOption || !current || submitting) return
    setSubmitting(true)

    const isCorrect = selectedOption === current.correctOption
    const result = {
      username,
      questionId: current.id ?? `Q${currentIndex + 1}`,
      questionContent: current.content,
      selectedOption,
      correctOption: current.correctOption,
      isCorrect,
      answeredAt: new Date().toISOString(),
      topic: current.topic,
    }

    try {
      await submitQuizResult(result)
      setLocalScore((s) => ({
        correct: s.correct + (isCorrect ? 1 : 0),
        total: s.total + 1,
      }))
    } catch {
      // still advance even if Firestore fails
    }

    setSubmitted(true)
    setSubmitting(false)

    setTimeout(() => {
      setSubmitted(false)
      setSelectedOption("")
      if (currentIndex + 1 >= questions.length) {
        setSummary({
          total: questions.length,
          correct: localScore.correct + (isCorrect ? 1 : 0),
          wrong: questions.length - (localScore.correct + (isCorrect ? 1 : 0)),
          score: Math.round(
            ((localScore.correct + (isCorrect ? 1 : 0)) / questions.length) * 100
          ),
        })
      } else {
        setCurrentIndex((i) => i + 1)
      }
    }, 1200)
  }, [selectedOption, current, submitting, currentIndex, questions, username, localScore])

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelectedOption("")
    setSubmitted(false)
    setSummary(null)
    setLocalScore({ correct: 0, total: 0 })
  }

  if (loading) {
    return (
      <div className="space-y-4 max-w-2xl mx-auto">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96" />
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-full" />
          </CardHeader>
          <CardContent className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (summary) {
    return (
      <div className="px-4 lg:px-6 py-8">
        <ResultCard result={summary} onRestart={handleRestart} />
      </div>
    )
  }

  if (!current) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        Không có câu hỏi nào.
      </div>
    )
  }

  const progress = ((currentIndex) / questions.length) * 100

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Progress */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Câu {currentIndex + 1} / {questions.length}</span>
          <span>{Math.round(progress)}% hoàn thành</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-start gap-3">
            <BookOpen className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <CardTitle className="text-lg leading-relaxed">
              {current.content}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <RadioGroup
            value={selectedOption}
            onValueChange={setSelectedOption}
            className="space-y-2"
          >
            {[
              { value: current.option1, label: current.option1 },
              { value: current.option2, label: current.option2 },
              { value: current.option3, label: current.option3 },
              { value: current.option4, label: current.option4 },
            ].map((opt, i) => (
              <div
                key={i}
                className={`flex items-center space-x-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                  selectedOption === opt.value
                    ? "border-primary bg-primary/5"
                    : "hover:bg-muted/50"
                }`}
              >
                <RadioGroupItem value={opt.value} id={`opt-${i}`} />
                <Label
                  htmlFor={`opt-${i}`}
                  className="flex-1 cursor-pointer font-normal"
                >
                  {opt.label}
                </Label>
                {submitted && opt.value === current.correctOption && (
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                )}
                {submitted &&
                  selectedOption === opt.value &&
                  opt.value !== current.correctOption && (
                    <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                  )}
              </div>
            ))}
          </RadioGroup>

          {/* Feedback */}
          {submitted && (
            <div
              className={`rounded-lg p-3 text-sm font-medium ${
                selectedOption === current.correctOption
                  ? "bg-green-50 text-green-700 dark:bg-green-950/20 dark:text-green-400"
                  : "bg-red-50 text-red-700 dark:bg-red-950/20 dark:text-red-400"
              }`}
            >
              {selectedOption === current.correctOption
                ? "Chính xác! Đáp án đúng."
                : `Sai rồi. Đáp án đúng là: ${current.correctOption}`}
            </div>
          )}

          <div className="flex justify-end pt-2">
            <Button
              onClick={handleSubmit}
              disabled={!selectedOption || submitting || submitted}
              className="cursor-pointer"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Đang lưu...
                </>
              ) : submitted ? (
                <>
                  <Circle className="mr-2 h-4 w-4" />
                  Đã lưu — chuyển câu tiếp theo
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Trả lời
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
