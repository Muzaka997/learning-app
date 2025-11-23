import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme.styles";
import type { ThemeType } from "./Theme.styles";
import type { ReactNode } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

// Only declare context here but DON'T export it in this file
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider
        theme={darkMode ? (darkTheme as ThemeType) : (lightTheme as ThemeType)}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext; // optional if needed, but Fast Refresh still works
