import React from "react";
import {
  FiMail,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./footerStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="top">
          <div className="logo-footer">    
            <h2 className="textfooter">InfoViolência</h2>
          </div>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navegação</h3>
            <p>
              <Link className="textoFooter" to="/" onClick={() => window.scrollTo({top: 0})}>
                Introdução
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/" onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById("home2");
                  if (element) {
                    element.scrollIntoView();
                  }
                });
              }}>
                Dashboards
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/" onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById("home3");
                  if (element) {
                    element.scrollIntoView();
                  }
                });
              }}>
                Procure ajuda
              </Link>
            </p>
          </div>
          <div className="col">
            <h3>Tecnologias</h3>
            <p>
              <span className="textoFooter">
                React JS
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Netlify
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Javascript
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Node.JS
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Github
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Power BI
              </span>
            </p>
          </div>
          <div className="col">
            <h3>Informação</h3>
            <p>
              <Link className="textoFooter" to="leiamais">
                Leia mais
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/" onClick={() => window.scrollTo({top: 0})}>
                Home
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/">
                Contatar
              </Link>
            </p>
          </div>
          <div className="col">
            <h3>Créditos</h3>
            <p>
              <span className="textoFooter">
                Gustavo Silles
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Kauany Pecuch
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Gabriel Meira
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Marcos Vinicio
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Djeferson Luiz
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Júlia Schaden
              </span>
            </p>
          </div>
          <form>
            <h3>Redes sociais</h3>
            <input type="email" placeholder="Envie um e-mail" />
            <FiMail className="mail-icon" />
            <div className="social-group">
              <FiInstagram className="social-icon" />
              <FiFacebook className="social-icon" />
              <FiLinkedin className="social-icon" />
              <FiGithub className="social-icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
