import { createContext, useContext } from 'react';

export interface RightDrawerContextType {
  isOpen: boolean;
  openDrawer: (content: React.ReactNode) => void;
  closeDrawer: () => void;
}

export const RightDrawerContext = createContext<RightDrawerContextType | undefined>(undefined);

export const useRightDrawer = () => {
  const context = useContext(RightDrawerContext);
  if (!context) {
    throw new Error('useRightDrawer must be used within RightDrawerProvider.');
  }
  return context;
};
