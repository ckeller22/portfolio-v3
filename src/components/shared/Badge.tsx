import { AppProps } from '../../model/props';

interface BadgeProps extends AppProps {
  text: string;
}

function Badge({ text }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md bg-zinc-50 px-2 py-1 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10">
      {text}
    </span>
  );
}

export default Badge;
