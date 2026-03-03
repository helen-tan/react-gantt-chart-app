import { createContext } from "react";
import { ThemeModes, type ThemeMode } from "../../types/theme.model";

export interface ThemeContextType {
    mode: ThemeMode;
    toggleThemeMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    mode: ThemeModes.LIGHT,
    toggleThemeMode: () => {}
});