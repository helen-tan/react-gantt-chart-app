import Box from '@mui/material/Box';
import { FormDateTimePicker } from '../../../components/forms/FormDateTimePicker';
import TextField from '@mui/material/TextField';
import { CreateTaskFormFields, type CreateTaskFormValues } from './CreateTaskFormConfig';
import { useFormikContext } from 'formik';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function FormContent() {
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
        <Typography variant="h5">Create Task</Typography>
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
