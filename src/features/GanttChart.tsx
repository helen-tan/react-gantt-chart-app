import { Gantt, Willow, WillowDark } from "@svar-ui/react-gantt";
import "@svar-ui/react-gantt/all.css";
import { useContext, useMemo } from "react";
import { ThemeContext } from "../contexts/themeContext/ThemeContext";
import { ThemeModes } from "../types/theme.model";
import { Box } from "@mui/material";

export default function GanttChart() {
  const { mode } = useContext(ThemeContext);

  const tasks = useMemo(() => (
    [
      {
        id: 1,
        text: "Project Planning",
        start: new Date(2024, 0, 1),
        end: new Date(2024, 0, 10),
        progress: 100,
        type: "summary",
        open: true,
      },
      {
        id: 2,
        text: "Requirements Gathering",
        start: new Date(2024, 0, 1),
        end: new Date(2024, 0, 5),
        progress: 100,
        parent: 1,
      },
      // ... more tasks
    ]
  ), []);

  const links = useMemo(() => ([
      { id: 1, source: 2, target: 3, type: "e2s" },
  ]), []);

  const scales = useMemo(() => ([
    { unit: "month", step: 1, format: "%M %Y" },
    { unit: "week", step: 1, format: "Week %w" },
  ]), []);

  const renderLightTheme = useMemo(() => (
    <Willow>
      <Gantt 
        tasks={tasks} 
        links={links} 
        scales={scales}
      />
    </Willow>
  ), [links, scales, tasks]);

  const renderDarkTheme = useMemo(() => (
    <WillowDark>
        <Gantt 
          tasks={tasks} 
          links={links} 
          scales={scales}
        />
    </WillowDark>
  ), [links, scales, tasks]);

  return(
    <Box sx={{ height: "100%", width: "100%" }}>
      { mode === ThemeModes.LIGHT ? renderLightTheme : renderDarkTheme }
    </Box>
  );
}
