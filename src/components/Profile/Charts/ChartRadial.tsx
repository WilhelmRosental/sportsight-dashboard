import React, { useState } from "react";
import { RadialBarChart, RadialBar } from "recharts";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { UserMainData } from "../../../types";

interface ChartRadialProps {
  datas: UserMainData;
}

const ChartRadial: React.FC<ChartRadialProps> = ({ datas }) => {
  const data = useState(() => {
    return {
      ...datas,
      todayScore: datas.todayScore || datas.score || 0,
    };
  })[0];

  if (!data) return <div></div>;

  const scorePercentage = (data.todayScore || 0) * 100;
  const endAngle = scorePercentage * 3.6 + 90;

  return (
    <Card
      sx={{
        width: 305,
        height: 263,
        borderRadius: 1,
        bgcolor: (theme) => theme.palette.background.paper,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "none",
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", top: 24, left: 32 }}>
        <Typography variant="subtitle1" fontWeight={500}>
          Score
        </Typography>
      </Box>
      <RadialBarChart
        width={305}
        height={263}
        data={[data]}
        cx="50%"
        cy="50%"
        innerRadius="65%"
        outerRadius="90%"
        barSize={10}
        startAngle={90}
        endAngle={endAngle}
      >
        <RadialBar dataKey="todayScore" cornerRadius={5} fill="red" />
        <circle cx="50%" cy="50%" r="77" fill="white" />
        {/* Texte central */}
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          <tspan x="50%" y="48%" fontSize={30} fill="#282D30" fontWeight={700}>
            {data.todayScore * 100} %
          </tspan>
          <tspan x="50%" y="58%" fontSize={16} fill="#74798c" fontWeight={500}>
            de votre
          </tspan>
          <tspan x="50%" y="66%" fontSize={16} fill="#74798c" fontWeight={500}>
            objectif
          </tspan>
        </text>
      </RadialBarChart>
    </Card>
  );
};

export default ChartRadial;
