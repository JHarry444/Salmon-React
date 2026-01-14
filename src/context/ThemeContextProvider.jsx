import { useState } from "react";
import { ThemeContext } from "./context";

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("dark");


    const toggle = () => setTheme(theme === "dark" ? "light" : "dark");
    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>

    );
}

export default ThemeContextProvider;