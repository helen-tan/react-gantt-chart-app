import { useState, type ReactNode } from "react";
import { RightDrawerContext } from "./context";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import type { SxProps } from "@mui/material/styles";
import {
  RIGHT_DRAWER_SIZES,
  RightDrawerSizes,
  type RightDrawerSize,
} from "./config";

type RightDrawerProviderProps = {
  children: React.ReactNode;
};

export function RightDrawerProvider({ children }: RightDrawerProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  const [size, setSize] = useState<RightDrawerSize>(RightDrawerSizes.M); // default M size
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  const SLIDE_TRANSITION_TIME_MS = 300; // 300ms

  const openDrawer = (
    drawerContent: ReactNode,
    size: RightDrawerSize = RightDrawerSizes.M,
  ) => {
    setSize(size);
    setContent(drawerContent);
    setShouldRender(true); // mount immediately
    setIsOpen(true);
  };
  const closeDrawer = () => {
    setIsOpen(false);

    // wait for sliding out animation to complete before unmounting
    setTimeout(() => {
      setShouldRender(false);
    }, SLIDE_TRANSITION_TIME_MS);
  };

  const rightDrawerStyles: SxProps = {
    position: "fixed",
    top: 0,
    right: 0,
    width: RIGHT_DRAWER_SIZES[size],
    height: "100vh",
    bgcolor: "background.paper",
    boxShadow: 6,
    transform: isOpen ? "translateX(0)" : "translateX(100%)",
    transition: `transform ${SLIDE_TRANSITION_TIME_MS}ms ease`,
    zIndex: 1000,
  };

  const closeButtonStyles = {
    position: "absolute",
    top: 16,
    left: -40, // sticks outside the drawer
    width: 40,
    height: 40,
    bgcolor: "background.paper",
    borderTop: "1px solid rgba(0,0,0,0.2)",
    borderLeft: "1px solid rgba(0,0,0,0.2)",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    borderRight: "none", // no border on the right
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  return (
    <RightDrawerContext.Provider
      value={{
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
      <Box sx={rightDrawerStyles}>
        {shouldRender && (
          <>
            <Box sx={closeButtonStyles} onClick={closeDrawer}>
              <CloseIcon />
            </Box>
            {content}
          </>
        )}
      </Box>
    </RightDrawerContext.Provider>
  );
}
