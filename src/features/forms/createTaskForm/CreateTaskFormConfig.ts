import type { FormSelectOption } from '../../../components/forms/FormSelect';
import type { AppTaskType } from '../../ganttChart/types';

export const CreateTaskFormFields = {
  TITLE: 'title',
  START: 'start',
  END: 'end',
  TYPE: 'type',
};

export interface CreateTaskFormValues {
  [CreateTaskFormFields.TITLE]: string;
  [CreateTaskFormFields.START]: number;
  [CreateTaskFormFields.END]: number;
  [CreateTaskFormFields.TYPE]: string;
}

export const TASK_TYPE_OPTIONS: FormSelectOption<AppTaskType>[] = [
  { value: 'task', label: 'Task' },
  { value: 'milestone', label: 'Milstone' },
  { value: 'summary', label: 'Summary' },
];
