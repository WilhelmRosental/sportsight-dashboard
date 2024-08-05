import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";

import Topbar from "./components/Layout/Topbar";
import Sidenav from "./components/Layout/Sidenav";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  return (
    <Router basename="/SportSee-Dashboard/">
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
