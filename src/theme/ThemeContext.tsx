import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme.styles";
import type { ThemeType } from "./Theme.styles";
import type { ReactNode } from "react";

interface ThemeContextType {
  darkmode: boolean;
  toggleTheme: () => void;
}

// Only declare context here but DON'T export it in this file
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const LOCAL_KEY = "app:theme"; // stores "dark" | "light"

function getInitialDarkMode(): boolean {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(LOCAL_KEY);
    if (stored === "dark") return true;
    if (stored === "light") return false;

    // fallback to system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return true;
    }
  }

  return false;
}

export const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  const [darkmode, setDarkmode] = useState<boolean>(getInitialDarkMode);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, darkmode ? "dark" : "light");
  }, [darkmode]);

  const toggleTheme = () => setDarkmode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkmode, toggleTheme }}>
      <ThemeProvider
        theme={darkmode ? (darkTheme as ThemeType) : (lightTheme as ThemeType)}
      >
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext; // optional if needed, but Fast Refresh still works
