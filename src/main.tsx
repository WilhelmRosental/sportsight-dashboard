import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import App from "./App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0101",
    },
    secondary: {
      main: "#e60000",
    },
    background: {
      default: "#fbfbfb",
      paper: "#fff",
    },
    text: {
      primary: "#282d30",
      secondary: "#74798c",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
