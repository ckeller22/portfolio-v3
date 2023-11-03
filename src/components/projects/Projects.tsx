import CenteredContainer from '../layout/CenteredContainer';

// type Props = {};

function Projects() {
  return (
    <CenteredContainer>
      <div className="flex flex-col ">
        <div className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-4 dark:border-zinc-700/40 dark:bg-zinc-900 dark:text-zinc-300">
          Some test content
        </div>

        <div className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-4 dark:border-zinc-700/40 dark:bg-zinc-900 dark:text-zinc-300">
          Some test content
        </div>

        <div className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-4 dark:border-zinc-700/40 dark:bg-zinc-900 dark:text-zinc-300">
          Some test content
        </div>

        <div className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-4 dark:border-zinc-700/40 dark:bg-zinc-900 dark:text-zinc-300">
          Some test content
        </div>
      </div>
    </CenteredContainer>
  );
}

export default Projects;
