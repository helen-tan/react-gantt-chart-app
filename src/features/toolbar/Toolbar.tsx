import { Box } from '@mui/material';
import ThemeToggleButton from '../../ThemeToggleButton';

export default function Toolbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <ThemeToggleButton />
    </Box>
  );
}
