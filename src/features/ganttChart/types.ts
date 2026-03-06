export interface Task {
  id: number;
  text: string;
  start: Date;
  end: Date;
  progress: number;
  type: string;
  open?: boolean;
  parent?: number;
}

export interface Link {
  id: number;
  source: number;
  target: number;
  type: string;
}

export interface Scale {
  unit: string;
  step: number;
  format: string;
}

export interface GanttState {
  tasks: Task[];
  links: Link[];
  scales: Scale[];
}
