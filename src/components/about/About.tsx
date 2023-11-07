import CenteredContainer from '../layout/CenteredContainer';
import GenericHeading from '../shared/GenericHeading';
import GenericText from '../shared/GenericText';
import content from '../../data/content.json';
import portrait from '../../images/portrait.jpg';

function About() {
  return (
    <CenteredContainer>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="col-span-1">
          <GenericHeading text="About Me" />
          <GenericText className="" text={content.about1} />
          <GenericText className="mt-4" text={content.about2} />
          <GenericText className="mt-4" text={content.about3} />
          <GenericText className="mt-4" text={content.about4} />
        </div>
        <div className="flex flex-shrink flex-col items-end">
          <img
            src={portrait}
            alt=""
            className="aspect-square max-w-sm rounded-2xl"
          />
        </div>
        <div />
      </div>
    </CenteredContainer>
  );
}

export default About;
