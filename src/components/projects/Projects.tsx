import * as Icon from 'react-feather';
import projects, { ProjectData } from '../../model/projects';
import CenteredContainer from '../layout/CenteredContainer';

// type Props = {};

function ProjectCards() {
  return projects.map((project: ProjectData) => {
    return (
      <div
        key={project.id}
        className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 dark:border-zinc-700/40 dark:bg-zinc-900 "
      >
        {/* Icons */}
        <div className="flex flex-row justify-between">
          <Icon.Folder className="themed-icon-filled h-6 w-6 " />
          <div className="flex flex-row space-x-2">
            <a
              href={project.githubURL}
              className="h-6 w-6 fill-current text-zinc-300"
            >
              <Icon.GitHub className="themed-icon" />
            </a>
            {project.liveURL && (
              <a href={project.liveURL}>
                <Icon.Link className="themed-icon" />
              </a>
            )}
          </div>
        </div>
        <div className="flex h-full flex-col pt-4">
          <h2 className="themed-text-medium">{project.title}</h2>
          <p className="themed-text-base flex flex-grow">
            {project.description}
          </p>

          <ul className="flex flex-row flex-wrap space-x-4">
            {project.technologies.map((technology) => {
              return <li className="">{technology}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  });
}

function Projects() {
  return (
    <CenteredContainer>
      <div className="flex flex-col gap-5 md:grid md:auto-rows-auto md:grid-cols-2 lg:grid-cols-3">
        <ProjectCards />
      </div>
    </CenteredContainer>
  );
}

export default Projects;
