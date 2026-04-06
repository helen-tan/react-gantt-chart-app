import { createContext, useContext } from 'react';
import type { AppLink, AppScale, AppTask } from './types';
import type { IApi } from '@svar-ui/react-gantt';

export interface GanttState {
  tasks: AppTask[];
  links: AppLink[];
  scales: AppScale[];
}

export interface GanttContextType {
  state: GanttState;
  addTask: (task: AppTask) => void;
  updateTask: (task: AppTask) => void;
  deleteTask: (taskId: string) => void;

  ganttApi: IApi | undefined;
  setGanttApi: (api: IApi) => void;

  getTaskById: (taskId: string) => AppTask | undefined;
}

export const GanttContext = createContext<GanttContextType | undefined>(undefined);

export const useGanttContext = () => {
  const context = useContext(GanttContext);
  if (!context) {
    throw new Error('useGanttContext must be used within GanttProvider.');
  }
  return context;
};
