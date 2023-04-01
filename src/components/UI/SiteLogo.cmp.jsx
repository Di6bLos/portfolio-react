import { useContext } from "react";
import { ThemeContext } from "../../context/Theme.context";

const SiteLogo = ({width}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <svg
      className="logo-viewBox"
      width={width? width : "50"}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="10,62.5 47,25 47,100"
        fill={theme === "light" ? "var(--dark-bg)" : "var(--light-bg)"}
      />
      <polygon
        points="90,37.5 53,0 53,75"
        fill={theme === "light" ? "var(--dark-bg)" : "var(--light-bg)"}
      />
    </svg>
  );
};

export default SiteLogo;
