import { Gantt, Willow, WillowDark } from '@svar-ui/react-gantt';
import '@svar-ui/react-gantt/all.css';
import { useContext, useMemo } from 'react';
import { ThemeContext } from '../../contexts/themeContext/ThemeContext';
import { ThemeModes } from '../../types/theme.model';
import { Box } from '@mui/material';
import { useGanttState } from './hooks/useGanttState';
import './GanttChart.module.css';
import {
  maptoSVARGanttLinks,
  maptoSVARGanttScales,
  mapToSVARGanttTasks,
} from './utils/mapToSVARGantt';

export default function GanttChart() {
  const { mode } = useContext(ThemeContext);
  const { state } = useGanttState();

  const tasks = useMemo(() => mapToSVARGanttTasks(state.tasks), []);
  const links = useMemo(() => maptoSVARGanttLinks(state.links), []);
  const scales = useMemo(() => maptoSVARGanttScales(state.scales), []);

  const renderLightTheme = useMemo(
    () => (
      <Willow>
        <Gantt tasks={tasks} links={links} scales={scales} />
      </Willow>
    ),
    [],
  );

  const renderDarkTheme = useMemo(
    () => (
      <WillowDark>
        <Gantt tasks={tasks} links={links} scales={scales} />
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
