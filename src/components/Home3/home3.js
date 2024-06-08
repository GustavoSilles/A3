import "./home3Styles.css";
import React from 'react';


const Home3 = () => {



  return (
    <div className="home3">
      <div className="container">
        <div className="ajuda">
          <h1 className="tituloajuda">Procure Ajuda</h1>

          <p>Ligue para:</p>
          <div className="box1">
            <p className="pe">Central de Atendimento à Mulher - Ligue 180<br></br>
              Ouvidoria Nacional dos Direitos Humanos - 100<br></br>
              Polícia Militar - Ligue 190<br></br>
              Disque Denúncia - 181<br></br>
              Centro de Valorização da Vida (CVV) - 188<br></br>
              Serviço de Atendimento Móvel de Urgência (SAMU) - 192</p>
          </div>
          <p>Vá para:</p>
          <div className="box2">
            <p className="pe">Hospitais e Unidades de Saúde<br></br>
              Delegacias Especializadas de Atendimento à Mulher (DEAM)<br></br>
              Centros de Referência de Assistência Social (CRAS)<br></br>
              Centros de Referência Especializados de Assistência Social (CREAS)<br></br>
              Centros de Referência e Apoio à Mulher (CRAM)<br></br>
              Centros de Defesa dos Direitos Humanos (CDDH)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3;
