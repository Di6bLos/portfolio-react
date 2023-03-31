
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/Theme.context";

import { Link } from "react-router-dom";

import "./Header.cmp.scss";

// Adds scroll effect, header will hide when scrolling down, and pop back up when scrolled up.

  
const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    

  return (
    <header id="navbar" className="header">
      <div className="logo-container"><img src="https://via.placeholder.com/50" alt="" /></div>
      <nav>
        <ul className="nav-menu">
          <li>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>{" "}
          <li>
            <Link to={"about"} className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to={"my-work"} className="nav-link">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to={"contact"} className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle">{theme}</button>

    </header>
  );
};

export default Header;
