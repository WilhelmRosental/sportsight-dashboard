import React from "react";
import styled from "styled-components";
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

//styled-components
const StyledRadarChart = styled(RadarChart)`
  background: ${(props) => props.theme.colors.grey1};
  border-radius: 5px;
`;

const ChartRadar: React.FC<ChartRadarProps> = ({ id, data }) => {
  return (
    <StyledRadarChart
      width={305}
      height={263}
      cx="50%"
      cy="50%"
      outerRadius="80%"
      data={data}
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
