export const GanttEvent = {
  ON_TASK_DOUBLE_CLICK: 'ON_TASK_DOUBLE_CLICK',
} as const;

export type GanttEvent = (typeof GanttEvent)[keyof typeof GanttEvent];
