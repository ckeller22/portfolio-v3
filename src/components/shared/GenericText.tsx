import { AppProps } from '../../model/props';

interface GenericTextProps extends AppProps {
  text: string;
}

function GenericText({ text, className = '' }: GenericTextProps) {
  return <p className={`${className} themed-text-base`}>{text}</p>;
}

export default GenericText;
