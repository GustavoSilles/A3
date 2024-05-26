import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import Home2 from "./components/Home2/home2";
import Home3 from "./components/Home3/home3";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
