import { createContext } from 'react';
import type { PokemonTheme } from '../types/theme';

export interface ThemeContextType {
    currentTheme: PokemonTheme;
    setTheme: (themeId: string) => void;
    themes: PokemonTheme[];
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
