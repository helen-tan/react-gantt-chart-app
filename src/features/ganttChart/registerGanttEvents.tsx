import type { IApi, TID } from "@svar-ui/react-gantt";
import { emitGanttEvent } from "../events/eventBus";
import { GanttEvent } from "../events/ganttEvents";

export function registerGanttEvents(ganttApi: IApi) {
  if (!ganttApi) return;

  // -------- Mouse Event Handlers --------
  const handleTaskDoubleClick = (task: { id: TID }) => {
    const taskId = task.id as string;

    // Emit Gantt event to be handled by GanttEventBridge
    emitGanttEvent(GanttEvent.ON_TASK_DOUBLE_CLICK, {
      taskId,
    });
  };

  // -------- Detect Gantt Event --------
  ganttApi.on("show-editor", (task: { id: TID }) =>
    handleTaskDoubleClick(task),
  );
}
