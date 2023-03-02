import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Store from "./pages/Store/Store";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  );
}

export default AppRoutes;
