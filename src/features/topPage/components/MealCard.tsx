import { FC } from 'react'
import { Text } from '../../../components/text'
import { classNames } from '../../../utils'

type MealCardProps = {
  imageUrl: string
  date: string
  timeOfDay: 'Morning' | 'Lunch' | 'Dinner' | 'Snack'
  className?: string
}

const MealCard: FC<MealCardProps> = ({ imageUrl, date, timeOfDay, className }) => {
  return (
    <div 
      className={classNames(
        'relative aspect-square w-full overflow-hidden',
        'group cursor-pointer transition-transform duration-200 hover:scale-[1.02]',
        className
      )}
    >
      <img
        src={imageUrl}
        alt={`${date} ${timeOfDay} meal`}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute left-0 bottom-0 bg-primary-300 px-4 py-2">
        <Text 
          as="span" 
          size="body1" 
          variant="neutral-white"
          className="font-medium"
        >
          {date}.{timeOfDay}
        </Text>
      </div>
    </div>
  )
}

export default MealCard