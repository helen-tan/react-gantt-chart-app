import { Box } from "@mui/material";
import GanttView from "./features/GanttView";
import GanttToolbar from "./features/GanttToolbar";

export default function App() {
  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center",
      height: "100vh",
      padding: "1rem"
    }}>
      <GanttToolbar />
      <GanttView />
    </Box>    
  );
}