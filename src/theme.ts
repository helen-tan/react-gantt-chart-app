import { createTheme } from '@mui/material/styles';
import { ThemeModes } from './types/theme.model';

// ------------------------------
// --       LIGHT THEME        --
// ------------------------------
export const lightTheme = createTheme({
  palette: {
    mode: ThemeModes.LIGHT,
    primary: {
      main: '#635ffa',
      light: '#7f6aff',
      dark: '#4e4bcf',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff6c6c',
      light: '#ff8c8c',
      dark: '#e65555',
      contrastText: '#fff',
    },
    info: {
      main: '#2f80ed',
    },
    success: {
      main: '#27ae60',
    },
    warning: {
      main: '#f2c94c',
    },
    error: {
      main: '#eb5757',
    },
    background: {
      default: '#f8faff',
      paper: '#ffffff',
    },
    text: {
      primary: '#121212',
      secondary: '#4b4b4b',
    },
  },
});

// ------------------------------
// --       DARK THEME         --
// ------------------------------
export const darkTheme = createTheme({
  palette: {
    mode: ThemeModes.DARK,
    primary: {
      main: '#8c7bff',
      light: '#a28fff',
      dark: '#6b68d9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff8a80',
      light: '#ff9b97',
      dark: '#e57778',
      contrastText: '#fff',
    },
    info: {
      main: '#47a3ff',
    },
    success: {
      main: '#66d17e',
    },
    warning: {
      main: '#f2c94c',
    },
    error: {
      main: '#ff6b6b',
    },
    background: {
      default: '#2b2c2e',
      paper: '#1a1e40',
    },
    text: {
      primary: '#ffffff',
      secondary: '#c5c5c5',
    },
  },
});
