import { Link } from "react-router-dom";

import "./Header.cmp.scss";

const Header = () => {
  return (
    <header>
      <div className="logo-container"></div>
      <nav>
        <ul>
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
    </header>
  );
};

export default Header;
