import { useContext, useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import SunnyIcon from '@mui/icons-material/Sunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { ThemeModes, type ThemeMode } from './types/theme.model';
import { ThemeContext } from './contexts/themeContext/ThemeContext';
import { darkTheme, lightTheme } from './theme';

export default function ThemeToggleButton() {
  const [mode, setMode] = useState<ThemeMode>(ThemeModes.LIGHT);
  const { toggleThemeMode } = useContext(ThemeContext);

  const themeOptions = [
    {
      value: ThemeModes.LIGHT,
      label: 'Light',
      icon: <SunnyIcon fontSize="small" sx={{ mr: 1, color: lightTheme.palette.primary.light }} />,
    },
    {
      value: ThemeModes.DARK,
      label: 'Dark',
      icon: (
        <NightlightRoundIcon
          fontSize="small"
          sx={{ mr: 1, color: darkTheme.palette.primary.dark }}
        />
      ),
    },
  ];

  const handleThemeChange = (e: { target: { value: string } }) => {
    const newMode = e.target.value as ThemeMode;
    setMode(newMode);
    toggleThemeMode(newMode);
  };

  return (
    <>
      <Box sx={{ minWidth: 200 }}>
        <FormControl
          fullWidth
          size="small"
          variant="outlined"
          sx={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}
        >
          <InputLabel shrink={false} sx={{ position: 'relative', transform: 'none' }}>
            Theme
          </InputLabel>
          <Select value={mode} sx={{ flexGrow: 1 }} onChange={handleThemeChange}>
            {themeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {option.icon}
                  <Typography>{option.label}</Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
