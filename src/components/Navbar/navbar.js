import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./navbarStyles.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <div name="top">
      <div className="navbar">
        <div className="logo" onClick={() => window.scrollTo({top: 0})}>
          <h1 className="textlogo">InfoViolência</h1>
        </div>

        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={200}
              className="li"
              onClick={handleLinkClick}
            >
              introdução
            </Link>
          </li>
          <li>
            <Link
              to="home2"
              smooth={true}
              duration={200}
              className="li"
              onClick={handleLinkClick}
            >
              Dashboards
            </Link>
          </li>
          <li>
            <Link
              to="home3"
              smooth={true}
              duration={200}
              className="li"
              onClick={handleLinkClick}
            >
              Procure ajuda
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
