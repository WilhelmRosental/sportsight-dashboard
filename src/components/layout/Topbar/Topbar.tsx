import React from "react";
import Logo from "../../../assets/logo.png";
import "./Topbar.scss";

const Topbar: React.FC = () => {
  return (
    <nav className="topbar">
      <img src={Logo} alt="logo sportsee" />
      <a href="/accueil">Accueil</a>
      <a href="/profil">Profil</a>
      <a href="/reglages">Réglages</a>
      <a href="/communaute">Communauté</a>
    </nav>
  );
};

export default Topbar;
