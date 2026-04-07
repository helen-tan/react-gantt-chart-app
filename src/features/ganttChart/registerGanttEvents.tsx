import type { IApi, TID } from '@svar-ui/react-gantt';
import TaskEditorForm from '../forms/taskEditorForm/TaskEditorForm';
import { RightDrawerSizes, type RightDrawerSize } from '../../contexts/rightDrawer/config';

type RegisterGanttEventsDeps = {
  openDrawer: (content: React.ReactNode, size?: RightDrawerSize) => void;
};

export function registerGanttEvents(ganttApi: IApi, dependencies: RegisterGanttEventsDeps) {
  if (!ganttApi) return;

  const { openDrawer } = dependencies;

  // -------- Mouse Event Handlers --------
  const handleTaskDoubleClick = (task: { id: TID }) => {
    const taskId = task.id as string;

    openDrawer(<TaskEditorForm mode="edit" existingTaskId={taskId} />, RightDrawerSizes.M);
  };

  // -------- Detect Gantt Event --------
  ganttApi.on('show-editor', (task: { id: TID }) => handleTaskDoubleClick(task));
}
