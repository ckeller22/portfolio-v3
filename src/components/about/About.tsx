import Element from 'react-scroll/modules/components/Element';
import CenteredContainer from '../layout/CenteredContainer';
import GenericHeading from '../shared/GenericHeading';
import GenericText from '../shared/GenericText';
import content from '../../data/content.json';
import portrait from '../../images/portrait.jpg';

function About() {
  return (
    <CenteredContainer>
      <Element name="about-section" />
      <GenericHeading text="About Me" />
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-10">
        <div className="flex flex-col gap-y-5">
          {content.about.map((paragraph, index) => {
            // eslint-disable-next-line react/no-array-index-key
            return <GenericText key={index} text={paragraph} />;
          })}
        </div>
        <div>
          <div className="pb-4 lg:pb-0 lg:pl-20">
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
