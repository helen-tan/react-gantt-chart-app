import { Box } from "@mui/material";
import GanttChart from "./GanttChart";

export default function GanttView() {
    return (
        <Box sx={{ flex: 1, minHeight: 0, width: "100%" }}>
            <GanttChart/>
        </Box>
    );
}