import React from "react";
import "./homeStyles.css";
import Home2 from "../Home2/home2";
import Home3 from "../Home3/home3";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div id="home" className="home">
        <div className="container">
          <div className="paradas">
            <h1 className="titulo">Projeto A3 tema violencia</h1>
            <p className="paragrafo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
            </p>
            <a href="#leiamais">
              <button className="button-neon">Leia Mais</button>
            </a>
          </div>
        </div>
      </div>
      <div id="home2">
        <Home2 />
      </div>
      <div id="home3">
        <Home3 />
      </div>
      <Footer />
    </>
  );
};

export default Home;