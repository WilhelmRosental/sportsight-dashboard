import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import styled from "styled-components";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload) {
    return (
      <TooltipContainer>
        <p>{payload[0].value} min</p>
      </TooltipContainer>
    );
  }
  return null;
};

interface ChartLineProps {
  id: number;
  data: { day: string; sessionLength: number }[];
}

//styled-components
const LineChartContainer = styled.div`
  position: relative;
  width: 305px;
  height: 263px;
  background: ${(props) => props.theme.colors.red1};
  border-radius: 5px;
`;

const LineChartTitle = styled.p`
  position: absolute;
  top: 25px;
  left: 20px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.795);
`;

const StyledLineChart = styled(LineChart)`
  position: relative;

  .recharts-surface {
    position: absolute;
    bottom: 0;
    height: 220px !important;
  }
`;

const TooltipContainer = styled.div`
  padding: 10px;
  background: white;

  p {
    color: black;
    font-size: 12px;
    font-weight: 500;
  }
`;

const ChartLine: React.FC<ChartLineProps> = ({ data }) => {
  return (
    <LineChartContainer>
      <LineChartTitle>
        Durée moyenne des <br />
        sessions
      </LineChartTitle>

      <StyledLineChart width={305} height={263} data={data}>
        <XAxis
          dataKey="day"
          tick={{
            fill: "white",
            fontSize: "15px",
            fontWeight: "500",
            opacity: 0.65,
          }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey="sessionLength"
          domain={["dataMin - 20", "dataMax + 5"]}
          hide={true}
        />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="url(#gradiantline)"
          strokeWidth={3}
          dot={false}
          activeDot={{ fill: "white" }}
        />
        <defs>
          <linearGradient x1="0%" x2="100%" id="gradiantline">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
            <stop offset="10%" stopColor="rgba(255, 255, 255, 0.4)" />
            <stop offset="20%" stopColor="rgba(255, 255, 255, 0.5)" />
            <stop offset="30%" stopColor="rgba(255, 255, 255, 0.6)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>
        </defs>
      </StyledLineChart>
    </LineChartContainer>
  );
};

export default ChartLine;
