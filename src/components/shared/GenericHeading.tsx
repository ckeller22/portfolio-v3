type GenericHeadingProps = {
  text: string;
};

function GenericHeading({ text }: GenericHeadingProps) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-zinc-700 dark:text-zinc-200 sm:text-xl">
      {text}
    </h1>
  );
}

export default GenericHeading;
