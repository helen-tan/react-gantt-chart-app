import { GanttEvent } from './ganttEvents';

type EventMap = {
  [GanttEvent.ON_TASK_DOUBLE_CLICK]: { taskId: string };
};

type EventKey = keyof EventMap;
type Handler<K extends EventKey> = (payload: EventMap[K]) => void;

const listeners: Partial<Record<EventKey, Set<Handler<any>>>> = {};

export function addGanttEventListener<K extends EventKey>(event: K, handler: Handler<K>) {
  if (!listeners[event]) {
    listeners[event] = new Set();
  }

  listeners[event]!.add(handler);

  return () => {
    listeners[event]!.delete(handler);
  };
}

export function emitGanttEvent<K extends EventKey>(event: K, payload: EventMap[K]) {
  listeners[event]?.forEach((handler) => {
    (handler as Handler<K>)(payload);
  });
}
