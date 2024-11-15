"use client";
import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import "./ComparativeG.css";
import LegendG from "@/components/LegendG";

const chartData = [
  { day: "Sab", S_anterior: 186, S_actual: 80 },
  { day: "Dom", S_anterior: 186, S_actual: 80 },
  { day: "Lun", S_anterior: 305, S_actual: 200 },
  { day: "Mar", S_anterior: 237, S_actual: 120 },
  { day: "Mie", S_anterior: 73, S_actual: 190 },
  { day: "Jue", S_anterior: 209, S_actual: 130 },
  { day: "Vie", S_anterior: 214, S_actual: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ComparativeG() {
  return (
    <Card className="comparative-container">
      <LegendG />
      <CardContent>
        <ChartContainer config={chartConfig}>
          <div className="chart-wrapper">
            <ResponsiveContainer width={720} height={260}>
              <BarChart
                accessibilityLayer
                data={chartData}
                className="comparative-g"
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                  className="etiquetas-x"
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dashed" />}
                />
                <Bar
                  dataKey="S_anterior"
                  fill="var(--Strong-Purple)"
                  radius={16}
                  barSize={20}
                />
                <Bar
                  dataKey="S_actual"
                  fill="var(--Table-Purple)"
                  radius={16}
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
