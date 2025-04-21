import React from "react";
import Card from "@mui/material/Card";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { UserPerformance } from "../../../types";

interface ChartRadarProps {
  performance: UserPerformance;
}

const ChartRadar: React.FC<ChartRadarProps> = ({ performance }) => {
  return (
    <Card
      sx={{
        width: 305,
        height: 263,
        borderRadius: 1,
        bgcolor: (theme) => theme.palette.grey[900],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
        position: "relative",
      }}
    >
      <RadarChart
        width={305}
        height={263}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={performance.data}
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
    </Card>
  );
};

export default ChartRadar;
