import CenteredContainer from '../layout/CenteredContainer';
import GenericHeading from '../shared/GenericHeading';
import GenericText from '../shared/GenericText';
import content from '../../data/content.json';
import portrait from '../../images/portrait.jpg';

function About() {
  return (
    <CenteredContainer>
      <GenericHeading text="About Me" />
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-x-10">
        <div className="col-span-1">
          <GenericText className="" text={content.intro} />
          <GenericText className="mt-4" text={content.about1} />
          <GenericText className="mt-4" text={content.about2} />
          <GenericText className="mt-4" text={content.about3} />
          <GenericText className="mt-4" text={content.about4} />
        </div>
        <div>
          <div className="lg:pl-20">
            <div className="max-w-xs lg:max-w-none">
              <img
                src={portrait}
                alt=""
                className=" aspect-square rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
        <div />
      </div>
    </CenteredContainer>
  );
}

export default About;
