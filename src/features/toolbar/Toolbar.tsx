import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ThemeToggleButton from './ThemeSelectDropdown';
import { useCallback } from 'react';
import { useRightDrawer } from '../../contexts/rightDrawer/RightDrawerContext';

export default function Toolbar() {
  const { openDrawer } = useRightDrawer();

  const handleClick = useCallback(() => {
    openDrawer(<div>Test Content</div>);
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
        <ThemeToggleButton />
      </Box>
    </Box>
  );
}
