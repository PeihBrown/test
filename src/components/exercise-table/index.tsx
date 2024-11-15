import { classNames } from '../../utils'

type ExerciseEntry = {
  title: string
  duration: string
  calories: number
}

type ExerciseTableProps = {
  entries: ExerciseEntry[]
  className?: string
  maxHeight?: string
}

export function ExerciseTable({ 
  entries, 
  className, 
  maxHeight = '264px'
}: ExerciseTableProps) {
  return (
    <div className={classNames(
      'w-full overflow-hidden bg-background-dark rounded-md',
      className
    )}>
      <div 
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 overflow-y-auto pr-6"
        style={{ maxHeight }}
      >
        {/* Left Column */}
        <div>
          {entries.slice(0, Math.ceil(entries.length / 2)).map((entry, index) => (
            <div 
              key={index}
              className="border-b border-[#777777] p-2"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm">●</span>
                  <p className="text-white text-base">{entry.title}</p>
                </div>
                <span className="text-[#FFCC21]">{entry.duration}</span>
              </div>
              <div className="flex items-center gap-4 pl-6 text-[#FFCC21]">
                <span>{entry.calories}kcal</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          {entries.slice(Math.ceil(entries.length / 2)).map((entry, index) => (
            <div 
              key={index}
              className="border-b border-[#777777] p-2"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm">●</span>
                  <p className="text-white text-base">{entry.title}</p>
                </div>
                <span className="text-[#FFCC21]">{entry.duration}</span>
              </div>
              <div className="flex items-center gap-4 pl-6 text-[#FFCC21]">
                <span>{entry.calories}kcal</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 