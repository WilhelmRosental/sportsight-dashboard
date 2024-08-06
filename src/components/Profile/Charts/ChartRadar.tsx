import React from "react";
import styled from "styled-components";
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

//styled-components
const StyledRadarChart = styled(RadarChart)`
  background: ${(props) => props.theme.colors.grey1};
  border-radius: 5px;
`;

const ChartRadar: React.FC<ChartRadarProps> = ({ performance }) => {
  return (
    <StyledRadarChart
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
    </StyledRadarChart>
  );
};

export default ChartRadar;
