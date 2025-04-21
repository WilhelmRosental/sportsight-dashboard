import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Fire from "../../assets/icons/calories-icon.svg";
import Protein from "../../assets/icons/protein-icon.svg";
import Apple from "../../assets/icons/carbs-icon.svg";
import Burger from "../../assets/icons/fat-icon.svg";
import { KeyData } from "../../types/index";

interface StatsBarProps {
  datas: KeyData;
}

const stats = [
  {
    icon: Fire,
    valueKey: "calorieCount",
    label: "Calories",
    alt: "Calories icon",
    bg: "#FFECEC",
  },
  {
    icon: Protein,
    valueKey: "proteinCount",
    label: "Proteines",
    alt: "Protein icon",
    bg: "#E9F4FB",
  },
  {
    icon: Apple,
    valueKey: "carbohydrateCount",
    label: "Glucides",
    alt: "Carbs icon",
    bg: "#FBF6E5",
  },
  {
    icon: Burger,
    valueKey: "lipidCount",
    label: "Lipides",
    alt: "Fat icon",
    bg: "#FBEAEF",
  },
];

const StatsBar: React.FC<StatsBarProps> = ({ datas }) => {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      {stats.map((stat, idx) => (
        <Card
          key={stat.label}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: "15px 25px",
            width: 258,
            height: 124,
            borderRadius: 1,
            boxShadow: "none",
            bgcolor: (theme) => theme.palette.background.paper,
            zIndex: 50,
          }}
        >
          <Avatar
            src={stat.icon}
            alt={stat.alt}
            sx={{
              bgcolor: stat.bg,
              width: 64,
              height: 64,
              p: 2,
              borderRadius: 1,
            }}
            variant="rounded"
          />
          <Box display="flex" flexDirection="column" gap={0.5}>
            <Typography variant="h6" fontWeight={700} color="text.primary">
              {datas[stat.valueKey as keyof KeyData]}
            </Typography>
            <Typography variant="body2" fontWeight={500} color="text.secondary">
              {stat.label}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default StatsBar;
