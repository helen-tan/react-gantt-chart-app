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
