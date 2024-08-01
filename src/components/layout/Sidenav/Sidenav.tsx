import React from "react";
import "./Sidenav.scss";
import Meditation from "../../../assets/icons/meditation.svg";
import Swimming from "../../../assets/icons/swimming.svg";
import Cycling from "../../../assets/icons/cycling.svg";
import Strength from "../../../assets/icons/strength-training.svg";

const Sidebar: React.FC = () => {
  return (
    <nav className="sidenav">
      <ul>
        <li>
          <img src={Meditation} alt="Meditation" />
        </li>
        <li>
          <img src={Swimming} alt="Natation" />
        </li>
        <li>
          <img src={Cycling} alt="Velo" />
        </li>
        <li>
          <img src={Strength} alt="Musculation" />
        </li>
      </ul>
      <p>Copyright, SportSee 2020</p>
    </nav>
  );
};

export default Sidebar;
