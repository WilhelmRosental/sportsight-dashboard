import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo.png";

const TopbarContainer = styled.nav`
  position: relative;
  padding: 0 35px;
  z-index: 1;
  box-shadow: 0px 4px 4px 0px #00000040;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 91px;
  background: black;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 500;
  color: white;
  text-decoration: none;

  &:hover {
    color: #ccc;
  }
`;

const LogoImage = styled.img`
  width: 178px;
  height: 60px;
`;

const Topbar: React.FC = () => {
  return (
    <TopbarContainer>
      <LogoImage src={Logo} alt="logo sportsee" />
      <StyledNavLink to="/">Accueil</StyledNavLink>
      <StyledNavLink to="/profil">Profil</StyledNavLink>
      <StyledNavLink to="/reglages">Réglages</StyledNavLink>
      <StyledNavLink to="/communaute">Communauté</StyledNavLink>
    </TopbarContainer>
  );
};

export default Topbar;
