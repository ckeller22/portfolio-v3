import Card from '../shared/CardContainer';
import education from '../../model/education';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

function Education() {
  return (
    <Card>
      <Card.Title faIcon={faUserGraduate} text="Education" />

      <ul className="flex flex-col space-y-4">
        {education.map((educationData) => {
          return (
            <Card.InfoItem
              key={educationData.id}
              title={educationData.title}
              subtitle={educationData.subtitle}
              time={educationData.time}
              url={educationData.url}
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
