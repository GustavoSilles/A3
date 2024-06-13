import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";
import Leiamais from "./components/Leiamais/leiamais";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
        <Route path="leiamais" element={<Leiamais />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;