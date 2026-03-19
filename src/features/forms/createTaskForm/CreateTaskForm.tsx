import { Form } from '../../../components/forms/Form';
import FormContent from './FormContent';
import { CreateTaskFormFields, type CreateTaskFormValues } from './CreateTaskFormConfig';
import { useCallback, useMemo } from 'react';
import { useRightDrawer } from '../../../contexts/rightDrawer/context';

export default function CreateTaskForm() {
  const { closeDrawer } = useRightDrawer();

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
    closeDrawer();
  }, []);

  return (
    <Form initialValues={initialValues} onSubmit={handleSubmit}>
      <FormContent />
    </Form>
  );
}
