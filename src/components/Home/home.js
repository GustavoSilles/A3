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
            <h1 className="titulo">Bem vindo!</h1>
            <p className="paragrafo">
            A violência é algo muito sério e recorrente no Brasil que traz males para muitos brasileiros. O objetivo desse site é trazer dados e informações para conscientizar, informar e mobilizar as pessoas para esse problema nacional. Aqui você encontrara dashboards que serão uteis para suas pesquisas sobre o assunto.
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