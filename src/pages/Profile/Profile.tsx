import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Profile.scss";
import { fetchUserMainData } from "../../api/apiService";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      (async () => {
        fetchUserMainData(id)
          .then((res) => {
            setData(res);
          })
          .catch((err) => {
            if (err.response.status === 404) navigate("/");
          });
      })();
    }
  });

  if (!data) return <div>Loading ...</div>;

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
