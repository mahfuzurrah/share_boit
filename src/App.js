import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Configuration from "./pages/Configuration";
import CSharebot from "./pages/CSharebot";
import DesignLayout from "./pages/DesignLayout";


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="configuration" element={<Configuration />} />
      <Route path="csharebot" element={<CSharebot />} />
      <Route path="design_layout" element={<DesignLayout />} />
      </Routes>
    </Router>
  );
}

export default App;