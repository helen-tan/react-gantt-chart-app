import { useCallback } from 'react';
import { useFormikContext } from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormDateTimePicker } from '../../../components/forms/FormDateTimePicker';
import {
  TaskEditorFormFields,
  TASK_TYPE_OPTIONS,
  type TaskEditorFormValues,
} from './TaskEditorFormConfig';
import { FormSelect } from '../../../components/forms/FormSelect';
import FormControl from '@mui/material/FormControl';
import { useGanttContext } from '../../../contexts/gantt/context';
import type { AppTask } from '../../../contexts/gantt/types';
import { useRightDrawer } from '../../../contexts/rightDrawer/context';

type FormContentProps = {
  mode: 'create' | 'edit';
  task: AppTask | undefined;
};

export default function FormContent({ mode, task }: FormContentProps) {
  const { values, handleChange } = useFormikContext<TaskEditorFormValues>();
  const { deleteTask } = useGanttContext();
  const { closeDrawer } = useRightDrawer();

  const handleDelete = useCallback(() => {
    if (!task) return;
    deleteTask(task.taskId);
    closeDrawer();
  }, []);

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
        {mode === 'edit' && (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Typography variant="h5">Edit Task</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <IconButton color="error" onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </>
        )}
      </Box>

      {/* ------- Title ------- */}
      <Box sx={{ mt: 2 }}>
        <TextField
          name={TaskEditorFormFields.TITLE}
          label="Title"
          value={values[TaskEditorFormFields.TITLE]}
          onChange={handleChange}
          fullWidth
        />
      </Box>

      {/* ------- Type ------- */}
      {/* <Box sx={{ display: 'flex', mt: 3 }}>
      </Box> */}
      <FormControl sx={{ mt: 3 }}>
        <FormSelect name={TaskEditorFormFields.TYPE} label="Type" options={TASK_TYPE_OPTIONS} />
      </FormControl>

      {/* ------- Start End Time ------- */}
      <FormControl sx={{ mt: 3 }}>
        <FormDateTimePicker name={TaskEditorFormFields.START} label="Start Time" />
      </FormControl>

      <FormControl sx={{ mt: 3 }}>
        <FormDateTimePicker name={TaskEditorFormFields.END} label="End Time" />
      </FormControl>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button type="submit" variant="contained">
          {mode === 'create' ? 'Create' : 'Edit'}
        </Button>
      </Box>
    </Box>
  );
}
