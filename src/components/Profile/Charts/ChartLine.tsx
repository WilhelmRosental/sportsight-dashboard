import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AverageSession } from "../../../types";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          p: 1,
          bgcolor: "white",
          borderRadius: 1,
        }}
      >
        <Typography sx={{ color: "black", fontSize: 12, fontWeight: 500 }}>
          {payload[0].value} min
        </Typography>
      </Box>
    );
  }
  return null;
};

interface ChartLineProps {
  sessions: AverageSession[];
}

const ChartLine: React.FC<ChartLineProps> = ({ sessions }) => {
  return (
    <Card
      sx={{
        position: "relative",
        width: 305,
        height: 263,
        bgcolor: (theme) => theme.palette.error.main,
        borderRadius: 1,
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: 25,
          left: 20,
          fontSize: 15,
          fontWeight: 500,
          color: "rgba(255,255,255,0.795)",
          zIndex: 2,
        }}
      >
        Durée moyenne des <br />
        sessions
      </Typography>
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        <LineChart width={305} height={263} data={sessions}>
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
        </LineChart>
      </Box>
    </Card>
  );
};

export default ChartLine;
