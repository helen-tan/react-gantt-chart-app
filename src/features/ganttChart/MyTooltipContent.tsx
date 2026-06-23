import type { IApi } from '@svar-ui/react-gantt';
import type { TooltipContentData } from '../../types/gantt.model';

type MyTooltipContentProps = { api: IApi; data: TooltipContentData };

function MyTooltipContent(props: MyTooltipContentProps) {
  const { api, data } = props;
  console.log(api);
  console.log(data);

  return <div>Hello</div>;
}

export default MyTooltipContent;
