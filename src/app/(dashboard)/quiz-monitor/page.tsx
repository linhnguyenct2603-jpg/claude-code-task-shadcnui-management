import { QuizMonitorClient } from "@/modules/quiz/components/quiz-monitor-client"

export default function QuizMonitorPage() {
  return (
    <>
      <div className="px-4 lg:px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight">Giám sát bài kiểm tra</h1>
          <p className="text-muted-foreground">
            Theo dõi kết quả trả lời của học sinh realtime từ Firebase Firestore
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-6 space-y-6">
        <QuizMonitorClient />
      </div>
    </>
  )
}
