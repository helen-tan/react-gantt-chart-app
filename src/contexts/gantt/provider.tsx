import { useReducer, useState } from 'react';
import { GanttContext, type GanttState } from './context';
import type { AppTask } from './types';
import type { IApi } from '@svar-ui/react-gantt';
import { maptoSVARGanttTask } from './utils/mapToSVARGantt';
import moment from 'moment';

type GanttProviderProps = {
  children: React.ReactNode;
};

const initialState: GanttState = {
  tasks: [
    {
      taskId: '123',
      title: 'Test Task 1',
      start: moment().valueOf(),
      end: moment().add(5, 'days').valueOf(),
      progress: 100,
      type: 'task',
      isOpen: true,
    },
    {
      taskId: '456',
      title: 'Test Task 2',
      start: moment().valueOf(),
      end: moment().add(5, 'days').valueOf(),
      progress: 100,
      type: 'summary',
      parent: '123',
    },
    // ... more tasks
  ],
  links: [{ linkId: 1, source: 2, target: 3, type: 'e2s' }],
  scales: [
    { unit: 'month', step: 1, format: '%M %Y' },
    { unit: 'week', step: 1, format: 'Week %w' },
  ],
};

type GanttAction =
  //   | { type: 'SET_TASKS'; payload: AppTask[] }
  //   | { type: 'SET_LINKS'; payload: AppLink[] }
  //   | { type: 'SET_SCALES'; payload: AppScale[] }
  | { type: 'ADD_TASK'; payload: AppTask }
  | { type: 'UPDATE_TASK'; payload: AppTask }
  | { type: 'DELETE_TASK'; payload: string };

const reducer = (state: GanttState, action: GanttAction) => {
  switch (action.type) {
    // case 'SET_TASKS':
    //   return { ...state, tasks: action.payload };
    // case 'SET_LINKS':
    //   return { ...state, tasks: action.payload };
    // case 'SET_SCALES':
    //   return { ...state, tasks: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((t) => (t.taskId === action.payload.taskId ? action.payload : t)),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.taskId !== action.payload),
      };
    default:
      return state;
  }
};

export function GanttProvider({ children }: GanttProviderProps) {
  const [ganttApi, setGanttApi] = useState<IApi | undefined>(undefined);
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = (task: AppTask) => {
    // 1. Update state
    dispatch({ type: 'ADD_TASK', payload: task });

    // 2. Update Gantt UI
    if (!ganttApi) return;
    const newTask = maptoSVARGanttTask(task);
    ganttApi.exec('add-task', {
      task: newTask,
    });
  };

  const updateTask = (task: AppTask) => {
    dispatch({ type: 'UPDATE_TASK', payload: task });
  };

  const deleteTask = (taskId: string) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };

  const getTaskById = (taskId: string) => {
    const found = state.tasks.find((t) => t.taskId === taskId.toString());
    return found;
  };

  return (
    <GanttContext.Provider
      value={{ state, ganttApi, setGanttApi, addTask, updateTask, deleteTask, getTaskById }}
    >
      {children}
    </GanttContext.Provider>
  );
}
