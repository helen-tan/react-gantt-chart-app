import { useState, type ReactNode } from 'react';
import { RightDrawerContext } from './RightDrawerContext';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import type { SxProps } from '@mui/material/styles';

type RightDrawerProviderProps = {
  children: React.ReactNode;
};

export function RightDrawerProvider({ children }: RightDrawerProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openDrawer = (drawerContent: ReactNode) => {
    setContent(drawerContent);
    setIsOpen(true);
  };
  const closeDrawer = () => setIsOpen(false);

  const rightDrawerStyles: SxProps = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: 400,
    height: '100vh',
    bgcolor: 'background.paper',
    boxShadow: 6,
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.3s ease',
    zIndex: 1000,
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: 16,
    left: -40, // sticks outside the drawer
    width: 40,
    height: 40,
    bgcolor: 'background.paper',
    borderTop: '1px solid rgba(0,0,0,0.2)',
    borderLeft: '1px solid rgba(0,0,0,0.2)',
    borderBottom: '1px solid rgba(0,0,0,0.2)',
    borderRight: 'none', // no border on the right
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  return (
    <RightDrawerContext.Provider
      value={{
        isOpen,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
      <Box sx={rightDrawerStyles}>
        {isOpen && (
          <Box sx={closeButtonStyles} onClick={closeDrawer}>
            <CloseIcon />
          </Box>
        )}
        {content}
      </Box>
    </RightDrawerContext.Provider>
  );
}
