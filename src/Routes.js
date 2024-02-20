import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.js";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/groBeries" element={<HomePage />} />
    </Routes>
  );
};

export default AppRoutes;