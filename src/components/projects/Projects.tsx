import projects, { ProjectData } from '../../model/projects';
import CenteredContainer from '../layout/CenteredContainer';
import GenericHeading from '../shared/GenericHeading';
import Card from '../shared/CardContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpRightFromSquare,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

// type Props = {};

function ProjectCards() {
  return projects.map((project: ProjectData) => {
    return (
      <Card key={project.id} useHover>
        {/* Icons */}
        <div className="flex flex-row justify-between">
          <FontAwesomeIcon icon={faFolder} size="xl" className="themed-icon" />
          <div className="flex flex-row space-x-2">
            <a href={project.githubURL} className="">
              <FontAwesomeIcon
                icon={faCodeBranch}
                size="lg"
                className="themed-link-icon"
              />
            </a>
            {project.liveURL && (
              <a href={project.liveURL} className="themed-link-icon">
                <FontAwesomeIcon icon={faUpRightFromSquare} size="lg" />
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
      <div className="mt-6 flex flex-col gap-5 md:grid md:auto-rows-fr lg:grid-cols-2">
        <ProjectCards />
      </div>
    </CenteredContainer>
  );
}

export default Projects;
