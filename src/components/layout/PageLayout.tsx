import GenericText from '../shared/GenericText';
import content from '../../data/content.json';
import NavBar from '../nav/NavBar';
import Footer from '../footer/Footer';
import CenteredContainer from './CenteredContainer';
import Projects from '../projects/Projects';
import WorkCard from '../work/WorkCard';
import EducationCard from '../education/Education';
import Intro from '../intro/Intro';
import FixedBackdrop from './FixedBackdrop';
import portrait from '../../images/portrait.jpg';

function PageLayout() {
  return (
    <div className="flex h-full bg-zinc-50 transition dark:bg-black">
      <FixedBackdrop />

      <div className="relative flex w-full flex-col">
        <NavBar />
        <main className="flex-auto">
          <Intro />
          <CenteredContainer>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="col-span-1">
                <GenericText className="mt-4" text={content.about1} />
                <GenericText className="mt-4" text={content.about2} />
                <GenericText className="mt-4" text={content.about3} />
                <GenericText className="mt-4" text={content.about4} />
              </div>
              <div className="flex flex-col items-center lg:pl-20">
                <img
                  src={portrait}
                  alt=""
                  className="aspect-square max-w-sm rounded-2xl "
                />
              </div>
              <div />
            </div>
          </CenteredContainer>

          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;
