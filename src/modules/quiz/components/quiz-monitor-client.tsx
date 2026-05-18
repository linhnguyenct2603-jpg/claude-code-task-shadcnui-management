"use client"

import { useEffect, useMemo, useState } from "react"
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  CheckCircle2,
  Eye,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import {
  subscribeToQuizResults,
  subscribeToQuestions,
  getStudentSummaries,
  getQuestionSummaries,
} from "../services/quiz-services"
import type { QuizResult, Question } from "../services/types/quiz-types"

interface QuestionGridItem {
  questionId: string
  content: string
  index: number
  answeredBy: { username: string; isCorrect: boolean; selectedOption: string }[]
}

function StudentAccuracyChart({
  summaries,
}: {
  summaries: ReturnType<typeof getStudentSummaries>
}) {
  const data = summaries.map((s) => ({
    name: s.username.length > 12 ? s.username.slice(0, 12) + "…" : s.username,
    fullName: s.username,
    score: s.score,
    correct: s.correct,
    total: s.total,
  }))

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
        Chưa có dữ liệu học sinh
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ left: 0, right: 20 }}>
        <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
        <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
        <Tooltip
          formatter={(value, _name, props) => {
            const d = props.payload as { correct?: number; total?: number }
            return [`${value ?? 0}% (${d.correct ?? 0}/${d.total ?? 0})`, "Điểm chính xác"]
          }}
          labelFormatter={(label, payload) => {
            if (!payload?.length) return String(label)
            return String(payload[0].payload.fullName)
          }}
        />
        <Bar dataKey="score" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.score >= 80
                  ? "#22c55e"
                  : entry.score >= 50
                  ? "#eab308"
                  : "#ef4444"
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

function QuestionAccuracyChart({
  summaries,
}: {
  summaries: ReturnType<typeof getQuestionSummaries>
}) {
  const data = summaries.map((s) => ({
    name:
      s.questionContent.length > 30
        ? s.questionContent.slice(0, 30) + "…"
        : s.questionContent,
    fullContent: s.questionContent,
    accuracy: s.accuracy,
    attempts: s.totalAttempts,
  }))

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
        Chưa có dữ liệu câu hỏi
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ left: 0, right: 20 }}>
        <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
        <YAxis dataKey="name" type="category" width={200} tick={{ fontSize: 11 }} />
        <Tooltip
          formatter={(value, _, props) => {
            const d = props.payload as { accuracy?: number; attempts?: number }
            return [`${value ?? 0}% (${d.accuracy ?? 0}/${d.attempts ?? 0})`, "Độ chính xác"]
          }}
          labelFormatter={(label, payload) => {
            if (!payload?.length) return String(label)
            return String(payload[0].payload.fullContent)
          }}
        />
        <Bar dataKey="accuracy" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.accuracy >= 80
                  ? "#22c55e"
                  : entry.accuracy >= 50
                  ? "#eab308"
                  : "#ef4444"
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

