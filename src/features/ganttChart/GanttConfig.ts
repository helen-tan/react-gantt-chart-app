import type { IGanttColumn, IScaleConfig } from '@svar-ui/react-gantt';

// Columns Left Of Splitter
// --------------------------
const columns: IGanttColumn[] = [
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
  // {
  //   id: 'add-task',
  //   header: '',
  //   width: 50,
  //   align: 'center',
  // },
];

// Scales
// ----------
const scales: IScaleConfig[] = [
  { unit: 'day', step: 1, format: '%j %M %y, %l' },
  { unit: 'hour', step: 1, format: '%g:%i %A' },
];

// const scales = [
//   { unit: 'month', step: 1, format: '%M %Y' },
//   { unit: 'week', step: 1, format: 'Week %w' },
// ];

export { columns, scales };
