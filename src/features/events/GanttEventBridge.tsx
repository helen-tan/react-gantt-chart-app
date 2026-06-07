import { useEffect, useCallback } from 'react';
import { useRightDrawer } from '../../contexts/rightDrawer/context';
import TaskEditorForm from '../forms/taskEditorForm/TaskEditorForm';
import { addGanttEventListener } from './eventBus';
import { RightDrawerSizes } from '../../contexts/rightDrawer/config';
import { GanttEvent } from './ganttEvents';

export default function GanttEventBridge() {
  const { openDrawer } = useRightDrawer();

  const registerTaskDoubleClickListener = useCallback(
    () =>
      addGanttEventListener(GanttEvent.ON_TASK_DOUBLE_CLICK, ({ taskId }) => {
        openDrawer(<TaskEditorForm mode="edit" existingTaskId={taskId} />, RightDrawerSizes.M);
      }),
    [openDrawer],
  );

  useEffect(() => {
    const removeAllListeners = [
      registerTaskDoubleClickListener(),
      // others..
    ];

    return () => {
      removeAllListeners.forEach((r) => r());
    };
  }, [openDrawer, registerTaskDoubleClickListener]);

  return null;
}
