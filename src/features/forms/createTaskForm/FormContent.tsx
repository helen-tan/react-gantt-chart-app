import { useFormikContext } from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FormDateTimePicker } from '../../../components/forms/FormDateTimePicker';
import {
  CreateTaskFormFields,
  TASK_TYPE_OPTIONS,
  type CreateTaskFormValues,
} from './CreateTaskFormConfig';
import { FormSelect } from '../../../components/forms/FormSelect';

type FormContentProps = {
  mode: 'create' | 'edit';
};

export default function FormContent({ mode }: FormContentProps) {
  const { values, handleChange } = useFormikContext<CreateTaskFormValues>();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <Box sx={{ display: 'flex', padding: '1rem' }}>
        {mode === 'create' && <Typography variant="h5">Create Task</Typography>}
        {mode === 'edit' && <Typography variant="h5">Edit Task</Typography>}
      </Box>

      {/* Title */}
      <Box sx={{ mt: 2 }}>
        <TextField
          name={CreateTaskFormFields.TITLE}
          label="Title"
          value={values[CreateTaskFormFields.TITLE]}
          onChange={handleChange}
          fullWidth
        />
      </Box>

      {/* Type */}
      <Box sx={{ display: 'flex', mt: 3 }}>
        <FormSelect name={CreateTaskFormFields.TYPE} label="Type" options={TASK_TYPE_OPTIONS} />
      </Box>

      {/* Start End Time */}
      <Box sx={{ display: 'flex', mt: 3 }}>
        <FormDateTimePicker name={CreateTaskFormFields.START} label="Start Time" />
        <FormDateTimePicker name={CreateTaskFormFields.END} label="End Time" sx={{ ml: 1 }} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
