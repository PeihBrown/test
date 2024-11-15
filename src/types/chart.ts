export interface ChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface LineChartProps {
  data: ChartDataPoint[];
  width?: number | string;
  height?: number;
  className?: string;
  lines?: string[];
  xAxisKey?: string;
  showGrid?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
}

export type BarChartProps = {
  data: ChartDataPoint[]
  width?: number
  height?: number
  className?: string
  bars?: string[]
  xAxisKey?: string
  showGrid?: boolean
  showTooltip?: boolean
  showLegend?: boolean
}

export type PieChartProps = {
  data: ChartDataPoint[]
  width?: number
  height?: number
  className?: string
  innerRadius?: number
  outerRadius?: number
  showTooltip?: boolean
  showLegend?: boolean
} 