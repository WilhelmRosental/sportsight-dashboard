import React from "react";
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
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Session } from "../../../types";

interface ChartBarProps {
  activity: Session[];
}

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    return (
      <Box
        sx={{
          background: (theme) => theme.palette.error.light,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 1,
          p: 0,
        }}
      >
        <Typography
          sx={{ p: "15px 10px", fontSize: 14, fontWeight: 500, color: "white" }}
        >
          {`${payload[0].value}kg`}
        </Typography>
        <Typography
          sx={{ p: "15px 10px", fontSize: 14, fontWeight: 500, color: "white" }}
        >
          {`${payload[1].value}kCal`}
        </Typography>
      </Box>
    );
  }
  return null;
};

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

const ChartBar: React.FC<ChartBarProps> = ({ activity }) => {
  return (
    <Card
      sx={{
        p: "10px",
        m: "10px 5px",
        width: "100%",
        height: "100%",
        bgcolor: (theme) => theme.palette.background.paper,
        borderRadius: 1,
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <BarChart width={950} height={320} data={activity}>
        <text x="10" y="30" fontSize={15} fontWeight={500} fill="#20253A">
          Activité quotidienne
        </text>
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          axisLine={false}
        />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          tickFormatter={(value) => value}
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
            <Typography
              component="span"
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              {displayLegend(value)} ({value})
            </Typography>
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
    </Card>
  );
};

export default ChartBar;
