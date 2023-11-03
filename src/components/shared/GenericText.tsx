import { AppProps } from '../../model/props';

interface GenericTextProps extends AppProps {
  text: string;
}

function GenericText({ text, className = '' }: GenericTextProps) {
  return (
    <p className={`${className} text-base text-zinc-600 dark:text-zinc-400`}>
      {text}
    </p>
  );
}

export default GenericText;
