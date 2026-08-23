import React from 'react';
import { Gantt, Tooltip, type IApi } from '@svar-ui/react-gantt';
import { useCallback, useContext, useMemo } from 'react';
import { ThemeContext } from '../../contexts/themeContext/context';
import Box from '@mui/material/Box';
import {
  mapToSVARGanttLinks,
  mapToSVARGanttTasks,
} from '../../contexts/gantt/utils/mapToSVARGantt';
import { useGanttContext } from '../../contexts/gantt/context';
import { columns, scales } from './GanttConfig';
import { registerGanttEvents } from './registerGanttEvents';
// import TaskTooltip from './TaskTooltip';
import '@svar-ui/react-gantt/all.css';
import './GanttChart.module.css';
// import type { TooltipContentData } from '../../types/gantt.model';
import MyTooltipContent from './MyTooltipContent';

function GanttChart() {
  const { mode: theme } = useContext(ThemeContext);
  const { state, ganttApi, setGanttApi } = useGanttContext();

  const tasks = useMemo(() => mapToSVARGanttTasks(state.tasks), [state.tasks]);
  const links = useMemo(() => mapToSVARGanttLinks(state.links), [state.links]);

  const init = useCallback(
    (ganttApiInstance: IApi) => {
      setGanttApi(ganttApiInstance);
      registerGanttEvents(ganttApiInstance);
    },
    [setGanttApi],
  );

  // const renderTooltip = useCallback(({ data }: GanttTooltipData) => {
  //   return data ? <TaskTooltip data={data} /> : null;
  // }, []);

  // const renderTooltip = useCallback(({ data }: { api: IApi; data: TooltipContentData }) => {
  //   return data ? <TaskTooltip data={data} /> : null;
  // }, []);

  return (
    // <Box sx={{ flex: 1, minHeight: 0, width: '100%' }}>
    //   <ThemeComponent>
    //     <Tooltip api={ganttApi} content={(i) => renderTooltip(i)}>
    //       <Gantt init={init} tasks={tasks} links={links} scales={scales} columns={columns} />
    //     </Tooltip>
    //   </ThemeComponent>
    // </Box>

    <Box
      sx={{ flex: 1, minHeight: 0, width: '100%' }}
      className={`wx-theme ${theme === 'dark' ? 'wx-willow-dark-theme' : 'wx-willow-theme'}`}
    >
      <Tooltip api={ganttApi} content={MyTooltipContent}>
        <Gantt init={init} tasks={tasks} links={links} scales={scales} columns={columns} />
      </Tooltip>
    </Box>
  );
}

export default React.memo(GanttChart); // React to skip rerender if component recieves stable props
