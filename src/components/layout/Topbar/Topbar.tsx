import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import "./Topbar.scss";

const Topbar: React.FC = () => {
  return (
    <nav className="topbar">
      <img src={Logo} alt="logo sportsee" />
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/profil">Profil</NavLink>
      <NavLink to="/reglages">Réglages</NavLink>
      <NavLink to="/communaute">Communauté</NavLink>
    </nav>
  );
};

export default Topbar;
