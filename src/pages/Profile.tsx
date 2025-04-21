import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material";
import {
  fetchUserMainData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
} from "../api/apiService";
import {
  UserMainData,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from "../types";

import ChartBar from "../components/Profile/Charts/ChartBar";
import ChartLine from "../components/Profile/Charts/ChartLine";
import ChartRadar from "../components/Profile/Charts/ChartRadar";
import ChartRadial from "../components/Profile/Charts/ChartRadial";
import StatsBar from "../components/Profile/Stats";

interface ProfileData {
  mainData: UserMainData | null;
  activity: UserActivity | null;
  averageSessions: UserAverageSessions | null;
  performance: UserPerformance | null;
}

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [data, setData] = useState<ProfileData>({
    mainData: null,
    activity: null,
    averageSessions: null,
    performance: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mainData, activity, averageSessions, performance] =
          await Promise.all([
            fetchUserMainData(Number(id)),
            fetchUserActivity(Number(id)),
            fetchUserAverageSessions(Number(id)),
            fetchUserPerformance(Number(id)),
          ]);
        setData({
          mainData,
          activity,
          averageSessions,
          performance,
        });
      } catch (err: any) {
        console.error(err);
        if (err.response?.status === 404) navigate("/");
      }
    };

    fetchData();
  }, [id, navigate]);

  if (
    !data.mainData ||
    !data.activity ||
    !data.averageSessions ||
    !data.performance
  ) {
    return <div>Loading ...</div>;
  }

  return (
    <Box sx={{ marginLeft: "117px" }}>
      <Box component="main" sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            padding: "40px 50px 0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ mb: 4 }}>
            <Typography variant="h1" sx={{ fontSize: 48, fontWeight: 500 }}>
              Bonjour{" "}
              <Box component="span" sx={{ color: "#e60000" }}>
                {data.mainData.userInfos.firstName}
              </Box>
            </Typography>
            <Typography sx={{ mt: 2, fontSize: 18, fontWeight: 400 }}>
              Félicitations ! Vous avez explosé vos objectifs hier 👏
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: "50px" }}>
            <Box
              sx={{ mt: 5, display: "flex", flexDirection: "column", gap: 2.5 }}
            >
              <ChartBar activity={data.activity.sessions} />

              <Box sx={{ display: "flex", gap: 2.5 }}>
                <ChartLine sessions={data.averageSessions.sessions} />
                <ChartRadar performance={data.performance} />
                <ChartRadial datas={data.mainData} />
              </Box>
            </Box>

            <Box>
              <StatsBar datas={data.mainData.keyData} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
