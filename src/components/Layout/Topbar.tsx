import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../../assets/logo.png";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/profil", label: "Profil" },
  { to: "/reglages", label: "Réglages" },
  { to: "/communaute", label: "Communauté" },
];

const Topbar: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "black",
        boxShadow: "0px 4px 4px 0px #00000040",
        height: "91px",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <Toolbar
        sx={{
          minHeight: "91px !important",
          px: "35px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="logo sportsee"
          sx={{ width: 178, height: 60 }}
        />
        <Box sx={{ display: "flex", gap: 4 }}>
          {navLinks.map((link) => (
            <Button
              key={link.to}
              component={NavLink}
              to={link.to}
              sx={{
                fontSize: 24,
                fontWeight: 500,
                color: "white",
                textTransform: "none",
                textDecoration: "none",
                "&:hover": { color: "#ccc", background: "transparent" },
                "&.active": { color: "#ccc" },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
