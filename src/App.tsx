import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Topbar from "./components/layout/Topbar/Topbar";
import Sidenav from "./components/layout/Sidenav/Sidenav";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

const App: React.FC = () => {
  return (
    <Router>
      <Topbar />

      <Routes>
        <Route index path="/accueil" element={<Home />} />

        <Route path="/profil" element={<Navigate replace to="/" />} />
        <Route path="/profil/:id" element={<Profile />} />

        <Route path="*" element={<Navigate replace to="/accueil" />} />
      </Routes>

      <Sidenav />
    </Router>
  );
};

export default App;
