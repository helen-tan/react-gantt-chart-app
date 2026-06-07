/* Formik supported Form component */
import { Formik, Form as FormikForm, type FormikValues } from 'formik';

interface FormProps<T extends FormikValues> {
  initialValues: T;
  onSubmit: (values: T) => void;
  children: React.ReactNode;
}

export function Form<T extends FormikValues>(props: FormProps<T>) {
  const { initialValues, onSubmit, children } = props;

  return (
    <Formik<T> initialValues={initialValues} onSubmit={onSubmit}>
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
}
