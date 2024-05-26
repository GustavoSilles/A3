import "./home2Styles.css";
import * as pbi from 'powerbi-client';
import React, {useEffect, useRef} from 'react';
// import { Link } from "react-router-dom";

const PowerBIReport = () => {
  const reportRef = useRef(null);

  useEffect(() => {
      const embedReport = async () => {

        if (!reportRef.current) return;

          const accesToken = 'TOKEN QUE A KAUANY VAI GERAR';
          const embedUrl = 'URL QUE A KAUANY VAI GERAR';
          const embedConfig = {
              type: 'report',
              id: 'ID QUE A KAUANY VAI GERAR',
              embedUrl: embedUrl,
              accesToken: accesToken,
              tokenType: pbi.models.TokenType.Embed,
              settings: {
                  panes: {
                      filters: {
                          expanded: false,
                          visible: false,
                      },
                  },
              },
          };

          const powerbi = new pbi.service.Service(
              pbi.factories.hpmFactory, 
              pbi.factories.wpmpFactory, 
              pbi.factories.routerFactory
          );

          const report = powerbi.embed(
              reportRef.current, 
              embedConfig
          );
      };

      embedReport();
  }, [reportRef]);

  return null;
};

const Home2 = () => {

  const reportRef = useRef(null);

  return (
    <div className="home2">
      <div className="container">
        <div ref={reportRef} style={{height: '600px'}} />
        <PowerBIReport reportRef={reportRef} />
      </div>
    </div>
  
  );
};

export default Home2;
