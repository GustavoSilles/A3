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
          <div className="tudo">
          <div className="paradas">
            <div className="colun">
            <h1 className="titulo">Violência em Dados!</h1>
            <p className="paragrafo">
            A violência é um problema muito sério e recorrente no Brasil, que causa muitos males aos brasileiros. O objetivo deste site é fornecer dados e informações para conscientizar, informar e mobilizar as pessoas em relação a esse problema nacional. Aqui você encontrará dashboards úteis para suas pesquisas sobre o assunto.
            </p>
            </div>
            <div className="imgposi">
            <div className="imghome"></div>
            </div>
          </div>  
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