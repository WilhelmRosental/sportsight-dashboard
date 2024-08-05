//Performances
import React from "react";
import "./ChartRadar.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

interface DataItem {
  kind: string;
  value: number;
}

interface ChartRadarProps {
  id: number;
  data: DataItem[];
}

const ChartRadar: React.FC<ChartRadarProps> = ({ id, data }) => {
  return (
    <RadarChart
      width={305}
      height={263}
      cx="50%"
      cy="50%"
      outerRadius="80%"
      data={data}
      className="radarChart"
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} />
      <PolarRadiusAxis axisLine={false} tick={false} />
      <Radar
        name="Performance"
        dataKey="value"
        fill="#FF0101"
        fillOpacity={0.7}
      />
    </RadarChart>
  );
};

export default ChartRadar;
