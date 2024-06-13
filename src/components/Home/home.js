import React, { useState } from "react";
import "./homeStyles.css";
import Home2 from "../Home2/home2";
import Home3 from "../Home3/home3";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Leiamais from "../Leiamais/leiamais";


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div id="/home" className="home">
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
            <button className="button-neon" onClick={openModal}>Leia Mais</button>
          </div>
        </div>
      </div>
      <div id="/home2">
        <Home2 />
      </div>
      <div id="/home3">
        <Home3 />
      </div>
      <Footer />
      {isModalOpen && (
        <Leiamais closeModal={closeModal} />
      )}
    </>
  );
};

export default Home;
