import GenericText from '../shared/GenericText';
import content from '../../data/content.json';
import NavBar from '../nav/NavBar';
import Footer from '../footer/Footer';
import CenteredContainer from './CenteredContainer';
import Projects from '../projects/Projects';
import WorkCard from '../work/WorkCard';
import EducationCard from '../education/Education';
import Intro from '../intro/Intro';

function PageLayout() {
  return (
    <div className="flex h-full bg-zinc-50 transition dark:bg-black">
      {/* Static centered container. */}
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>

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
              <div className="flex flex-col gap-y-6">
                <WorkCard />
                <EducationCard />
              </div>
              <div />
            </div>
          </CenteredContainer>

          <Projects />
        </main>
        <Footer />d
      </div>
    </div>
  );
}

export default PageLayout;
