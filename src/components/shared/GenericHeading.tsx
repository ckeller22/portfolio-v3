import { AppProps } from '../../model/props';

interface GenericHeadingProps extends AppProps {
  text: string;
}

function GenericHeading({ text, className = '' }: GenericHeadingProps) {
  return (
    <h1
      className={`${className} mb-4 mt-16 text-2xl font-bold tracking-tight text-zinc-700 dark:text-zinc-200 sm:text-xl`}
    >
      {text}
    </h1>
  );
}

export default GenericHeading;
