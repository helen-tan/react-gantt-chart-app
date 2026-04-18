import { Paper, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import type { ITask } from '@svar-ui/react-gantt';
import type { AppTask } from '../../contexts/gantt/types';
import { useEffect, useMemo } from 'react';
import moment from 'moment';

export type GanttTooltipData = {
  data: ITask;
};

type TaskTooltipProps = {
  data: ITask;
};

type ToolTipTaskData = {
  title: string;
  type: string;
  start: string;
  end: string;
};

export default function TaskTooltip({ data }: TaskTooltipProps) {
  const theme = useTheme();

  if (!data) return null;

  const formatDate = (date: Date) => {
    return moment(date).format('DD MMM YYYY, HH:mm');
  };

  const task: ToolTipTaskData = useMemo(
    () => ({
      title: data.text ?? '-',
      type: data.type ?? '-',
      start: data.start ? formatDate(data.start) : new Date().toLocaleDateString(),
      end: data.end ? formatDate(data.end) : new Date().toLocaleDateString(),
    }),
    [],
  );

  return (
    <Paper
      elevation={0}
      sx={{
        width: 200,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        p: 1.5,
        borderRadius: 3,
        boxShadow: 'none',
      }}
    >
      <Stack spacing={1}>
        <Typography fontWeight={700}>{task.title}</Typography>
        <Divider sx={{ color: theme.palette.text.secondary }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" fontWeight={500}>
            Start:
          </Typography>
          <Typography variant="body2">{task.start}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" fontWeight={500}>
            End:
          </Typography>
          <Typography variant="body2">{task.end}</Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
