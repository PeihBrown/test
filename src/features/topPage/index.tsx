import AchievementMetricsDisplay from '@/features/topPage/components/AchievementMetricsDisplay'
import MealHistory from '@/features/topPage/components/MealHistory'

const AchievementPage = () => {

  return (
    <div className="min-h-screen">
      <AchievementMetricsDisplay />
      <MealHistory />
    </div>
  )
}

export default AchievementPage