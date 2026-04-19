import { Box } from '@mui/material';
import Toolbar from './features/toolbar/Toolbar';
import GanttChart from './features/ganttChart/GanttChart';

export default function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '1rem',
      }}
    >
      <Toolbar />
      <GanttChart />
    </Box>
  );
}
