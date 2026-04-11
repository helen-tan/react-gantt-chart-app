import type { ILink, IScaleConfig, ITask } from '@svar-ui/react-gantt';
import type { AppLink, AppScale, AppTask } from '../types';

// TASKS
// --------------------
const mapToSVARGanttTask = (task: AppTask): ITask => {
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
  return tasks.map((task) => mapToSVARGanttTask(task));
};

// LINKS
// --------------------
const mapToSVARGanttLinks = (links: AppLink[]): ILink[] => {
  return links.map((link) => ({
    id: link.linkId,
    source: link.source,
    target: link.target,
    type: link.type,
  }));
};

// SCALES
// --------------------
const mapToSVARGanttScales = (scales: AppScale[]): IScaleConfig[] => {
  return scales.map((scale) => ({
    unit: scale.unit,
    step: scale.step,
    format: scale.format,
  }));
};

export { mapToSVARGanttTask, mapToSVARGanttTasks, mapToSVARGanttLinks, mapToSVARGanttScales };
