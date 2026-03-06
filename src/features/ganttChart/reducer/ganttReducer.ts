import type { GanttState, Link, Scale, Task } from '../types';

export type GanttAction =
  | { type: 'SET_TASKS'; payload: Task[] }
  | { type: 'SET_LINKS'; payload: Link[] }
  | { type: 'SET_SCALES'; payload: Scale[] };
//   | { type: 'ADD_TASK'; payload: Task }
//   | { type: 'UPDATE_TASK'; payload: Task }
//   | { type: 'DELETE_TASK'; payload: string };

export const ganttReducer = (state: GanttState, action: GanttAction): GanttState => {
  switch (action.type) {
    case 'SET_TASKS':
      return { ...state, tasks: action.payload };
    case 'SET_LINKS':
      return { ...state, links: action.payload };
    case 'SET_SCALES':
      return { ...state, scales: action.payload };
    default:
      return state;
  }
};
