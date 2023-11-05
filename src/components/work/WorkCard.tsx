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
    </Card>
  );
}

export default WorkCard;
