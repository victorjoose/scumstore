import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";
import "./styles.css";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
