import React, { useEffect } from "react";
import "./leiamais.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

const LeiaMais = () => {

    useEffect(() => {
        window.scrollTo({top: 0});
      }, []);
    
  return (
    <>
      <Navbar />
      <div className="leiamais">
        <div className="container-mais">
          <div className="content-mais">
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default LeiaMais;