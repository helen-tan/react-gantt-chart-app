import { useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form } from '../../../components/forms/Form';
import FormContent from './FormContent';
import {
  TaskEditorFormFields,
  TASK_TYPE_OPTIONS,
  type TaskEditorFormValues,
} from './TaskEditorFormConfig';
import { useRightDrawer } from '../../../contexts/rightDrawer/context';
import { useGanttContext } from '../../../contexts/gantt/context';
import type { AppTask } from '../../../contexts/gantt/types';
import dayjs from 'dayjs';

type TaskEditorFormProps = {
  mode?: 'create' | 'edit';
  existingTaskId?: string;
};

export default function TaskEditorForm({
  mode = 'create',
  existingTaskId = '',
}: TaskEditorFormProps) {
  const { closeDrawer } = useRightDrawer();
  const { getTaskById, addTask, updateTask } = useGanttContext();

  // const task = mode === 'edit' ? getTaskById(existingTaskId) : undefined;

  const task = useMemo(() => {
    if (mode === 'edit') {
      return getTaskById(existingTaskId);
    }
    return undefined;
  }, [existingTaskId, getTaskById, mode]);

  const initialValues: TaskEditorFormValues = useMemo(() => {
    const now = dayjs().valueOf();
    const defaultEnd = dayjs().add(1, 'hour').valueOf();

    return {
      [TaskEditorFormFields.TITLE]: task?.title ?? '',
      [TaskEditorFormFields.TYPE]: task?.type ?? TASK_TYPE_OPTIONS[0].value,
      [TaskEditorFormFields.START]: task?.start ?? now,
      [TaskEditorFormFields.END]: task?.end ?? defaultEnd,
    };
  }, [task]);

  const handleSubmit = useCallback(
    (values: TaskEditorFormValues) => {
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
    },
    [addTask, closeDrawer, existingTaskId, mode, updateTask],
  );

  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit}>
      <FormContent mode={mode} task={task} />
    </Form>
  );
}