function OverviewCards({
  results,
  studentSummaries,
}: {
  results: QuizResult[]
  studentSummaries: ReturnType<typeof getStudentSummaries>
}) {
  const totalAnswers = results.length
  const totalCorrect = results.filter((r) => r.isCorrect).length
  const accuracy =
    totalAnswers > 0 ? Math.round((totalCorrect / totalAnswers) * 100) : 0
  const totalStudents = studentSummaries.length
  const avgScore =
    totalStudents > 0
      ? Math.round(
          studentSummaries.reduce((s, u) => s + u.score, 0) / totalStudents
        )
      : 0

  const cards = [
    {
      title: "Tổng lượt trả lời",
      value: totalAnswers.toString(),
      subtitle: "Câu trả lời đã ghi nhận",
      icon: Eye,
      color: "text-blue-500",
    },
    {
      title: "Độ chính xác trung bình",
      value: `${accuracy}%`,
      subtitle: `${totalCorrect} đúng / ${totalAnswers} tổng`,
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      title: "Số học sinh",
      value: totalStudents.toString(),
      subtitle: "Học sinh đã tham gia",
      icon: Users,
      color: "text-violet-500",
    },
    {
      title: "Điểm TB học sinh",
      value: `${avgScore}%`,
      subtitle: "Điểm trung bình",
      icon: TrendingUp,
      color: "text-amber-500",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className={`h-4 w-4 ${card.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{card.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function QuizMonitorClient() {
  const [results, setResults] = useState<QuizResult[]>([])
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubQ = subscribeToQuestions(
      (data) => setQuestions(data),
      () => {}
    )
    const unsubR = subscribeToQuizResults(
      (data) => {
        setResults(data)
        setLoading(false)
      },
      () => setLoading(false)
    )
    return () => {
      unsubQ()
      unsubR()
    }
  }, [])

  const studentSummaries = useMemo(() => getStudentSummaries(results), [results])
  const questionSummaries = useMemo(() => getQuestionSummaries(results), [results])

  const activeStudents = useMemo(() => {
    const set = new Set(results.map((r) => r.username))
    return Array.from(set).sort()
  }, [results])

  const questionGrid = useMemo<QuestionGridItem[]>(() => {
    return questions.map((q, i) => ({
      questionId: q.id ?? `Q${i + 1}`,
      content: q.content,
      index: i,
      answeredBy: results
        .filter((r) => r.questionId === q.id)
        .map((r) => ({
          username: r.username,
          isCorrect: r.isCorrect,
          selectedOption: r.selectedOption,
        })),
    }))
  }, [questions, results])

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-32" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-3 w-24" />
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader><Skeleton className="h-5 w-48" /></CardHeader>
          <CardContent><Skeleton className="h-[300px] w-full" /></CardContent>
        </Card>
        <Card>
          <CardHeader><Skeleton className="h-5 w-48" /></CardHeader>
          <CardContent><Skeleton className="h-[300px] w-full" /></CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <OverviewCards results={results} studentSummaries={studentSummaries} />

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Điểm chính xác theo học sinh</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <StudentAccuracyChart summaries={studentSummaries} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Độ chính xác theo câu hỏi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <QuestionAccuracyChart summaries={questionSummaries} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Question Status Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Tình trạng câu hỏi theo học sinh</CardTitle>
          <p className="text-xs text-muted-foreground font-normal">
            Mỗi hàng là một câu hỏi, mỗi cột là một học sinh —{" "}
            <span className="text-green-600 font-medium">xanh</span> = đúng,{" "}
            <span className="text-red-500 font-medium">đỏ</span> = sai,{" "}
            <span className="text-muted-foreground">xám</span> = chưa trả lời
          </p>
        </CardHeader>
        <CardContent>
          {questionGrid.length > 0 && activeStudents.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40px]">#</TableHead>
                    <TableHead className="min-w-[200px]">Câu hỏi</TableHead>
                    {activeStudents.map((student) => (
                      <TableHead key={student} className="text-center min-w-[80px]">
                        <div className="leading-tight truncate max-w-[80px]" title={student}>
                          {student.length > 8 ? student.slice(0, 8) + "…" : student}
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {questionGrid.map((qg) => {
                    const answeredMap = new Map(qg.answeredBy.map((ab) => [ab.username, ab]))
                    return (
                      <TableRow key={qg.questionId}>
                        <TableCell className="font-medium text-muted-foreground text-xs">
                          {qg.index + 1}
                        </TableCell>
                        <TableCell className="text-sm max-w-[240px] truncate" title={qg.content}>
                          {qg.content}
                        </TableCell>
                        {activeStudents.map((student) => {
                          const answer = answeredMap.get(student)
                          if (!answer) {
                            return (
                              <TableCell key={student} className="text-center">
                                <div className="inline-flex items-center justify-center h-6 w-6 rounded bg-muted mx-auto">
                                  <span className="text-muted-foreground text-xs">–</span>
                                </div>
                              </TableCell>
                            )
                          }
                          return (
                            <TableCell key={student} className="text-center">
                              <div
                                className={`inline-flex items-center justify-center h-6 w-6 rounded text-xs font-bold mx-auto ${
                                  answer.isCorrect
                                    ? "bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400"
                                    : "bg-red-100 text-red-500 dark:bg-red-950/30 dark:text-red-400"
                                }`}
                                title={`${answer.isCorrect ? "Đúng" : "Sai"}: ${answer.selectedOption}`}
                              >
                                {answer.isCorrect ? (
                                  <CheckCircle2 className="h-4 w-4" />
                                ) : (
                                  <XCircle className="h-4 w-4" />
                                )}
                              </div>
                            </TableCell>
                          )
                        })}
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="flex items-center justify-center py-10 text-muted-foreground text-sm">
              Chưa có dữ liệu trả lời
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            Chi tiết câu trả lời ({results.length} lượt)
          </CardTitle>
        </CardHeader>
        <CardContent>
          {results.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              Chưa có kết quả nào. Chờ học sinh làm bài...
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Học sinh</TableHead>
                    <TableHead>Câu hỏi</TableHead>
                    <TableHead>Đáp án đã chọn</TableHead>
                    <TableHead>Đáp án đúng</TableHead>
                    <TableHead>Kết quả</TableHead>
                    <TableHead>Thời gian</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.slice(0, 50).map((r) => (
                    <TableRow key={r.id} className="text-sm">
                      <TableCell className="font-medium">{r.username}</TableCell>
                      <TableCell className="max-w-[200px] truncate text-muted-foreground">
                        {r.questionContent}
                      </TableCell>
                      <TableCell>
                        <span
                          className={
                            r.selectedOption === r.correctOption
                              ? "text-green-600"
                              : "text-red-500"
                          }
                        >
                          {r.selectedOption}
                        </span>
                      </TableCell>
                      <TableCell className="text-green-600">{r.correctOption}</TableCell>
                      <TableCell>
                        {r.isCorrect ? (
                          <Badge variant="outline" className="text-green-600 border-green-200">
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                            Đúng
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="text-red-500 border-red-200">
                            <XCircle className="mr-1 h-3 w-3" />
                            Sai
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-xs">
                        {new Date(r.answeredAt).toLocaleString("vi-VN", {
                          day: "2-digit",
                          month: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {results.length > 50 && (
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Hiển thị 50 / {results.length} lượt trả lời
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
