import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { LineChartProps } from '../../types/chart'

const defaultColors = ['#FFCC21', '#8FE9D0']

export function LineChart({
  data,
  className,
  lines = ['value'],
  xAxisKey = 'name',
  showGrid = true,
  showTooltip = true,
  showLegend = true,
}: LineChartProps) {
  return (
    <div 
      className={`w-full h-full bg-background-darker ${className}`} 
    >
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart 
          data={data} 
          margin={{ 
            left: 8, 
            right: 8, 
            top: 0, 
            bottom: 0 
          }}
        >
          {showGrid && (
            <CartesianGrid 
              vertical={true}
              horizontal={false}
              stroke="#777777"
              strokeDasharray="0"
              // strokeWidth={1}
            />
          )}
          <XAxis 
            dataKey={xAxisKey} 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#FFFFFF', fontSize: 10 }}
            interval={'preserveStartEnd'}
            dy={14}
          />
          <YAxis 
            hide={true}
          />
          {showTooltip && (
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#FFFFFF', 
                border: 'none',
                borderRadius: '4px',
                padding: '8px 12px',
              }}
              itemStyle={{ color: '#2E2E2E' }}
              labelStyle={{ color: '#2E2E2E', marginBottom: '4px' }}
            />
          )}
          {showLegend && (
            <Legend 
              wrapperStyle={{ color: '#FFFFFF' }}
              iconType="circle"
            />
          )}
          {lines.map((line, index) => (
            <Line
              key={line}
              type="monotone"
              dataKey={line}
              stroke={defaultColors[index % defaultColors.length]}
              strokeWidth={3}
              dot={{ 
                r: 4, 
                fill: defaultColors[index % defaultColors.length],
                strokeWidth: 0
              }}
              activeDot={{ 
                r: 8, 
                fill: defaultColors[index % defaultColors.length],
                strokeWidth: 0
              }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
} 