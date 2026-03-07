// -------------------------------
// --       Custom Models       --
// -------------------------------

// Tasks
// -----------------
export type AppTaskType = 'task' | 'summary' | 'milestone'; // maps to SVAR ITaskType
export interface AppTask {
  taskId: number; // maps to SVAR ITask - id
  title: string; // maps to SVAR ITask - text
  start: Date;
  end: Date;
  progress: number;
  type: AppTaskType;
  isOpen?: boolean;
  parent?: number;
}

// Links
// -----------------

export type AppLinkType = 's2s' | 's2e' | 'e2s' | 'e2e'; // same as SVAR's ILinkType
export interface AppLink {
  linkId: number; // maps to SVAR ILink - id
  source: number;
  target: number;
  type: AppLinkType;
}

// Scales
// -----------------

export interface AppScale {
  unit: string;
  step: number;
  format: string;
}

export interface GanttState {
  tasks: AppTask[];
  links: AppLink[];
  scales: AppScale[];
}
