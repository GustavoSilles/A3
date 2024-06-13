import React, { useState, useEffect } from 'react';
import "./home2Styles.css";

const Home2 = () => {
  const [loading, setLoading] = useState(true);

  const embedUrl = "https://app.powerbi.com/view?r=eyJrIjoiOWU2MzQ0ZTEtNWI0OS00YmUzLTk3OWUtZWYwZDVlMmE4ODc1IiwidCI6IjEzNDllMzA2LWU2MGItNGU5OS04NGJiLWQyOTAyMTkzMTBkOSJ9";

  useEffect(() => {
    const iframe = document.getElementById("powerBIFrame");
    iframe.onload = () => setLoading(false);
  }, []);

  return (
    <div className="home2">
      <div className="container">
        <div className="painel">
          <h1 className="titulodash">Dashboards Informativos</h1>
          {loading && <div className="loading">Carregando...</div>}
          <iframe
            id="powerBIFrame"
            className="iframe"
            title="Power BI Report"
            src={embedUrl}
            style={{ display: loading ? "none" : "block" }}
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home2;
