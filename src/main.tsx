import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeContextProvider } from './contexts/themeContext/ThemeContextProvider.tsx';
import { RightDrawerProvider } from './contexts/rightDrawer/RightDrawerProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <RightDrawerProvider>
        <App />
      </RightDrawerProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
