import type { IApi } from '@svar-ui/react-gantt';
import CreateTaskForm from '../forms/createTaskForm/CreateTaskForm';
import { RightDrawerSizes, type RightDrawerSize } from '../../contexts/rightDrawer/config';

type RegisterGanttEventsDeps = {
  openDrawer: (content: React.ReactNode, size?: RightDrawerSize) => void;
};

export function registerGanttEvents(ganttApi: IApi, dependencies: RegisterGanttEventsDeps) {
  if (!ganttApi) return;

  const { openDrawer } = dependencies;

  // -------- Mouse Event Handlers --------
  const handleTaskDoubleClick = () => {
    openDrawer(<CreateTaskForm />, RightDrawerSizes.M);
    return false;
  };

  // -------- Detect Gantt Event --------
  ganttApi.on('show-editor', handleTaskDoubleClick);
}
