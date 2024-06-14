import React from "react";
import {
  FiMail,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { Link } from "react-scroll";
import "./footerStyles.css";

const Footer = ({ openModal }) => {
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
              <Link to="home" smooth={true} duration={200} className="textoFooter">
                Introdução
              </Link>
            </p>
            <p>
              <Link to="home2" smooth={true} duration={200} className="textoFooter">
                Dashboards
              </Link>
            </p>
            <p>
              <Link to="home3" smooth={true} duration={200} className="textoFooter">
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
              <span className="textoFooter" onClick={openModal} style={{ cursor: 'pointer' }}>
                Leia mais
              </span>
            </p>
            <p>
              <Link to="home" smooth={true} duration={200} className="textoFooter">
                Home
              </Link>
            </p>
            <p>
              <Link to="contact" smooth={true} duration={200} className="textoFooter">
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
