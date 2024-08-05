//Activity
import React from "react";
import "./ChartBar.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  TooltipProps,
} from "recharts";

interface DataItem {
  day: string;
  kilogram: number;
  calories: number;
}

interface ChartBarProps {
  id: number;
  data: DataItem[];
}

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

const ChartBar: React.FC<ChartBarProps> = ({ id, data }) => {
  const displayLegend = (name: string) => {
    switch (name) {
      case "kg":
        return "Poids";
      case "kCal":
        return "Calories brûlées";
      default:
        return "";
    }
  };

  return (
    <BarChart width={950} height={320} data={data} className="barchart">
      <text x="10" y="30" fontSize={15} fontWeight={500} color="#20253A">
        Activité quotidienne
      </text>

      <CartesianGrid strokeDasharray="3 3" vertical={false} axisLine={false} />

      <XAxis
        dataKey="day"
        tickLine={false}
        tickMargin={10}
        tickFormatter={(value) => value + 1}
      />
      <YAxis
        orientation="right"
        tickLine={false}
        axisLine={false}
        tickMargin={10}
      />

      <Tooltip content={<CustomTooltip />} />

      <Legend
        verticalAlign="top"
        align="right"
        height={64}
        iconType="circle"
        iconSize={8}
        formatter={(value) => (
          <span className="legend">
            {displayLegend(value)} ({value})
          </span>
        )}
      />

      <Bar
        dataKey="kilogram"
        name="kg"
        fill="#282D30"
        radius={[10, 10, 0, 0]}
        barSize={7}
      />
      <Bar
        dataKey="calories"
        name="kCal"
        fill="#E60000"
        radius={[10, 10, 0, 0]}
        barSize={7}
      />
    </BarChart>
  );
};

export default ChartBar;
