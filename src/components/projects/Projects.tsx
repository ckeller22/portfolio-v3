import * as Icon from 'react-feather';
import projects, { ProjectData } from '../../model/projects';
import CenteredContainer from '../layout/CenteredContainer';
import GenericHeading from '../shared/GenericHeading';
import Card from '../shared/CardContainer';

// type Props = {};

function ProjectCards() {
  return projects.map((project: ProjectData) => {
    return (
      <Card key={project.id}>
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

          <ul className="flex flex-row flex-wrap pt-6">
            {project.technologies.map((technology) => {
              return (
                <li key={technology}>
                  <span className="inline-flex items-center pr-2 text-zinc-400 dark:text-zinc-500">
                    {technology}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </Card>
    );
  });
}

function Projects() {
  return (
    <CenteredContainer>
      <GenericHeading text="Projects" />
      <div className="mt-6 flex flex-col gap-5 md:grid md:auto-rows-auto md:grid-cols-2 lg:grid-cols-2">
        <ProjectCards />
      </div>
    </CenteredContainer>
  );
}

export default Projects;
