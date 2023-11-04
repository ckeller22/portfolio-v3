import * as Icon from 'react-feather';
import projects, { ProjectData } from '../../model/projects';
import CenteredContainer from '../layout/CenteredContainer';

// type Props = {};

function ProjectCards() {
  return projects.map((project: ProjectData) => {
    return (
      <div
        key={project.id}
        className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-4 dark:border-zinc-700/40 dark:bg-zinc-900 dark:text-zinc-300"
      >
        <div className="flex flex-row justify-between">
          <Icon.Folder className="h-6 w-6" />
          <div className="flex flex-row space-x-2">
            <a
              href={project.githubURL}
              className="h-6 w-6 fill-current text-zinc-300"
            >
              <Icon.GitHub />
            </a>
            <Icon.ExternalLink className="" />
          </div>
        </div>
        {project.title}
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
