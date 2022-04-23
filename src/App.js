import React from "react";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./containers/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="home/*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
