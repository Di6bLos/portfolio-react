
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/Theme.context";
import { NavLink } from "react-router-dom";
import SiteLogo from "../UI/SiteLogo.cmp";
import NavMenu from "../UI/NavMenu.cmp";

import "./NavBar.cmp.scss";

// Adds scroll effect, header will hide when scrolling down, and pop back up when scrolled up.

  
export default function NavBar() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    

  return (
    <header id="navbar">
      <div className="navbar-container">
        <SiteLogo />
        <NavMenu />
        <button onClick={toggleTheme} className="theme-toggle">{theme}</button>
      </div>

    </header>
  );
};


