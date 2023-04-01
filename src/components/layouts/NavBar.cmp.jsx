
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/Theme.context";
import { Link } from "react-router-dom";
import SiteLogo from "../UI/SiteLogo.cmp";

import "./NavBar.cmp.scss";

// Adds scroll effect, header will hide when scrolling down, and pop back up when scrolled up.

  
const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    

  return (
    <header id="navbar">
      <div className="navbar-container">
        <SiteLogo />
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
              <Link to={"projects"} className="nav-link">
                Projects
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
      </div>

    </header>
  );
};

export default Header;
