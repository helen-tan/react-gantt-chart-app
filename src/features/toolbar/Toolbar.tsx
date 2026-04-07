import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ThemeSelectDropdown from './ThemeSelectDropdown';
import { useCallback } from 'react';
import { useRightDrawer } from '../../contexts/rightDrawer/context';
import TaskEditorForm from '../forms/taskEditorForm/TaskEditorForm';
import { RightDrawerSizes } from '../../contexts/rightDrawer/config';

export default function Toolbar() {
  const { openDrawer } = useRightDrawer();

  const handleClick = useCallback(() => {
    openDrawer(<TaskEditorForm />, RightDrawerSizes.M);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-apart',
          flexGrow: 1,
        }}
      >
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleClick}>
          New Task
        </Button>
      </Box>
      <Box>
        <ThemeSelectDropdown />
      </Box>
    </Box>
  );
}
