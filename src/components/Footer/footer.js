import React from "react";
import { GiHighPunch } from "react-icons/gi";
import { Link } from "react-router-dom";
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
            <GiHighPunch className="icon" />
            <h2>VIOLENCIA</h2>
          </div>
        
        </div>
        <div className="col-container">
          <div className="col">
            <h3>Navegação</h3>

            <p>
              <Link className="textoFooter" to="/home">
                Home
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/feed">
                Home2
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/apimapa">
                Home3
              </Link>
            </p>
            
          </div>
          <div className="col">
            <h3>ajuda</h3>
          
            <p>
              <Link className="textoFooter" to="/perfil">
                Configurações{" "}
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/perfil">
                Ajuda
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/perfil">
                Termos
              </Link>
            </p>
          </div>
          <div className="col">
            <h3>Informação</h3>
           
            <p>
              <Link className="textoFooter" to="/home">
                Leia mais
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/home">
                Home
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/home3">
                Contatar
              </Link>
            </p>
          </div>
          <div className="col">
            <h3>Créditos</h3>
           
            <p>
              <Link className="textoFooter" to="/perfil">
                Gustavo Silles
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/perfil">
                Kauany
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/perfil">
                Gabriel
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/perfil">
                Marcos
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/perfil">
                Jeferson
              </Link>
            </p>
            <p>
              <Link className="textoFooter" to="/perfil">
                Julia
              </Link>
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
