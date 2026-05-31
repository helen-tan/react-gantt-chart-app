import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './contexts/themeContext/provider';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { GanttProvider } from './contexts/gantt/provider';
import { RightDrawerProvider } from './contexts/rightDrawer/provider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeContextProvider>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <GanttProvider>
            <RightDrawerProvider>
              <App />
            </RightDrawerProvider>
          </GanttProvider>
        </LocalizationProvider>
      </ThemeContextProvider>
    </React.StrictMode>,
  );
}
