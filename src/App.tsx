import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

import Topbar from "./components/layout/Topbar/Topbar";
import Sidenav from "./components/layout/Sidenav/Sidenav";

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

const App: React.FC = () => {
  return (
    <Router basename="/sportsee">
      <Topbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        <Route path="/profil" element={<Navigate replace to="/" />} />
        <Route path="/profil/:id" element={<Profile />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Sidenav />
    </Router>
  );
};

export default App;
