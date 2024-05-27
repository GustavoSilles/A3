import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
            <a className="l1" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="l2" href="#home2">
              Home2
            </a>
          </li>
          <li>
            <a className="l3" href="#home3">
              Home3
            </a>
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