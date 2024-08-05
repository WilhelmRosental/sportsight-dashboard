import Fire from "../../../assets/icons/calories-icon.svg";
import Protein from "../../../assets/icons/protein-icon.svg";
import Apple from "../../../assets/icons/carbs-icon.svg";
import Burger from "../../../assets/icons/fat-icon.svg";
import "./Stats.scss";
import { KeyData } from "../../../types/index";

interface StatsBarProps {
  datas: KeyData;
}

const StatsBar: React.FC<StatsBarProps> = ({ datas }) => {
  return (
    <div className="statsbar__container">
      <div className="stats__card">
        <img className={`statsimg__0`} src={Fire} alt={""} />

        <div className="stats__text-container">
          <p className="stats__text">{datas.calorieCount}</p>
          <p className="stats__subtext">Calories</p>
        </div>
      </div>

      <div className="stats__card">
        <img className={`statsimg__1`} src={Protein} alt={""} />

        <div className="stats__text-container">
          <p className="stats__text">{datas.proteinCount}</p>
          <p className="stats__subtext">Proteines</p>
        </div>
      </div>

      <div className="stats__card">
        <img className={`statsimg__2`} src={Apple} alt={""} />

        <div className="stats__text-container">
          <p className="stats__text">{datas.carbohydrateCount}</p>
          <p className="stats__subtext">Glucides</p>
        </div>
      </div>

      <div className="stats__card">
        <img className={`statsimg__3`} src={Burger} alt={""} />

        <div className="stats__text-container">
          <p className="stats__text">{datas.lipidCount}</p>
          <p className="stats__subtext">Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
