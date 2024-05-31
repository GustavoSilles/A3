import "./home2Styles.css";
import React from 'react';


const PowerBIReport = () => {
  
  const embedUrl = "https://app.powerbi.com/view?r=eyJrIjoiMjgzYzliZGMtZWI2Yi00MWVhLTlmZjEtNWI1MGRhNTE5OTdmIiwidCI6IjEzNDllMzA2LWU2MGItNGU5OS04NGJiLWQyOTAyMTkzMTBkOSJ9";

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
