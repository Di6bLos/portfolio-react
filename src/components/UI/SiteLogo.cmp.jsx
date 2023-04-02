import { useContext } from "react";
import { ThemeContext } from "../../context/Theme.context";
import { Link } from "react-router-dom";

const SiteLogo = ({ width }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link to={'/'}>
        <svg
          className="logo-viewBox"
          width={width ? width : "50"}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="10,65 47,27.5 47,100"
            fill={theme === "light" ? "var(--dark-bg)" : "var(--light-bg)"}
          />
          <polygon
            points="90,35 53,0 53,72.5"
            fill={theme === "light" ? "var(--dark-bg)" : "var(--light-bg)"}
          />
        </svg>
    </Link>
  );
};

export default SiteLogo;
