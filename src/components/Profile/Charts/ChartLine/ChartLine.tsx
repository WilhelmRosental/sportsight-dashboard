//Sessions
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import "./ChartLine.scss";

function CustomTooltip({ active, payload }) {
  if (active && payload)
    return (
      <div className="custom-tooltip__chartline">
        <p>{payload[0].value} min</p>
      </div>
    );
}

const ChartLine = ({ id }) => {
  return (
    <>
      <div className="linechart">
        <p className="linechart-title">
          Durée moyenne des <br />
          sessions
        </p>

        <LineChart
          width={305}
          height={263}
          data={data}
          className="linechart__container"
        >
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
      </div>
    </>
  );
};

export default ChartLine;
