import { useContext } from 'react';
import { Button } from '@mui/material';
import { ThemeContext } from './contexts/themeContext/ThemeContext';

export default function ThemeToggleButton() {
  const { toggleThemeMode } = useContext(ThemeContext);

  return (
    <Button variant="contained" sx={{ mt: 2 }} onClick={toggleThemeMode}>
      Toggle Theme
    </Button>
  );
}
