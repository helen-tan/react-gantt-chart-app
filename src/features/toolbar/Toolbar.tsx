import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ThemeToggleButton from './ThemeSelectDropdown';

export default function Toolbar() {
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
        <Button variant="contained" startIcon={<AddIcon />}>
          New Task
        </Button>
      </Box>
      <Box>
        <ThemeToggleButton />
      </Box>
    </Box>
  );
}
