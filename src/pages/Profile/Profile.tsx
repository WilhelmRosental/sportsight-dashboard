import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Profile.scss";
import { fetchUserMainData } from "../../api/apiService";
import { UserMainData } from "../../types";
import StatsBar from "../../components/Profile/Stats/Stats";

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
    <div className="profil">
      <main>
        <div className="profil__content">
          <div className="profil__header-text">
            <h1>
              Bonjour <span>{data.userInfos.firstName}</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </div>

          <div className="profil__charts-stats_container">
            {/* <div className="profil__charts-container">
              <ChartBar id={id} />

              <div className="profil__charts-sub_container">
                <ChartLine id={id} />
                <ChartRadar id={id} />
                <ChartRadial id={id} />
              </div>
            </div> */}

            <div className="profil__charts-stats">
              <StatsBar datas={data.keyData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
