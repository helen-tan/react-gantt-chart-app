import { Stack, Typography, Paper } from "@mui/material";
import ThemeToggleButton from "./ThemeToggleButton";

export default function App() {
  return (
    <Stack spacing={2} alignItems="center" justifyContent="center" sx={{ p: 4 }}>
      <Typography variant="h4">React + MUI Theme Test</Typography>
      <Paper sx={{ p: 4, minWidth: 300 }}>
        <Typography>
          This is a Paper component. Its background and text should change with the theme.
        </Typography>
        <ThemeToggleButton />
      </Paper>
    </Stack>
  );
}