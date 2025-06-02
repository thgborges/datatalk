import { getAnalyticsData } from "@/lib/analytics"
import { DashboardContent } from "@/components/dashboard-content"

export default async function DashboardPage() {
  const analyticsData = await getAnalyticsData()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard Analytics
          </h1>
          <p className="text-muted-foreground text-lg">Insights e métricas do uso da plataforma DataTalk</p>
        </div>

        <DashboardContent data={analyticsData} />
      </div>
    </div>
  )
}
