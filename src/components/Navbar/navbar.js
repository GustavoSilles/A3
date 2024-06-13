import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbarStyles.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
 

  const toggleNav = () => setNav(!nav);

 
  return (
    <div name="top">
      <div className="navbar">
        <div className="logo" onClick={() => window.scrollTo({ top: 0 })}>
          <h1 className="textlogo">InfoViolência</h1>
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="l1" to="/" onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById("/home");
                  if (element) {
                    element.scrollIntoView();
                    
                  }
                }); toggleNav()
              }}>
              introdução
            </Link>
          </li>
          <li>
            <Link className="l2" to="/" onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById("/home2");
                  if (element) {
                    element.scrollIntoView();
                  }
                }); toggleNav()
              }}>
              Dashboards
            </Link>
          </li>
          <li>
            <Link className="l3" to="/" onClick={() => {
                setTimeout(() => {
                  const element = document.getElementById("/home3");
                  if (element) {
                    element.scrollIntoView();
                  }
                }); toggleNav()
              }}>
              Procure ajuda
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleNav}>
          {nav ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
