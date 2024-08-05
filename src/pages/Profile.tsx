import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { fetchUserMainData } from "../api/apiService";
import { UserMainData } from "../types";

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

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [data, setData] = useState<UserMainData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchUserMainData(Number(id));
        setData(res);
      } catch (err: any) {
        console.error(err);
        if (err.response?.status === 404) navigate("/");
      }
    };

    fetchData();
  }, [id, navigate]);

  if (!data) return <div>Loading ...</div>;

  console.log("DATA : ", data);

  return (
    <ProfileContainer>
      <Main>
        <ProfileContent>
          <ProfileHeaderText>
            <h1>
              Bonjour <span>{data.userInfos.firstName}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </ProfileHeaderText>

          <ProfileChartsStatsContainer>
            <ProfileChartsContainer>
              {/* <ChartBar id={id} /> */}

              <ProfileChartsSubContainer>
                {/* <ChartLine id={id} /> */}
                {/* <ChartRadar id={id} /> */}
                <ChartRadial datas={data} />
              </ProfileChartsSubContainer>
            </ProfileChartsContainer>

            <div className="profil__charts-stats">
              <StatsBar datas={data.keyData} />
            </div>
          </ProfileChartsStatsContainer>
        </ProfileContent>
      </Main>
    </ProfileContainer>
  );
};

export default Profile;
