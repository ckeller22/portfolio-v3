import { faAward } from '@fortawesome/free-solid-svg-icons';
import CenteredContainer from '../layout/CenteredContainer';
import WorkCard from '../work/WorkCard';
import Education from '../education/Education';
import Card from '../shared/CardContainer';
import certifications from '../../model/certifications';
import GenericHeading from '../shared/GenericHeading';

function Experience() {
  return (
    <CenteredContainer>
      <GenericHeading text="Experience" />
      <div className="flex flex-col gap-x-5 lg:grid lg:grid-cols-2">
        <div className="space-y-5">
          <WorkCard />
        </div>
        <div className="flex flex-col gap-y-5">
          <Education />
          <Card>
            <Card.Title faIcon={faAward} text="Certifications" />

            <ul className="flex flex-col space-y-4">
              {certifications.map((certificationData) => {
                return (
                  <Card.InfoItem
                    key={certificationData.id}
                    title={certificationData.title}
                    subtitle={certificationData.subtitle}
                    url={certificationData.url}
                    imageSource={certificationData.imageSource}
                  />
                );
              })}
            </ul>
          </Card>
        </div>
      </div>
    </CenteredContainer>
  );
}

export default Experience;
