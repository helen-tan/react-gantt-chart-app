import type { AppTaskType } from "../../../contexts/gantt/types";

export const TaskEditorFormFields = {
  TITLE: "title",
  START: "start",
  END: "end",
  TYPE: "type",
} as const;

// export type TaskEditorFormFields = {
//   [TaskEditorFormields.TITLE]: string;
//   [TaskEditorFormields.START]: number;
//   [TaskEditorFormields.END]: number;
//   [TaskEditorFormields.TYPE]: string;
// };

export type TaskEditorFormValues = {
  title: string;
  start: number;
  end: number;
  type: AppTaskType;
};

export type FormSelectOption<T extends string | number> = {
  value: T;
  label: string;
};

export const TASK_TYPE_OPTIONS: FormSelectOption<AppTaskType>[] = [
  { value: "task", label: "Task" },
  { value: "milestone", label: "Milstone" },
  { value: "summary", label: "Summary" },
];
