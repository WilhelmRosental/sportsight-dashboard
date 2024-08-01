import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profil">
      <main>
        <div className="profil__content">
          <div className="profil__header-text">
            <h1>
              Bonjour <span>"Test"</span>
            </h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
