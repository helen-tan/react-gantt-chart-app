import { Box } from '@mui/material';
import GanttView from './features/ganttChart/GanttView';
import Toolbar from './features/toolbar/Toolbar';

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
      <GanttView />
    </Box>
  );
}
