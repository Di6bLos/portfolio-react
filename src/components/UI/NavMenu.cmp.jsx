import { useState, useEffect } from "react";
import "./NavMenu.cmp.scss";
import { NavLink } from "react-router-dom";

function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=> {

  },[])
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className="menu-toggle" onClick={toggleMenu}>Menu</div>

      <nav className={`menu-container  ${menuOpen? "open" : "closed"}` }>
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
