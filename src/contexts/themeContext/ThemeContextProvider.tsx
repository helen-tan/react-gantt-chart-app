import { useMemo, useState, type ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '../../theme';
import { ThemeContext } from './ThemeContext';
import { ThemeModes, type ThemeMode } from '../../types/theme.model';

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(ThemeModes.LIGHT);

  const toggleThemeMode = () =>
    setMode((prev) => (prev === ThemeModes.LIGHT ? ThemeModes.DARK : ThemeModes.LIGHT));

  const theme = useMemo(() => (mode === ThemeModes.LIGHT ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleThemeMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
