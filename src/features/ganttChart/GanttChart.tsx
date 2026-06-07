import React from 'react';
import { Gantt, Tooltip, Willow, WillowDark, type IApi } from '@svar-ui/react-gantt';
import '@svar-ui/react-gantt/all.css';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../../contexts/themeContext/context';
import { ThemeModes, type ThemeMode } from '../../types/theme.model';
import Box from '@mui/material/Box';
import './GanttChart.module.css';
import {
  mapToSVARGanttLinks,
  mapToSVARGanttTasks,
} from '../../contexts/gantt/utils/mapToSVARGantt';
import { useGanttContext } from '../../contexts/gantt/context';
import { columns, scales } from './GanttConfig';
import { registerGanttEvents } from './registerGanttEvents';
import TaskTooltip, { type GanttTooltipData } from './TaskTooltip';

function GanttChart() {
  const [theme, setTheme] = useState<ThemeMode>(ThemeModes.LIGHT);
  const { mode: themeMode } = useContext(ThemeContext);
  const { state, ganttApi, setGanttApi } = useGanttContext();

  useEffect(() => {
    setTheme(themeMode);
  }, [themeMode]);

  const skins: { id: ThemeMode; label: string; component: React.FC }[] = [
    { id: 'light', label: 'willow', component: Willow },
    { id: 'dark', label: 'willow-dark', component: WillowDark },
  ];

  const ThemeComponent = skins.find((s) => s.id === theme)?.component ?? Willow;

  const tasks = useMemo(() => mapToSVARGanttTasks(state.tasks), [state.tasks]);
  const links = useMemo(() => mapToSVARGanttLinks(state.links), [state.links]);

  const init = useCallback(
    (ganttApiInstance: IApi) => {
      setGanttApi(ganttApiInstance);
      registerGanttEvents(ganttApiInstance);
    },
    [setGanttApi],
  );

  const renderTooltip = useCallback(({ data }: GanttTooltipData) => {
    return data ? <TaskTooltip data={data} /> : null;
  }, []);

  return (
    <Box sx={{ flex: 1, minHeight: 0, width: '100%' }}>
      <ThemeComponent>
        <Tooltip api={ganttApi} content={(data) => renderTooltip(data)}>
          <Gantt init={init} tasks={tasks} links={links} scales={scales} columns={columns} />
        </Tooltip>
      </ThemeComponent>
    </Box>
  );
}

export default React.memo(GanttChart); // React to skip rerender if component recieves stable props
