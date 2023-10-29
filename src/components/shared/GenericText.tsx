interface GenericTextProps {
  text: string;
  className?: string;
}

function GenericText({ text, className }: GenericTextProps) {
  return (
    <p className={`${className} text-base text-zinc-600 dark:text-zinc-400`}>
      {text}
    </p>
  );
}

GenericText.defaultProps = {
  className: '',
};

export default GenericText;
