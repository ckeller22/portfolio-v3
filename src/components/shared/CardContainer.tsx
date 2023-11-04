import { AppProps } from '../../model/props';
import CardTitle from './CardTitle';

interface CardContainerProps extends AppProps {}

function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="flex flex-col rounded-xl border border-zinc-100 bg-white p-6 dark:border-zinc-700/40 dark:bg-zinc-900">
      {children}
    </div>
  );
}

CardContainer.Title = CardTitle;

export default CardContainer;
