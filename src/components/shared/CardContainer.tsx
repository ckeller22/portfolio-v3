import { AppProps } from '../../model/props';
import CardTitle from './CardTitle';
import CardInfoItem from './CardInfoItem';

interface CardContainerProps extends AppProps {
  useHover?: boolean;
}

function CardContainer({
  children,
  className = '',
  useHover = false,
}: CardContainerProps) {
  return (
    <div
      className={`group relative flex transition ${
        useHover ? 'hover:-translate-y-1' : ''
      }`}
    >
      {/* <div className="absolute -inset-[-5px] rounded-xl bg-gradient-to-r from-zinc-700 to-zinc-700 opacity-0 blur transition duration-500 group-hover:opacity-100 group-hover:duration-200" /> */}
      <div
        className={`${className} relative flex flex-grow flex-col rounded-xl border border-zinc-100 bg-white p-6 transition dark:border-zinc-700/40 dark:bg-zinc-900 ${
          useHover ? 'group-hover:shadow-xl' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
}

CardContainer.Title = CardTitle;
CardContainer.InfoItem = CardInfoItem;

export default CardContainer;
