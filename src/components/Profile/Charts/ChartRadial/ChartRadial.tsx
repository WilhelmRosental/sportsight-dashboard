import { RadialBarChart, RadialBar } from "recharts";
import "./ChartRadial.scss";
import { KeyData } from "../../../../types";

interface ChartRadialProps {
  datas: KeyData;
}

const ChartRadial: React.FC<ChartRadialProps> = ({ datas }) => {
  return (
    <RadialBarChart
      width={305}
      height={263}
      data={datas}
      cx="50%"
      cy="50%"
      innerRadius="65%"
      outerRadius="90%"
      barSize={10}
      className="radialChart"
      startAngle={90}
      endAngle={datas[0].value}
    >
      <text x="30" y="45" fontSize={18} fontWeight={500}>
        Score
      </text>
      <RadialBar minAngle={15} dataKey="value" cornerRadius={5} fill="red" />

      <circle cx="50%" cy="50%" r="77" fill="white" />
      <text x="30" y="45" fontSize={18} fontWeight={500}>
        <tspan x="125" y="120" fontSize={30} fill={"#282D30"}>
          {datas[0].value - 100} %
        </tspan>
        <tspan x="118" y="150" fill={"#74798c"}>
          de votre
        </tspan>
        <tspan x="120" y="175" fill={"#74798c"}>
          objectif
        </tspan>
      </text>
    </RadialBarChart>
  );
};

export default ChartRadial;
