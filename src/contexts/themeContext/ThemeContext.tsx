import { createContext } from "react";

export interface ThemeContextType {
    toggleThemeMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    toggleThemeMode: () => {}
});