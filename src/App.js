import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Gallery from "./pages/Gallery";
import "./styles/App.css";
import Create from "./pages/Create";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="backdrop overflow-y-auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="main" element={<Main />}></Route>
        <Route path="main/gallery" element={<Gallery />}></Route>
        <Route path="create" element={<Create />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
