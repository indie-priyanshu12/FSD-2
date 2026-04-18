import React, { createContext, useState } from "react";
export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(0);

    const toggleDarkMode = () => {
        setDarkMode((prev) => (prev === 0 ? 1 : 0));
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
