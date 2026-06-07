import { useEffect } from 'react';
import { useRightDrawer } from '../../contexts/rightDrawer/context';
import TaskEditorForm from '../forms/taskEditorForm/TaskEditorForm';
import { addGanttEventListener } from './eventBus';
import { RightDrawerSizes } from '../../contexts/rightDrawer/config';
import { GanttEvent } from './ganttEvents';

export default function GanttEventBridge() {
  const { openDrawer } = useRightDrawer();

  useEffect(() => {
    const removeAllListeners = [
      registerTaskDoubleClickListener(),
      // others..
    ];

    return () => {
      removeAllListeners.forEach((r) => r());
    };
  }, [openDrawer]);

  const registerTaskDoubleClickListener = () => {
    return addGanttEventListener(GanttEvent.ON_TASK_DOUBLE_CLICK, ({ taskId }) => {
      openDrawer(<TaskEditorForm mode="edit" existingTaskId={taskId} />, RightDrawerSizes.M);
    });
  };

  return null;
}
