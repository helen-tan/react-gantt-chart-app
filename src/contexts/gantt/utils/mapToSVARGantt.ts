import type { ILink, IScaleConfig, ITask } from '@svar-ui/react-gantt';
import type { AppLink, AppScale, AppTask } from '../types';

// TASKS
// --------------------
const maptoSVARGanttTask = (task: AppTask): ITask => {
  return {
    id: task.taskId,
    text: task.title,
    start: new Date(task.start),
    end: new Date(task.end),
    progress: task.progress,
    type: task.type,
    open: task.isOpen,
    parent: task.parent,
  };
};

const mapToSVARGanttTasks = (tasks: AppTask[]): ITask[] => {
  return tasks.map((task) => maptoSVARGanttTask(task));
};

// LINKS
// --------------------
const maptoSVARGanttLinks = (links: AppLink[]): ILink[] => {
  return links.map((link) => ({
    id: link.linkId,
    source: link.source,
    target: link.target,
    type: link.type,
  }));
};

// SCALES
// --------------------
const maptoSVARGanttScales = (scales: AppScale[]): IScaleConfig[] => {
  return scales.map((scale) => ({
    unit: scale.unit,
    step: scale.step,
    format: scale.format,
  }));
};

export { maptoSVARGanttTask, mapToSVARGanttTasks, maptoSVARGanttLinks, maptoSVARGanttScales };
