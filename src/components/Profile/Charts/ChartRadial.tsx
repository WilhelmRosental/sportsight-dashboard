import React, { useState } from "react";
import { RadialBarChart, RadialBar } from "recharts";
import styled from "styled-components";
import { UserMainData } from "../../../types";

interface ChartRadialProps {
  datas: UserMainData;
}

//styled-components
const StyledRadialBarChart = styled(RadialBarChart)`
  background: ${(props) => props.theme.colors.cardBg};
  border-radius: 5px;
`;

const ChartRadial: React.FC<ChartRadialProps> = ({ datas }) => {
  const data = useState(() => {
    return {
      ...datas,
      todayScore: datas.todayScore || datas.score || 0,
    };
  })[0];

  console.log("MAIN ", data);

  if (!data) return <div></div>;

  const scorePercentage = (data.todayScore || 0) * 100;
  const endAngle = scorePercentage * 3.6 + 90; // Convertir le score en angle pour le graphique

  return (
    <StyledRadialBarChart
      width={305}
      height={263}
      data={[data]}
      cx="50%"
      cy="50%"
      innerRadius="65%"
      outerRadius="90%"
      barSize={10}
      startAngle={90}
      endAngle={endAngle} // Utiliser l'angle correct pour afficher le bon pourcentage
    >
      <text x="30" y="45" fontSize={18} fontWeight={500}>
        Score
      </text>
      <RadialBar dataKey="todayScore" cornerRadius={5} fill="red" />

      <circle cx="50%" cy="50%" r="77" fill="white" />
      <text x="30" y="45" fontSize={18} fontWeight={500}>
        <tspan x="125" y="120" fontSize={30} fill="#282D30">
          {data.todayScore * 100} %
        </tspan>
        <tspan x="118" y="150" fill="#74798c">
          de votre
        </tspan>
        <tspan x="120" y="175" fill="#74798c">
          objectif
        </tspan>
      </text>
    </StyledRadialBarChart>
  );
};

export default ChartRadial;
