import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
