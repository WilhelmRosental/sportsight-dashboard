import React from "react";
import styled from "styled-components";
import Meditation from "../../assets/icons/meditation.svg";
import Swimming from "../../assets/icons/swimming.svg";
import Cycling from "../../assets/icons/cycling.svg";
import Strength from "../../assets/icons/strength-training.svg";

const Sidenav = styled.nav`
  position: fixed;
  top: 0;
  padding-top: 91px;
  width: 117px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: black;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Li = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  background-color: white;
  border-radius: 6px;
`;

const Img = styled.img`
  max-width: 37px;
  width: 100%;
  height: 32px;
`;

const CopyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  transform: rotate(270deg);
  width: max-content;
`;

const P = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: white;
  transform-origin: left top;
  margin: auto;
`;

const Sidebar: React.FC = () => {
  return (
    <Sidenav>
      <Ul>
        <Li>
          <Img src={Meditation} alt="Meditation" />
        </Li>
        <Li>
          <Img src={Swimming} alt="Natation" />
        </Li>
        <Li>
          <Img src={Cycling} alt="Velo" />
        </Li>
        <Li>
          <Img src={Strength} alt="Musculation" />
        </Li>
      </Ul>
      <CopyRight>
        <P>Copyright, SportSee 2020</P>
      </CopyRight>
    </Sidenav>
  );
};

export default Sidebar;
