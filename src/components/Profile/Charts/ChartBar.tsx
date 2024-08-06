// import React from "react";
// import styled from "styled-components";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   TooltipProps,
// } from "recharts";

// interface DataItem {
//   day: string;
//   kilogram: number;
//   calories: number;
// }

// interface ChartBarProps {
//   id: number;
//   data: DataItem[];
// }

// // Styles using styled-components
// const StyledBarChart = styled(BarChart)`
//   padding: 10px;
//   margin: 10px 5px;
//   width: 100%;
//   height: 100%;
//   background: ${(props) => props.theme.colors.cardBg};
//   border-radius: 5px;

//   .recharts-default-legend {
//     padding: 1.1rem 1.8rem !important;
//   }
// `;

// const TooltipContainer = styled.div`
//   background: ${(props) => props.theme.colors.red2};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .label {
//     padding: 15px 10px;
//     font-size: 14px;
//     font-weight: 500;
//     color: white;
//   }
// `;

// const LegendText = styled.span`
//   font-size: 14px;
//   font-weight: 500;
//   color: ${(props) => props.theme.colors.grey3};
// `;

// const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
//   active,
//   payload,
// }) => {
//   if (active && payload && payload.length) {
//     return (
//       <TooltipContainer>
//         <p className="label">{`${payload[0].value}kg`}</p>
//         <p className="label">{`${payload[1].value}kCal`}</p>
//       </TooltipContainer>
//     );
//   }
//   return null;
// };

// const ChartBar: React.FC<ChartBarProps> = ({ data }) => {
//   const displayLegend = (name: string) => {
//     switch (name) {
//       case "kg":
//         return "Poids";
//       case "kCal":
//         return "Calories brûlées";
//       default:
//         return "";
//     }
//   };

//   return (
//     <StyledBarChart width={950} height={320} data={data}>
//       <text x="10" y="30" fontSize={15} fontWeight={500} color="#20253A">
//         Activité quotidienne
//       </text>

//       <CartesianGrid strokeDasharray="3 3" vertical={false} axisLine={false} />

//       <XAxis
//         dataKey="day"
//         tickLine={false}
//         tickMargin={10}
//         tickFormatter={(value) => value + 1}
//       />
//       <YAxis
//         orientation="right"
//         tickLine={false}
//         axisLine={false}
//         tickMargin={10}
//       />

//       <Tooltip content={<CustomTooltip />} />

//       <Legend
//         verticalAlign="top"
//         align="right"
//         height={64}
//         iconType="circle"
//         iconSize={8}
//         formatter={(value) => (
//           <LegendText>
//             {displayLegend(value)} ({value})
//           </LegendText>
//         )}
//       />

//       <Bar
//         dataKey="kilogram"
//         name="kg"
//         fill="#282D30"
//         radius={[10, 10, 0, 0]}
//         barSize={7}
//       />
//       <Bar
//         dataKey="calories"
//         name="kCal"
//         fill="#E60000"
//         radius={[10, 10, 0, 0]}
//         barSize={7}
//       />
//     </StyledBarChart>
//   );
// };

// export default ChartBar;

import React from "react";
import styled from "styled-components";
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
import { Session } from "../../../types"; // Assurez-vous que le chemin est correct

interface ChartBarProps {
  activity: Session[];
}

// Styles using styled-components
const StyledBarChart = styled(BarChart)`
  padding: 10px;
  margin: 10px 5px;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.cardBg};
  border-radius: 5px;

  .recharts-default-legend {
    padding: 1.1rem 1.8rem !important;
  }
`;

const TooltipContainer = styled.div`
  background: ${(props) => props.theme.colors.red2};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .label {
    padding: 15px 10px;
    font-size: 14px;
    font-weight: 500;
    color: white;
  }
`;

const LegendText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.grey3};
`;

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}kCal`}</p>
      </TooltipContainer>
    );
  }
  return null;
};

const ChartBar: React.FC<ChartBarProps> = ({ activity }) => {
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

  return (
    <StyledBarChart width={950} height={320} data={activity}>
      <text x="10" y="30" fontSize={15} fontWeight={500} color="#20253A">
        Activité quotidienne
      </text>

      <CartesianGrid strokeDasharray="3 3" vertical={false} axisLine={false} />

      <XAxis
        dataKey="day"
        tickLine={false}
        tickMargin={10}
        tickFormatter={(value) => value + 1}
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
          <LegendText>
            {displayLegend(value)} ({value})
          </LegendText>
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
    </StyledBarChart>
  );
};

export default ChartBar;
