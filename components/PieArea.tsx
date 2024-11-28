"use client";
import "./PieArea.css";
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

import report_b from "@/public/carbon_report_white.svg";
import Link from "next/link";

interface PieGProps {
  data: any; // Replace 'any' with the appropriate type if known
}

export function PieArea({ data }: PieGProps) {

  if (!data || data.length < 1) {
    return <div>Loading...</div>;
  }

  const desktopData = [
    { area: "Sabado", desktop: Number(data[1].sabado), fill:  "var(--color-Sabado)" },
    { area: "Domingo", desktop: Number(data[1].domingo), fill:  "var(--color-Domingo)" },
    { area: "Lunes", desktop: Number(data[1].lunes), fill:  "var(--color-Lunes)" },
    { area: "Martes", desktop: Number(data[1].martes), fill:  "var(--color-Martes)" },
    { area: "Miercoles", desktop: Number(data[1].miercoles), fill:  "var(--color-Miercoles)" },
    { area: "Jueves", desktop: Number(data[1].jueves), fill:  "var(--color-Jueves)" },
    { area: "Viernes", desktop: Number(data[1].viernes), fill:  "var(--color-Viernes)" },
  
  ];


  const id = "pie-interactive";
  const [activeArea, setActiveArea] = React.useState(desktopData[0].area);

  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.area === activeArea),
    [activeArea]
  );

  const areas = React.useMemo(() => desktopData.map((item) => item.area), []);

  return (
    <Card data-chart={id} className="flex flex-col items-center" id="pie_card">
      <Select value={activeArea} onValueChange={setActiveArea}>
        <SelectTrigger
          className="h-7 w-[130px] rounded-lg pl-2.5 select-trigger"
          aria-label="Select an area"
        >
          <SelectValue placeholder="Select area" />
        </SelectTrigger>
        <SelectContent align="end" className="rounded-xl">
          {areas.map((key) => {
            const config = desktopData.find((item) => item.area === key);

            if (!config) {
              return null;
            }

            return (
              <SelectItem
                key={key}
                value={key}
                className="rounded-lg [&_span]:flex"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-3 w-3 shrink-0 rounded-sm"
                    style={{
                      backgroundColor: config.fill,
                    }}
                  />
                  {config.area}
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
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
                          {data[0].uMedida}
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
        <button className="b_report_area hover:bg-purple-400" >
          <img src={report_b.src} alt="" />
          <span>Generar reporte</span>
        </button>
      </Link>
    </Card>
  );
}
