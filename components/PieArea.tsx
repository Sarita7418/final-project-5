"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const desktopData = [
  { area: "Sabado", desktop: 200, fill: "var(--color-Sabado)" },
  { area: "Domingo", desktop: 305, fill: "var(--color-Domingo)" },
  { area: "Lunes", desktop: 237, fill: "var(--color-Lunes)" },
  { area: "Martes", desktop: 173, fill: "var(--color-Martes)" },
  { area: "Miercoles", desktop: 209, fill: "var(--color-Miercoles)" },
  { area: "Jueves", desktop: 215, fill: "var(--color-Jueves)" },
  { area: "Viernes", desktop: 195, fill: "var(--color-Viernes)" },

];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
  Sabado: {
    label: "Sabado",
    color: "hsl(var(--chart-1))",
  },
  Domingo: {
    label: "Domingo",
    color: "hsl(var(--chart-2))",
  },
  Lunes: {
    label: "Lunes",
    color: "hsl(var(--chart-3))",
  },
  Martes: {
    label: "Martes",
    color: "hsl(var(--chart-4))",
  },
  Miercoles: {
    label: "Miercoles",
    color: "hsl(var(--chart-5))",
  },
  Jueves: {
    label: "Jueves",
    color: "hsl(var(--chart-6))",
  },
  Viernes: {
    label: "Viernes",
    color: "hsl(var(--chart-7))",
  },
} satisfies ChartConfig;

import "./PieG.css";
import report_b from "@/public/carbon_report_white.svg";
import Link from "next/link";

export function PieArea() {
  const id = "pie-interactive";
  const [activeArea, setActiveArea] = React.useState(desktopData[0].area);

  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.area === activeArea),
    [activeArea]
  );

  const areas = React.useMemo(() => desktopData.map((item) => item.area), []);

  return (
    <Card data-chart={id} className="flex flex-col" id="pie_card">
      <ChartStyle id={id} config={chartConfig} />

      <CardContent
        className="flex flex-1 justify-center pb-0"
        style={{ height: 220, width: 280 }}
      >
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={desktopData}
              dataKey="desktop"
              nameKey="area"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {desktopData[activeIndex].desktop.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <Link href="">
        <button className="b_report_db hover:bg-purple-400" >
          <img src={report_b.src} alt="" />
          <span>Generar reporte</span>
        </button>
      </Link>
    </Card>
  );
}
