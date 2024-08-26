import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
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

const ProfileContainer = styled.div`
  margin-left: 117px;
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
`;

const ProfileContent = styled.div`
  padding: 40px 50px 0;
  display: flex;
  flex-direction: column;
`;

const ProfileHeaderText = styled.div`
  h1 {
    font-size: 48px;
    font-weight: 500;

    span {
      color: #e60000; /* remplace $red-1 par la valeur exacte de cette variable SCSS */
    }
  }

  p {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 400;
  }
`;

const ProfileChartsStatsContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const ProfileChartsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProfileChartsSubContainer = styled.div`
  display: flex;
  gap: 20px;
`;

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
    <ProfileContainer>
      <Main>
        <ProfileContent>
          <ProfileHeaderText>
            <h1>
              Bonjour <span>{data.mainData.userInfos.firstName}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </ProfileHeaderText>

          <ProfileChartsStatsContainer>
            <ProfileChartsContainer>
              <ChartBar activity={data.activity.sessions} />

              <ProfileChartsSubContainer>
                <ChartLine sessions={data.averageSessions.sessions} />
                <ChartRadar performance={data.performance} />
                <ChartRadial datas={data.mainData} />
              </ProfileChartsSubContainer>
            </ProfileChartsContainer>

            <div className="profil__charts-stats">
              <StatsBar datas={data.mainData.keyData} />
            </div>
          </ProfileChartsStatsContainer>
        </ProfileContent>
      </Main>
    </ProfileContainer>
  );
};

export default Profile;
