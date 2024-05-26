import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";
import "./navbarStyles.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
 
  
  return (
    <div name="top">
      <div className="navbar">
      
        <div className="logo">
          <h1 className="textlogo">violencia</h1>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link className="l1" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="l2" to="/home1">
              Home2
            </Link>
          </li>
          <li>
            <Link className="l3" to="/home3">
              Home3
            </Link>
          </li>
    
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
