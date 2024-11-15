import { FC, memo } from 'react'
import { Button } from '@/components/button'
import { HexButton } from '@/components/hex-button'
import { CupIcon, KnifeIcon } from '@/components/icons'
import { useMealHistory, TimeOfDay } from '../hooks/useMealHistory'
import MealCard from './MealCard'

interface MealFilterProps {
  selectedType: TimeOfDay | null
  onTypeSelect: (type: TimeOfDay) => void
}

const MealFilter: FC<MealFilterProps> = memo(({ selectedType, onTypeSelect }) => {
  const filterButtons: Array<{ type: TimeOfDay; icon: JSX.Element; label: string }> = [
    { type: 'Morning', icon: <KnifeIcon className="text-2xl sm:text-3xl" />, label: 'Morning' },
    { type: 'Lunch', icon: <KnifeIcon className="text-2xl sm:text-3xl" />, label: 'Lunch' },
    { type: 'Dinner', icon: <KnifeIcon className="text-2xl sm:text-3xl" />, label: 'Dinner' },
    { type: 'Snack', icon: <CupIcon className="text-2xl sm:text-3xl" />, label: 'Snack' },
  ]

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mt-4 px-2 max-w-[90%] mx-auto">
      {filterButtons.map(({ type, icon, label }) => (
        <HexButton
          key={type}
          icon={icon}
          label={label}
          className={`scale-90 sm:scale-100 ${selectedType === type ? 'active' : ''}`}
          onClick={() => onTypeSelect(type)}
        />
      ))}
    </div>
  )
})

MealFilter.displayName = 'MealFilter'

const MealHistory = () => {
  const {
    meals,
    selectedType,
    hasMoreMeals,
    toggleMealType,
    loadMoreMeals,
  } = useMealHistory()

  return (
    <section className="meal-history">
      <MealFilter
        selectedType={selectedType}
        onTypeSelect={toggleMealType}
      />

      <div className="container mx-auto main-container mt-6 sm:mt-8 px-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
          {meals.map((meal) => (
            <MealCard
              key={`${meal.date}-${meal.timeOfDay}`}
              {...meal}
            />
          ))}
        </div>

        {hasMoreMeals && (
          <div className="flex justify-center mt-6 mb-8 px-4">
            <Button
              variant="default"
              size="lg"
              className="text-white !rounded w-full max-w-[296px]"
              onClick={loadMoreMeals}
            >
              記録をもっと見る
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default memo(MealHistory)