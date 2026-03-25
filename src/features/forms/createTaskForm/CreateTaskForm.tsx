import { Form } from '../../../components/forms/Form';
import FormContent from './FormContent';
import { CreateTaskFormFields, type CreateTaskFormValues } from './CreateTaskFormConfig';
import { useCallback, useMemo } from 'react';
import { useRightDrawer } from '../../../contexts/rightDrawer/context';
import { useGanttContext } from '../../../contexts/gantt/context';
import type { AppTask, AppTaskType } from '../../../contexts/gantt/types';

export default function CreateTaskForm() {
  const { closeDrawer } = useRightDrawer();
  const { addTask } = useGanttContext();

  const initialValues: CreateTaskFormValues = useMemo(
    () => ({
      [CreateTaskFormFields.TITLE]: '',
      [CreateTaskFormFields.TYPE]: '',
      [CreateTaskFormFields.START]: 0,
      [CreateTaskFormFields.END]: 0,
    }),
    [],
  );

  const handleSubmit = useCallback((values: CreateTaskFormValues) => {
    console.log(values);
    const newTask: AppTask = {
      taskId: '',
      title: values[CreateTaskFormFields.TITLE] as string,
      type: values[CreateTaskFormFields.TYPE] as AppTaskType,
      start: new Date(values[CreateTaskFormFields.START]),
      end: new Date(values[CreateTaskFormFields.END]),
    };

    addTask(newTask);

    closeDrawer();
  }, []);

  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit}>
      <FormContent />
    </Form>
  );
}
