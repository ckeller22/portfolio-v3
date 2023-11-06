import * as Icon from 'react-feather';
import work from '../../model/work';
import Card from '../shared/CardContainer';

function WorkCard() {
  return (
    <Card>
      <Card.Title iconName="Briefcase" text="Work" />

      <ul className="flex flex-col space-y-4">
        {work.map((workData) => {
          return (
            <Card.InfoItem
              key={workData.id}
              title={workData.title}
              subtitle={workData.subtitle}
              time={workData.time}
              descriptionList={workData.descriptionList}
              imageSource={workData.imageSource}
            />
          );
        })}
      </ul>

      <a
        href="/assets/christopher-keller-resume-10-26-2023.pdf"
        download
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-2 py-3 font-medium text-zinc-900 transition hover:bg-zinc-100 dark:bg-zinc-800/90 dark:text-zinc-300 dark:hover:bg-zinc-700/90 dark:hover:text-zinc-200"
        type="button"
      >
        <span>Download Resume</span>
        <Icon.ArrowDown className="h-4 w-4 stroke-zinc-400 dark:stroke-zinc-400 dark:group-hover:stroke-zinc-300" />
      </a>
    </Card>
  );
}

export default WorkCard;