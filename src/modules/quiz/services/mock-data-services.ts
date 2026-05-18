import "server-only"

import { seedMockDataCollections } from "@/lib/firebase/mock-data-seeder"
import { questionSchema } from "./types/quiz-types"
import questionsData from "./data/questions.json"
import type { Question } from "./types/quiz-types"

const questionMockData = questionSchema.array().parse(questionsData) as Question[]

export function seedQuizMockData() {
  return seedMockDataCollections("quiz", [
    {
      collectionName: "questions",
      documents: questionMockData,
      getDocumentId: (_, index) => questionMockData[index]?.id ?? `Q${String(index + 1).padStart(3, "0")}`,
    },
  ])
}
