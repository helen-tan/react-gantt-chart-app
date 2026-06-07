import { Paper, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import type { ITask } from '@svar-ui/react-gantt';
import { useMemo } from 'react';
import dayjs from 'dayjs';

export type GanttTooltipData = {
  data: ITask | null;
};

type TaskTooltipProps = {
  data: ITask | null;
};

type ToolTipTaskData = {
  title: string;
  type: string;
  start: string;
  end: string;
};

export default function TaskTooltip({ data }: TaskTooltipProps) {
  const theme = useTheme();

  const formatDate = (date: Date | undefined) => {
    if (!date) return '—';
    return dayjs(date).format('DD MMM YYYY, HH:mm');
  };

  const task: ToolTipTaskData | null = useMemo(() => {
    if (!data) return null;

    return {
      title: data.text ?? '-',
      type: data.type ?? '-',
      start: formatDate(data.start),
      end: formatDate(data.end),
    };
  }, [data]);

  if (!data)
    return (
      <Paper
        elevation={0}
        sx={{
          width: 'auto',
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          p: 1.5,
          borderRadius: 3,
          boxShadow: 'none',
        }}
      >
        data is null
      </Paper>
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
        <Typography
          fontWeight={700}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {task?.title}
        </Typography>

        <Divider sx={{ color: theme.palette.text.secondary }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" fontWeight={500}>
            Start:
          </Typography>
          <Typography variant="body2">{task?.start}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" fontWeight={500}>
            End:
          </Typography>
          <Typography variant="body2">{task?.end}</Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
