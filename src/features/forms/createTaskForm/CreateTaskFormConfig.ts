import type { AppTaskType } from '../../../contexts/gantt/types';

export const CreateTaskFormFields = {
  TITLE: 'title',
  START: 'start',
  END: 'end',
  TYPE: 'type',
} as const;

// export type CreateTaskFormValues = {
//   [CreateTaskFormFields.TITLE]: string;
//   [CreateTaskFormFields.START]: number;
//   [CreateTaskFormFields.END]: number;
//   [CreateTaskFormFields.TYPE]: string;
// };

export type CreateTaskFormValues = {
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
  { value: 'task', label: 'Task' },
  { value: 'milestone', label: 'Milstone' },
  { value: 'summary', label: 'Summary' },
];
