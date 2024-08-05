import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import Dashboard from "./components/Dashboard";
import "./css/Sidebar.css";
import "./css/RightSidebar.css";
import "./App.css";
import "./css/Dashboard.css";
import Wallet from "./components/Wallet"; // Import Wallet component

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add other routes here */}
            <Route path="/wallet" component={Wallet} />{" "}
            {/* Define route for Wallet */}
          </Routes>
        </div>
        <RightSidebar />
      </div>
    </Router>
  );
};

export default App;
