import { Gantt, Willow, WillowDark, type IApi } from '@svar-ui/react-gantt';
import '@svar-ui/react-gantt/all.css';
import { useCallback, useContext, useMemo } from 'react';
import { ThemeContext } from '../../contexts/themeContext/context';
import { ThemeModes } from '../../types/theme.model';
import Box from '@mui/material/Box';
import './GanttChart.module.css';
import {
  maptoSVARGanttLinks,
  maptoSVARGanttScales,
  mapToSVARGanttTasks,
} from '../../contexts/gantt/utils/mapToSVARGantt';
import { useGanttContext } from '../../contexts/gantt/context';

export default function GanttChart() {
  const { mode } = useContext(ThemeContext);
  const { state, setGanttApi } = useGanttContext();

  const tasks = useMemo(() => mapToSVARGanttTasks(state.tasks), [state.tasks]);
  const links = useMemo(() => maptoSVARGanttLinks(state.links), [state.links]);
  const scales = useMemo(() => maptoSVARGanttScales(state.scales), [state.scales]);

  const init = useCallback((ganttApiInstance: IApi) => {
    setGanttApi(ganttApiInstance);
  }, []);

  const renderLightTheme = useMemo(
    () => (
      <>
        <Willow>
          <Gantt init={init} tasks={tasks} links={links} scales={scales} />
        </Willow>
      </>
    ),
    [],
  );

  const renderDarkTheme = useMemo(
    () => (
      <WillowDark>
        <Gantt init={init} tasks={tasks} links={links} scales={scales} />
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
