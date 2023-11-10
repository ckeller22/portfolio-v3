import portrait from '../../images/portrait.jpg';

type HomeButtonProps = {
  onClick: () => void;
};

function HomeButton({ onClick }: HomeButtonProps) {
  return (
    <button
      type="button"
      className="flex flex-shrink-0 items-center"
      onClick={onClick}
    >
      <img
        className="h-10 w-10 rounded-full shadow-md ring-1 ring-zinc-900/5 dark:ring-zinc-300/20"
        src={portrait}
        alt="Portrait of the author"
      />
    </button>
  );
}

export default HomeButton;
