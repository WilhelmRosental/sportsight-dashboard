import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Meditation from "../../assets/icons/meditation.svg";
import Swimming from "../../assets/icons/swimming.svg";
import Cycling from "../../assets/icons/cycling.svg";
import Strength from "../../assets/icons/strength-training.svg";

const iconData = [
  { src: Meditation, alt: "Meditation" },
  { src: Swimming, alt: "Natation" },
  { src: Cycling, alt: "Velo" },
  { src: Strength, alt: "Musculation" },
];

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        sx: {
          width: 117,
          bgcolor: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: "91px",
          justifyContent: "space-between",
          borderRight: "none",
        },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        {iconData.map((icon, idx) => (
          <ListItem
            key={icon.alt}
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 64,
              height: 64,
              bgcolor: "white",
              borderRadius: 1.5,
              mb: idx === iconData.length - 1 ? 0 : 0,
              p: 0,
            }}
          >
            <Box
              component="img"
              src={icon.src}
              alt={icon.alt}
              sx={{
                maxWidth: 37,
                width: "100%",
                height: 32,
                objectFit: "contain",
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "auto",
          mb: "auto",
          transform: "rotate(270deg)",
          width: "max-content",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: 12,
            fontWeight: 500,
            color: "white",
            m: "auto",
            transformOrigin: "left top",
          }}
        >
          Copyright, SportSee 2020
        </Typography>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
