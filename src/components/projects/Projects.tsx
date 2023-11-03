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
        {project.title}
      </div>
    );
  });
}

function Projects() {
  return (
    <CenteredContainer>
      <div className="flex flex-col ">
        <ProjectCards />
      </div>
    </CenteredContainer>
  );
}

export default Projects;
