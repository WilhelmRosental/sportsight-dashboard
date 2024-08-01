import { Link } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import "./Home.scss";

const Home: React.FC = () => {
  const [id, setId] = useState<number>(12);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(Number(e.target.value));
  };

  return (
    <div className="home">
      <h1>SportSee Project</h1>

      <div className="home__container">
        <p>API Base URL: {import.meta.env.VITE_API_BASE_URL}</p>
        <label htmlFor="idprofil">
          Enter the id of the profile you want to see:{" "}
        </label>
        <input
          type="number"
          name="idprofil"
          placeholder="12"
          onChange={handleChange}
        />
        <Link to={`/profil/${id}`}>Go to profile of: {id}</Link>
      </div>
    </div>
  );
};

export default Home;
