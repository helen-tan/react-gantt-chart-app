import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeContextProvider } from './contexts/themeContext/provider.tsx';
import { RightDrawerProvider } from './contexts/rightDrawer/provider.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { GanttProvider } from './contexts/gantt/provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <GanttProvider>
          <RightDrawerProvider>
            <App />
          </RightDrawerProvider>
        </GanttProvider>
      </LocalizationProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
