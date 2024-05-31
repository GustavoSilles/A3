import "./home2Styles.css";
import React from 'react';


const PowerBIReport = () => {
  
  const embedUrl = "https://app.powerbi.com/reportEmbed?reportId=4c4d7ea9-71ef-4510-ba90-4aafa579b341&autoAuth=true&ctid=1349e306-e60b-4e99-84bb-d290219310d9";

  return (
      <div style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h1>Dashboards Informativos:</h1>
          <iframe
              title="Power BI Report"
              width="400%"
              height="700px"
              src={embedUrl}
              frameBorder="5"
              allowFullScreen={true}
              style={{ border: 'none' }}
          ></iframe>
      </div>
  );
};

const Home2 = () => {
  return (
    <div className="home2">
      <div className="container">
        <PowerBIReport /> 
      </div>
    </div>
  
  );
};

export default Home2;
