import React from "react";
import styled from "styled-components";
import Fire from "../../assets/icons/calories-icon.svg";
import Protein from "../../assets/icons/protein-icon.svg";
import Apple from "../../assets/icons/carbs-icon.svg";
import Burger from "../../assets/icons/fat-icon.svg";
import { KeyData } from "../../types/index";

interface StatsBarProps {
  datas: KeyData;
}

//styled-components
const StatsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StatsCard = styled.div`
  padding: 15px 25px;
  width: 258px;
  height: 124px;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.cardBg};
  border-radius: 5px;
  z-index: 50;

  img {
    padding: 20px;
    border-radius: 5px;
  }
`;

const StatsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StatsText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.grey1};
`;

const StatsSubText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.grey3};
`;

const StatsBar: React.FC<StatsBarProps> = ({ datas }) => {
  return (
    <StatsBarContainer>
      <StatsCard>
        <img className="statsimg__0" src={Fire} alt="" />
        <StatsTextContainer>
          <StatsText>{datas.calorieCount}</StatsText>
          <StatsSubText>Calories</StatsSubText>
        </StatsTextContainer>
      </StatsCard>

      <StatsCard>
        <img className="statsimg__1" src={Protein} alt="" />
        <StatsTextContainer>
          <StatsText>{datas.proteinCount}</StatsText>
          <StatsSubText>Proteines</StatsSubText>
        </StatsTextContainer>
      </StatsCard>

      <StatsCard>
        <img className="statsimg__2" src={Apple} alt="" />
        <StatsTextContainer>
          <StatsText>{datas.carbohydrateCount}</StatsText>
          <StatsSubText>Glucides</StatsSubText>
        </StatsTextContainer>
      </StatsCard>

      <StatsCard>
        <img className="statsimg__3" src={Burger} alt="" />
        <StatsTextContainer>
          <StatsText>{datas.lipidCount}</StatsText>
          <StatsSubText>Lipides</StatsSubText>
        </StatsTextContainer>
      </StatsCard>
    </StatsBarContainer>
  );
};

export default StatsBar;
