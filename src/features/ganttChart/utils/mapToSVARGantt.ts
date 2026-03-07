import type { ILink, IScaleConfig, ITask } from '@svar-ui/react-gantt';
import type { AppLink, AppScale, AppTask } from '../types';

const mapToSVARGanttTasks = (tasks: AppTask[]): ITask[] => {
  return tasks.map((task) => ({
    id: task.taskId,
    text: task.title,
    start: task.start,
    end: task.end,
    progress: task.progress,
    type: task.type,
    open: task.isOpen,
    parent: task.parent,
  }));
};

const maptoSVARGanttLinks = (links: AppLink[]): ILink[] => {
  return links.map((link) => ({
    id: link.linkId,
    source: link.source,
    target: link.target,
    type: link.type,
  }));
};

const maptoSVARGanttScales = (scales: AppScale[]): IScaleConfig[] => {
  return scales.map((scale) => ({
    unit: scale.unit,
    step: scale.step,
    format: scale.format,
  }));
};

export { mapToSVARGanttTasks, maptoSVARGanttLinks, maptoSVARGanttScales };
