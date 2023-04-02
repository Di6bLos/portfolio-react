import { useEffect, useState } from "react";
import "./NavMenu.cmp.scss";
import { NavLink } from "react-router-dom";

function NavMenu() {
    const [windowView, setWindowView] = useState('');
    
    useEffect(() => {
        const currentWindowWidth = window.innerWidth;
      if(currentWindowWidth < 768) setWindowView("mobile")
      else return;

  }, []);

  return (
    <>
      <div className="menu-toggle">Menu</div>
      <nav className={`"menu-container" ${windowView}`}>
        <ul className="nav-menu">
          <li>
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"about"} className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"projects"} className="nav-link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to={"contact"} className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavMenu;
