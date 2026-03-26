import type { IGanttColumn } from '@svar-ui/react-gantt';

export const columns: IGanttColumn[] = [
  { id: 'text', header: 'Task name', flexgrow: 2 },
  {
    id: 'start',
    header: 'Start date',
    flexgrow: 1,
    align: 'center',
  },
  //   {
  //     id: 'duration',
  //     header: 'Duration',
  //     align: 'center',
  //     flexgrow: 1,
  //   },
  {
    id: 'add-task',
    header: '',
    width: 50,
    align: 'center',
  },
];
