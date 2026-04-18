import { Gantt, Tooltip, Willow, WillowDark, type IApi, type ITask } from '@svar-ui/react-gantt';
import '@svar-ui/react-gantt/all.css';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../../contexts/themeContext/context';
import { ThemeModes, type ThemeMode } from '../../types/theme.model';
import Box from '@mui/material/Box';
import './GanttChart.module.css';
import {
  mapToSVARGanttLinks,
  mapToSVARGanttScales,
  mapToSVARGanttTasks,
} from '../../contexts/gantt/utils/mapToSVARGantt';
import { useGanttContext } from '../../contexts/gantt/context';
import { columns } from './GanttConfig';
import { useRightDrawer } from '../../contexts/rightDrawer/context';
import { registerGanttEvents } from './registerGanttEvents';
import TaskTooltip, { type GanttTooltipData } from './TaskTooltip';

export default function GanttChart() {
  const [theme, setTheme] = useState<ThemeMode>(ThemeModes.LIGHT);
  const { mode: themeMode } = useContext(ThemeContext);
  const { state, setGanttApi, ganttApi } = useGanttContext();

  const { openDrawer } = useRightDrawer();

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
  const scales = useMemo(() => mapToSVARGanttScales(state.scales), [state.scales]);

  const init = useCallback((ganttApiInstance: IApi) => {
    setGanttApi(ganttApiInstance);
    registerGanttEvents(ganttApiInstance, { openDrawer });
  }, []);

  const renderTooltip = useCallback(
    (args: GanttTooltipData) => {
      return <TaskTooltip data={args.data} />;
    },
    [tasks, links, scales],
  );

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <ThemeComponent>
        <Tooltip api={ganttApi} content={(data) => renderTooltip(data)}>
          <Gantt init={init} tasks={tasks} links={links} scales={scales} columns={columns} />
        </Tooltip>
      </ThemeComponent>
    </Box>
  );
}
