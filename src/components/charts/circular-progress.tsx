import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts'

type CircularProgressProps = {
  value: number
  date: string
  width?: number
  height?: number
  color?: string
}

export function CircularProgress({
  value,
  date,
  width = 1200,
  height = 600,
  color = '#FFCC21',
}: CircularProgressProps) {
  const data = [
    { value },
    { value: 100 - value },
  ]

  return (
    <div style={{ width, height, position: 'relative' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius="75%"
            outerRadius="80%"
            startAngle={90}
            endAngle={-270}
            strokeWidth={0}
            style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.2))' }}
          >
            <Cell fill={color} strokeWidth={0} />
            <Cell fill="#ffffff15" strokeWidth={0} />
          </Pie>
        </RechartsPieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center gap-2">
        <div className="text-white text-lg">{date}</div>
        <div className="text-white">
          <span className="text-2xl font-bold">{value}</span>
          <span className="text-lg">%</span>
        </div>
      </div>
    </div>
  )
} 