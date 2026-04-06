import { useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form } from '../../../components/forms/Form';
import FormContent from './FormContent';
import {
  CreateTaskFormFields,
  TASK_TYPE_OPTIONS,
  type CreateTaskFormValues,
} from './CreateTaskFormConfig';
import { useRightDrawer } from '../../../contexts/rightDrawer/context';
import { useGanttContext } from '../../../contexts/gantt/context';
import type { AppTask } from '../../../contexts/gantt/types';
import moment from 'moment';

type CreateTaskFormProps = {
  mode?: 'create' | 'edit';
  existingTaskId?: string;
};

export default function CreateTaskForm({
  mode = 'create',
  existingTaskId = '',
}: CreateTaskFormProps) {
  const { closeDrawer } = useRightDrawer();
  const { getTaskById, addTask, updateTask } = useGanttContext();

  const task = mode === 'edit' ? getTaskById(existingTaskId) : undefined;

  const initialValues: CreateTaskFormValues = useMemo(() => {
    const now = moment().valueOf();
    const defaultEnd = moment().add(1, 'days').valueOf();

    return {
      [CreateTaskFormFields.TITLE]: task?.title ?? '',
      [CreateTaskFormFields.TYPE]: task?.type ?? TASK_TYPE_OPTIONS[0].value,
      [CreateTaskFormFields.START]: task?.start ?? now,
      [CreateTaskFormFields.END]: task?.end ?? defaultEnd,
    };
  }, [task]);

  const handleSubmit = useCallback((values: CreateTaskFormValues) => {
    console.log(values);
    const { title, type, start, end } = values;

    const task: AppTask = {
      taskId: mode === 'edit' ? existingTaskId : uuidv4(),
      title,
      type,
      start,
      end,
    };

    if (mode === 'edit') {
      updateTask(task);
    } else {
      addTask(task);
    }

    closeDrawer();
  }, []);

  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit}>
      <FormContent mode={mode} />
    </Form>
  );
}
