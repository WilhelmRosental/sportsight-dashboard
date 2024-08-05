import { Link } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  margin-left: 117px;

  h1 {
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 400;
    color: #d32f2f; /* remplace $red-2 par la valeur exacte de cette variable SCSS */
    text-align: center;
  }
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  input[type="number"] {
    padding: 10px;
    background: grey;
    max-width: 300px;
    width: 100%;
    color: white;
    outline: none;
    border: none;
    border-radius: 5px;
  }
`;

const Home: React.FC = () => {
  const [id, setId] = useState<number>(12);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(Number(e.target.value));
  };

  return (
    <HomeContainer>
      <h1>SportSee Project</h1>

      <HomeContent>
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
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
