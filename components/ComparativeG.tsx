"use client";
import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
} from "recharts";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import "./ComparativeG.css";
import LegendG from "@/components/LegendG";

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

interface ComparativeGProps {
  data: any;
}

export function ComparativeG({ data }: ComparativeGProps) {

  if (!data || data.length < 2) {
    return <div>Loading...</div>;
  }

  const chartData = [
    { day: "Sab", S_anterior: data[0].sabado, S_actual: data[1].sabado },
    { day: "Dom", S_anterior: data[0].domingo, S_actual: data[1].domingo },
    { day: "Lun", S_anterior: data[0].lunes, S_actual: data[1].lunes },
    { day: "Mar", S_anterior: data[0].martes, S_actual: data[1].martes },
    { day: "Mie", S_anterior: data[0].miercoles, S_actual: data[1].miercoles },
    { day: "Jue", S_anterior: data[0].jueves, S_actual: data[1].jueves },
    { day: "Vie", S_anterior: data[0].viernes, S_actual: data[1].viernes },
  ];

  return (
    <Card className="comparative-container">
      <LegendG />
      <CardContent style={{ height: 280, width:790}}>
        <ChartContainer config={chartConfig}>
          <div className="chart-wrapper">
              <BarChart
                accessibilityLayer
                data={chartData}
                className="comparative-g"
                width={720} height={260}
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
          </div>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
