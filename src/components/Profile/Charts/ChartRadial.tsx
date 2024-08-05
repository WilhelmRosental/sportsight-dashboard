import React from "react";
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

const StyledText = styled.text`
  tspan {
    color: blue !important;
  }
`;

const ChartRadial: React.FC<ChartRadialProps> = ({ datas }) => {
  return (
    <StyledRadialBarChart
      width={305}
      height={263}
      data={[datas]}
      cx="50%"
      cy="50%"
      innerRadius="65%"
      outerRadius="90%"
      barSize={10}
      startAngle={90}
      endAngle={datas}
    >
      <text x="30" y="45" fontSize={18} fontWeight={500}>
        Score
      </text>
      <RadialBar dataKey="value" cornerRadius={5} fill="red" />

      <circle cx="50%" cy="50%" r="77" fill="white" />
      <StyledText x="30" y="45" fontSize={18} fontWeight={500}>
        <tspan x="125" y="120" fontSize={30} fill="#282D30">
          {(datas.todayScore ?? 0) * 100} %
        </tspan>
        <tspan x="118" y="150" fill="#74798c">
          de votre
        </tspan>
        <tspan x="120" y="175" fill="#74798c">
          objectif
        </tspan>
      </StyledText>
    </StyledRadialBarChart>
  );
};

export default ChartRadial;
