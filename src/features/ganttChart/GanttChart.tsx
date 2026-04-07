import { Gantt, Willow, WillowDark, type IApi, type ITask } from '@svar-ui/react-gantt';
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
import { columns } from './GanttConfig';
import { useRightDrawer } from '../../contexts/rightDrawer/context';
import { registerGanttEvents } from './registerGanttEvents';

export default function GanttChart() {
  const { mode } = useContext(ThemeContext);
  const { state, setGanttApi } = useGanttContext();

  const { openDrawer } = useRightDrawer();

  const tasks = mapToSVARGanttTasks(state.tasks);
  const links = maptoSVARGanttLinks(state.links);
  const scales = maptoSVARGanttScales(state.scales);

  const init = useCallback((ganttApiInstance: IApi) => {
    setGanttApi(ganttApiInstance);
    registerGanttEvents(ganttApiInstance, { openDrawer });
  }, []);

  const renderLightTheme = useMemo(
    () => (
      <>
        <Willow>
          <Gantt init={init} tasks={tasks} links={links} scales={scales} columns={columns} />
        </Willow>
      </>
    ),
    [],
  );

  const renderDarkTheme = useMemo(
    () => (
      <WillowDark>
        <Gantt init={init} tasks={tasks} links={links} scales={scales} columns={columns} />
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
