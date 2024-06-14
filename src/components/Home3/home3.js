import "./home3Styles.css";
import React from 'react';
import { BiHomeHeart } from "react-icons/bi";
import { PiPhoneCall } from "react-icons/pi";
const Home3 = () => {



  return (
    <div className="home3">
    
        <div className="ajuda">
          <h1 className="tituloajuda">Procure Ajuda</h1>
          <div className="deitado">
          <div className="caraiu">
              <p className="tituluzinho">Ligue para:</p>
            <div className="empe">
              <div className="box1">
                <div className="aaa">
                  <PiPhoneCall className="icon3" />
                </div>
                <p className="pe1">Central de Atendimento à Mulher - Ligue 180<br></br>
                  Ouvidoria Nacional dos Direitos Humanos - 100<br></br>
                  Polícia Militar - Ligue 190<br></br>
                  Disque Denúncia - 181<br></br>
                  Centro de Valorização da Vida (CVV) - 188<br></br>
                  Serviço de Atendimento Móvel de Urgência (SAMU) - 192</p>
              </div>
            </div>
            </div>
            <div className="caraiu">
              <p className="tituluzinho">Vá para:</p>
            <div className="empe">
              <div className="box2">
                <div className="aaa">
                  <BiHomeHeart className="icon3" />
                </div>
                <p className="pe2">Hospitais e Unidades de Saúde<br></br>
                  Delegacias Especializadas de Atendimento à Mulher (DEAM)<br></br>
                  Centros de Referência de Assistência Social (CRAS)<br></br>
                  Centros de Referência Especializados de Assistência Social (CREAS)<br></br>
                  Centros de Referência e Apoio à Mulher (CRAM)<br></br>
                  Centros de Defesa dos Direitos Humanos (CDDH)</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Home3;
