import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Profile.scss";
import { fetchUserMainData } from "../../api/apiService";
import { UserMainData } from "../../types";

interface Props {
  id: number;
  data: UserMainData[] | null;
  setData: React.Dispatch<React.SetStateAction<UserMainData[] | null>>;
}

const Profile: React.FC<Props> = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      const fetchData = async () => {
        try {
          const res = await fetchUserMainData(Number(id));
          setData(res);
        } catch (err: any) {
          if (err.response?.status === 404) navigate("/");
        }
      };

      fetchData();
    }
  }, [data, id, navigate, setData]);

  if (!data) return <div>Loading ...</div>;

  console.log("DATA : ", data);

  return (
    <div className="profil">
      <main>
        <div className="profil__content">
          <div className="profil__header-text">
            <h1>
              Bonjour <span>"Test !"</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
