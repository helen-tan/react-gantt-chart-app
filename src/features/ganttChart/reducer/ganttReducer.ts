import type { GanttState, AppLink, AppScale, AppTask } from '../types';

export type GanttAction =
  | { type: 'SET_TASKS'; payload: AppTask[] }
  | { type: 'SET_LINKS'; payload: AppLink[] }
  | { type: 'SET_SCALES'; payload: AppScale[] };
//   | { type: 'ADD_TASK'; payload: AppTask }
//   | { type: 'UPDATE_TASK'; payload: AppTask }
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
