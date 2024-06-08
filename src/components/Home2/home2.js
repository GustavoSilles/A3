import "./home2Styles.css";
import React from 'react';


const Home2 = () => {

  const embedUrl = "https://app.powerbi.com/view?r=eyJrIjoiOWU2MzQ0ZTEtNWI0OS00YmUzLTk3OWUtZWYwZDVlMmE4ODc1IiwidCI6IjEzNDllMzA2LWU2MGItNGU5OS04NGJiLWQyOTAyMTkzMTBkOSJ9";

  return (
    <div className="home2">
      <div className="container">
      
        <div className="painel">
        <h1 className="titulodash">Dashboards Informativos</h1>
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



