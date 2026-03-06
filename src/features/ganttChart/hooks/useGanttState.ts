import { useReducer } from 'react';
import { ganttReducer } from '../reducer/ganttReducer';
import type { GanttState } from '../types';

const initialState: GanttState = {
  tasks: [
    {
      id: 1,
      text: 'Test Task 1',
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 10),
      progress: 100,
      type: 'task',
      open: true,
    },
    {
      id: 2,
      text: 'Test Task 2',
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 5),
      progress: 100,
      type: 'summary',
      parent: 1,
    },
    // ... more tasks
  ],
  links: [{ id: 1, source: 2, target: 3, type: 'e2s' }],
  scales: [
    { unit: 'month', step: 1, format: '%M %Y' },
    { unit: 'week', step: 1, format: 'Week %w' },
  ],
};

export function useGanttState() {
  const [state, dispatch] = useReducer(ganttReducer, initialState);
  return { state, dispatch };
}
