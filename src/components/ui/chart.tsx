import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts"

interface ChartProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  type?: "bar" | "line"
  width?: number | string
  height?: number | string
  className?: string
}

export function Chart({
  data,
  type = "line",
  width = "100%",
  height = 350,
  className,
}: ChartProps) {
  return (
    <ResponsiveContainer width={width} height={height} className={className}>
      {type === "line" ? (
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="currentColor"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      ) : (
        <BarChart data={data}>
          <Bar
            dataKey="value"
            fill="currentColor"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      )}
    </ResponsiveContainer>
  )
}