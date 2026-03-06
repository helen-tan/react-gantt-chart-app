import { Gantt, Willow, WillowDark } from '@svar-ui/react-gantt';
import '@svar-ui/react-gantt/all.css';
import { useContext, useMemo } from 'react';
import { ThemeContext } from '../../contexts/themeContext/ThemeContext';
import { ThemeModes } from '../../types/theme.model';
import { Box } from '@mui/material';
import { useGanttState } from './hooks/useGanttState';
import './GanttChart.module.css';

export default function GanttChart() {
  const { mode } = useContext(ThemeContext);
  const { state } = useGanttState();

  const renderLightTheme = useMemo(
    () => (
      <Willow>
        <Gantt tasks={state.tasks} links={state.links} scales={state.scales} />
      </Willow>
    ),
    [],
  );

  const renderDarkTheme = useMemo(
    () => (
      <WillowDark>
        <Gantt tasks={state.tasks} links={state.links} scales={state.scales} />
      </WillowDark>
    ),
    [],
  );

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      {mode === ThemeModes.LIGHT ? renderLightTheme : renderDarkTheme}
    </Box>
  );
}
