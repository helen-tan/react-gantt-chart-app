import type { ILink, IResource, ITask } from '@svar-ui/react-gantt';

export type TooltipContentData =
  | { task: ITask; segmentIndex: number | null }
  | { link: ILink }
  | { rollup: ITask }
  | { resource: IResource };
