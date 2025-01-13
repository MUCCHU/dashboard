"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import { Dot, Line, LineChart, ReferenceLine, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip
} from "@/components/ui/chart"

const CustomDot = (props: any) => {
    // console.log(props)
  const { cx, cy, payload, activeChart, currPercentile } = props;
  if (payload && payload.percentile === Number(currPercentile)) {
    return (
      <g>
        <Dot cx={cx} cy={cy} r={4} fill={`var(--color-${activeChart})`} />
        <Dot cx={cx} cy={cy} r={8} fill="transparent" stroke={`var(--color-${activeChart})`} strokeWidth={2} />
      </g>
    );
  }else{
    return <Dot cx={cx} cy={cy} r={4} fill="white" stroke={`var(--color-${activeChart})`}/>;
}
};


const chartConfig = {
  students: {
    label: "Students",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ExampleLineChart(props:any) {
  const currPercentile = Number(props.percentile);
  // console.log(typeof(currPercentile))
  // const [activeChart, setActiveChart] =
  //   React.useState<keyof typeof chartConfig>("students")
  const activeChart = "students";
  const [chartData, setChartData] = React.useState([
    {percentile: 20, students: 5},
    {percentile: 30, students: 4},
    {percentile: 40, students: 10},
    {percentile: 50, students: 30},
    {percentile: 60, students: 20},
    {percentile: 70, students: 15},
    {percentile: 80, students: 10},
    {percentile: 90, students: 5},
  ])
  const chartRef = useRef<HTMLDivElement>(null)
  const [chartReady, setChartReady] = React.useState(false)

  useEffect(() => {
    if (chartRef.current) {
      setChartReady(true)
    }
  }, [])
  useEffect(() => {
    const updatedChartData = chartData.map((item) => {
      if (item.percentile === currPercentile) {
        return {
          ...item,
          students: item.students + 1, // Increment students count
        };
      }
      return item; // Return other items unchanged
    });
    setChartData(updatedChartData);
  }, [currPercentile]);


  return (
        <div ref={chartRef}>
          {chartReady && (
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-96 w-full"
            >
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <XAxis
                  dataKey="percentile"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                />
                
                <ChartTooltip />
                <ReferenceLine
                  x={currPercentile}
                  stroke={`var(--color-${activeChart})`}
                  strokeDasharray="3 3"
                  label={{
                    value: "your percentile",
                    position: ((currPercentile>50)? "left":"right"),
                    fill: `black`,
                    fontSize: 14,
                  }}
                />
                <Line
                  dataKey={activeChart}
                  type="monotone"
                  stroke={`var(--color-${activeChart})`}
                  strokeWidth={2}
                  dot={<CustomDot activeChart={activeChart} currPercentile={currPercentile} />}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ChartContainer>
          )}
        </div>
  )
}

