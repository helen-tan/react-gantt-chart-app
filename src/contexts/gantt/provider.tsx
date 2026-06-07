import { useReducer, useState } from 'react';
import { GanttContext, type GanttState } from './context';
import type { AppTask } from './types';
import type { IApi } from '@svar-ui/react-gantt';
import { mapToSVARGanttTask } from './utils/mapToSVARGantt';
import dayjs from 'dayjs';

type GanttProviderProps = {
  children: React.ReactNode;
};

const now = dayjs();

const initialState: GanttState = {
  tasks: [
    {
      taskId: '123',
      title: 'Test Task 1',
      start: now.valueOf(),
      end: now.add(1, 'hour').valueOf(),
      progress: 100,
      type: 'task',
      isOpen: true,
    },
    {
      taskId: '456',
      title: 'Test Task 2',
      start: now.valueOf(),
      end: now.add(1, 'hour').valueOf(),
      progress: 100,
      type: 'task',
      parent: '123',
    },
    {
      taskId: '789',
      title: 'Test Task 3',
      start: now.valueOf(),
      end: now.add(1, 'hour').valueOf(),
      progress: 100,
      type: 'task',
    },
    // ... more tasks
  ],
  // links: [{ linkId: 1, source: 2, target: 3, type: 'e2s' }],
  links: [],
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
    const newTask = mapToSVARGanttTask(task);
    void ganttApi.exec('add-task', {
      task: newTask,
    });

    console.log('state', state);
  };

  const updateTask = (task: AppTask) => {
    // 1. Update state
    dispatch({ type: 'UPDATE_TASK', payload: task });

    // 2. Update Gantt UI
    if (!ganttApi) return;
    const updatedTask = mapToSVARGanttTask(task);
    void ganttApi.exec('update-task', {
      id: task.taskId.toString(),
      task: updatedTask,
    });
    console.log('state', state);
  };

  const deleteTask = (taskId: string) => {
    // 1. Update state
    dispatch({ type: 'DELETE_TASK', payload: taskId });

    // 2. Update Gantt UI
    if (!ganttApi) return;
    void ganttApi.exec('delete-task', { id: taskId });
  };

  const getTaskById = (taskId: string) => {
    const found = state.tasks.find((t) => t.taskId === taskId.toString());
    return found;
  };

  return (
    <GanttContext.Provider
      value={{
        state,
        ganttApi,
        setGanttApi,
        addTask,
        updateTask,
        deleteTask,
        getTaskById,
      }}
    >
      {children}
    </GanttContext.Provider>
  );
}
