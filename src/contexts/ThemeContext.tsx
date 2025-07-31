import React, { useState, useEffect } from "react";
import type { PokemonTheme } from "../types/theme";
import { themes } from "../types/theme";
import { ThemeContext } from "./context";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<PokemonTheme>(themes[0]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("pokemon-theme");
    if (savedTheme) {
      const theme = themes.find((t) => t.id === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  useEffect(() => {
    // Apply theme to CSS custom properties
    const root = document.documentElement;
    root.style.setProperty("--theme-primary", currentTheme.colors.primary);
    root.style.setProperty(
      "--theme-primary-light",
      currentTheme.colors.primaryLight
    );
    root.style.setProperty(
      "--theme-primary-dark",
      currentTheme.colors.primaryDark
    );
    root.style.setProperty("--theme-secondary", currentTheme.colors.secondary);
    root.style.setProperty("--theme-accent", currentTheme.colors.accent);
    root.style.setProperty("--theme-text", currentTheme.colors.text);

    // Apply background gradient to body
    document.body.style.background = currentTheme.colors.background;
  }, [currentTheme]);

  const setTheme = (themeId: string) => {
    const theme = themes.find((t) => t.id === themeId);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem("pokemon-theme", themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
