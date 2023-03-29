import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: null,
    setTheme: ()=> null,
    
});

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => theme === "dark" ? setTheme("light") : setTheme("dark");


    const value= {theme, toggleTheme};

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};