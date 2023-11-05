import Card from '../shared/CardContainer';
import education from '../../model/education';

function Education() {
  return (
    <Card>
      <Card.Title iconName="BookOpen" text="Education" />

      <ul className="flex flex-col space-y-4">
        {education.map((educationData) => {
          return (
            <Card.InfoItem
              key={educationData.id}
              title={educationData.title}
              subtitle={educationData.subtitle}
              time={educationData.time}
              descriptionList={educationData.descriptionList}
              imageSource={educationData.imageSource}
            />
          );
        })}
      </ul>
    </Card>
  );
}

export default Education;
