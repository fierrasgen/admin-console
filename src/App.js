import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import {Dashboard} from "./routes/Dashboard/Dashboard";
import {Main} from "./routes/Main/Main";
import GlobalStyle from "./globalStyles";


function App() {
  return (
      <div>
      <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Main />} />
      </Routes>
          <GlobalStyle />
      </div>
  );
}

export default App;
