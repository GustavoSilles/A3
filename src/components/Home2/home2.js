import "./home2Styles.css";
import React from 'react';


const Home2 = () => {

  const embedUrl = "https://app.powerbi.com/view?r=eyJrIjoiMjgzYzliZGMtZWI2Yi00MWVhLTlmZjEtNWI1MGRhNTE5OTdmIiwidCI6IjEzNDllMzA2LWU2MGItNGU5OS04NGJiLWQyOTAyMTkzMTBkOSJ9";

  return (
    <div className="home2">
      <div className="container">
        <div className="painel">
          <iframe className="iframe"
              title="Power BI Report"
              src={embedUrl}
              allowFullScreen={true}
          ></iframe> 
          </div>
      </div>
    </div>
  
  );
};

export default Home2;
