type GenericHeadingProps = {
  text: string;
};

function GenericHeading({ text }: GenericHeadingProps) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
      {text}
    </h1>
  );
}

export default GenericHeading;
