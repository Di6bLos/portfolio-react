import { useContext } from "react";
import { ThemeContext } from "../context/Theme.context";

const HomePage = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className="main">
            <h1>Hello </h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <span>{theme}</span>
        </div>
    )
}

export default HomePage;