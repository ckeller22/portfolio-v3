import * as Icon from 'react-feather';
import work from '../../model/work';
import CardContainer from '../shared/CardContainer';

function DefaultEmployerImage() {
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-zinc-100 shadow-md dark:bg-zinc-400">
      <svg
        className="absolute -left-1 h-12 w-12 text-zinc-400 dark:text-zinc-700"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

function WorkCard() {
  return (
    <CardContainer>
      {/* Card Title */}
      <div className="mb-6 flex flex-row">
        <Icon.Briefcase className="themed-icon-filled" />
        <h2 className="themed-text-medium pl-4">Work</h2>
      </div>

      {/* Work info section. */}
      <ul className="flex flex-col space-y-4">
        {work.map((workData) => {
          return (
            <li key={workData.id} className="flex flex-row">
              <div className="flex flex-shrink-0 items-start">
                {workData.image ? (
                  <img
                    className="h-10 w-10 rounded-full shadow-md "
                    src={workData.image}
                    alt=""
                  />
                ) : (
                  <DefaultEmployerImage />
                )}
              </div>
              <dl className="ml-4 flex flex-grow flex-col">
                <dt className="sr-only">Company</dt>
                <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  {workData.employer}
                </dd>
                <div className="mb-2 flex flex-row justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {workData.position}
                  </dd>
                  <dt className="sr-only">Dates</dt>
                  <dd className="text-right text-xs text-zinc-400 dark:text-zinc-500">
                    {workData.duration}
                  </dd>
                </div>
                <dt className="sr-only">Highlights</dt>
                <dd className="text-sm text-zinc-500 dark:text-zinc-400">
                  <ul className=" pl- space-y-2">
                    {workData.highlights &&
                      workData.highlights.map((highlight) => {
                        // eslint-disable-next-line react/jsx-key
                        return <li>{highlight}</li>;
                      })}
                  </ul>
                </dd>
              </dl>
            </li>
          );
        })}
      </ul>
    </CardContainer>
  );
}

export default WorkCard;
