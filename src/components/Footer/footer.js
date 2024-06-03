import React from "react";
import {
  FiMail,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import "./footerStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="top">
          <div className="logo-footer">    
            <h2 className="textfooter">VIOLENCIA</h2>
          </div>
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navegação</h3>
            <p>
              <a className="textoFooter" href="#home">
                Introdução
              </a>
            </p>
            <p>
              <a className="textoFooter" href="#home2">
                Dashboards
              </a>
            </p>
            <p>
              <a className="textoFooter" href="#home3">
                Procure ajuda
              </a>
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
          </div>
          <div className="col">
            <h3>Informação</h3>
            <p>
              <a className="textoFooter" href="#leia-mais">
                Leia mais
              </a>
            </p>
            <p>
              <a className="textoFooter" href="#home">
                Home
              </a>
            </p>
            <p>
              <a className="textoFooter" href="#contatar">
                Contatar
              </a>
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
                Kauany
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Gabriel
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Marcos
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Jeferson
              </span>
            </p>
            <p>
              <span className="textoFooter">
                Julia
              </span>
            </p>
          </div>
          <form>
            <h3>Redes sociais</h3>
            <input type="email" placeholder="Envie um e_mail" />
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
