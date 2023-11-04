import * as Icon from 'react-feather';
import GenericText from '../shared/GenericText';
import content from '../../data/content.json';
import NavBar from '../nav/NavBar';
import Footer from '../footer/Footer';
import CenteredContainer from './CenteredContainer';
import Projects from '../projects/Projects';
import work from '../../model/work';

function PageLayout() {
  return (
    <div className="flex h-full bg-zinc-50 dark:bg-black ">
      {/* Static centered container. */}
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>

      <div className="relative flex w-full flex-col">
        <NavBar />
        <main className="flex-auto">
          <div className="mt-9 sm:px-8">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="px-4 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    {content.introHeader}
                  </h1>
                  <GenericText className="mt-6" text={content.intro} />
                </div>
              </div>
            </div>
          </div>

          <CenteredContainer>
            <div className="">
              <GenericText className="mt-4" text={content.about1} />
              <GenericText className="mt-4" text={content.about2} />
              <GenericText className="mt-4" text={content.about3} />
              <GenericText className="mt-4" text={content.about4} />
            </div>
            <div className="max-w-2xl">
              <div className="flex flex-col rounded-xl border border-zinc-100 bg-white p-6 dark:border-zinc-700/40 dark:bg-zinc-900 ">
                <div className="mb-6 flex flex-row">
                  <Icon.Briefcase className="themed-icon-filled" />
                  <h2 className="themed-text-medium pl-4">Work</h2>
                </div>
                <ul className="flex flex-col space-y-4">
                  {work.map((workData) => {
                    return (
                      <li key={workData.id} className="flex flex-row">
                        <div className="flex flex-shrink-0 items-center">
                          {workData.image ? (
                            <img
                              className="h-10 w-10 rounded-full shadow-md "
                              src={workData.image}
                              alt=""
                            />
                          ) : (
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
                          )}
                        </div>
                        <dl className="ml-4 flex flex-grow flex-col">
                          <dt className="sr-only">Company</dt>
                          <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            {workData.employer}
                          </dd>
                          <div className="flex flex-row justify-between">
                            <dt className="sr-only">Title</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                              {workData.position}
                            </dd>
                            <dt className="sr-only">Dates</dt>
                            <dd className="text-right text-xs text-zinc-400 dark:text-zinc-500">
                              {workData.duration}
                            </dd>
                          </div>
                        </dl>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </CenteredContainer>

          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;
