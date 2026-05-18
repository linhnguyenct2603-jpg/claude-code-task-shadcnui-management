import { RevenueChart } from "@/modules/dashboard/components/revenue-chart"

export default function ChartPage() {
  return (
    <>
      <div className="px-4 lg:px-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold tracking-tight">Biểu đồ doanh thu</h1>
          <p className="text-muted-foreground">
            Theo dõi doanh thu hàng tháng từ dữ liệu Firebase Firestore (realtime)
          </p>
        </div>
      </div>

      <div className="px-4 lg:px-6 space-y-6">
        <RevenueChart />
      </div>
    </>
  )
}
