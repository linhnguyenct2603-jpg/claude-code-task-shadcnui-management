"use client"

import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore"
import { db } from "@/lib/firebase/client"
import { questionSchema } from "./types/quiz-types"
import type { Question, QuizResult } from "./types/quiz-types"
import questionsData from "./data/questions.json"

const questionMockData = questionSchema.array().parse(questionsData) as Question[]

// ─── Questions ───────────────────────────────────────────────────

export function subscribeToQuestions(
  onData: (data: Question[]) => void,
  onError?: (error: Error) => void
): () => void {
  const q = query(collection(db, "questions"), orderBy("id", "asc"))

  return subscribeQuestionsWithQuery(q, onData, onError)
}

export function subscribeToQuestionsByTopic(
  topic: string,
  onData: (data: Question[]) => void,
  onError?: (error: Error) => void
): () => void {
  const q = query(
    collection(db, "questions"),
    where("topic", "==", topic),
    orderBy("id", "asc")
  )

  return subscribeQuestionsWithQuery(q, onData, onError)
}

function subscribeQuestionsWithQuery(
  q: ReturnType<typeof query>,
  onData: (data: Question[]) => void,
  onError?: (error: Error) => void
): () => void {
  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      if (snapshot.empty) {
        onData(questionMockData)
        return
      }

      const data: Question[] = snapshot.docs.map((doc) => {
        const raw = doc.data() as Record<string, unknown>
        return {
          ...raw,
          id: doc.id,
        } as unknown as Question
      })

      onData(data)
    },
    (error) => {
      console.warn("[Quiz] Questions realtime error:", error)
      onError?.(error)
      onData(questionMockData)
    }
  )

  return unsubscribe
}

// ─── Quiz Results ────────────────────────────────────────────────

export function subscribeToQuizResults(
  onData: (data: QuizResult[]) => void,
  onError?: (error: Error) => void
): () => void {
  const q = query(collection(db, "quizResults"), orderBy("answeredAt", "desc"))

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const data: QuizResult[] = snapshot.docs.map((doc) => {
        const raw = doc.data() as Record<string, unknown>
        return {
          ...raw,
          id: doc.id,
        } as unknown as QuizResult
      })
      onData(data)
    },
    (error) => {
      console.warn("[Quiz] Results realtime error:", error)
      onError?.(error)
    }
  )

  return unsubscribe
}

export async function submitQuizResult(
  result: Omit<QuizResult, "id">
): Promise<string> {
  const docRef = await addDoc(collection(db, "quizResults"), result)
  return docRef.id
}

// ─── Helpers ────────────────────────────────────────────────────

export interface StudentSummary {
  username: string
  total: number
  correct: number
  wrong: number
  score: number
  lastAnswer: string
}

export function getStudentSummaries(results: QuizResult[]): StudentSummary[] {
  const map = new Map<string, StudentSummary>()

  for (const r of results) {
    if (!map.has(r.username)) {
      map.set(r.username, {
        username: r.username,
        total: 0,
        correct: 0,
        wrong: 0,
        score: 0,
        lastAnswer: r.answeredAt,
      })
    }
    const s = map.get(r.username)!
    s.total++
    if (r.isCorrect) s.correct++
    else s.wrong++
    s.score = Math.round((s.correct / s.total) * 100)
    if (r.answeredAt > s.lastAnswer) s.lastAnswer = r.answeredAt
  }

  return Array.from(map.values()).sort((a, b) => b.score - a.score)
}

export interface QuestionSummary {
  questionId: string
  questionContent: string
  totalAttempts: number
  correctCount: number
  wrongCount: number
  accuracy: number
}

export function getQuestionSummaries(results: QuizResult[]): QuestionSummary[] {
  const map = new Map<string, QuestionSummary>()

  for (const r of results) {
    if (!map.has(r.questionId)) {
      map.set(r.questionId, {
        questionId: r.questionId,
        questionContent: r.questionContent,
        totalAttempts: 0,
        correctCount: 0,
        wrongCount: 0,
        accuracy: 0,
      })
    }
    const s = map.get(r.questionId)!
    s.totalAttempts++
    if (r.isCorrect) s.correctCount++
    else s.wrongCount++
    s.accuracy = Math.round((s.correctCount / s.totalAttempts) * 100)
  }

  return Array.from(map.values()).sort(
    (a, b) => b.totalAttempts - a.totalAttempts
  )
}
