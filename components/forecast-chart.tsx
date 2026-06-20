"use client";
import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { forecastData, money } from "@/lib/demo-data";

export function ForecastChart({ detailed = false }: { detailed?: boolean }) {
  return <div className={detailed ? "chart-large" : "chart"} aria-label="90-day cash flow forecast chart">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={forecastData} margin={{ top: 12, right: 8, bottom: 0, left: -18 }}>
        <defs><linearGradient id="cashArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#18745A" stopOpacity={0.2}/><stop offset="1" stopColor="#18745A" stopOpacity={0}/></linearGradient></defs>
        <CartesianGrid vertical={false} stroke="#E7E4DB" />
        <XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={11} tickMargin={10} />
        <YAxis tickFormatter={(v) => `${v/1000}k`} tickLine={false} axisLine={false} fontSize={11} />
        <Tooltip formatter={(value) => money.format(Number(value))} contentStyle={{ borderRadius: 12, border: "1px solid #ddd8ca", boxShadow: "0 12px 30px #102a2430" }} />
        <Area type="monotone" dataKey="expected" stroke="#18745A" strokeWidth={3} fill="url(#cashArea)" />
        {detailed && <><Line type="monotone" dataKey="optimistic" stroke="#61A98D" strokeDasharray="5 5" dot={false}/><Line type="monotone" dataKey="conservative" stroke="#D39A35" strokeDasharray="5 5" dot={false}/></>}
      </AreaChart>
    </ResponsiveContainer>
  </div>;
}
