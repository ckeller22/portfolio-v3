import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../nav/NavBar';
import Footer from '../footer/Footer';
import Projects from '../projects/Projects';
import Intro from '../intro/Intro';
import FixedBackdrop from './FixedBackdrop';
import About from '../about/About';
import CenteredContainer from './CenteredContainer';
import WorkCard from '../work/WorkCard';
import Education from '../education/Education';
import Card from '../shared/CardContainer';

function PageLayout() {
  return (
    <div className="flex h-full bg-zinc-50 transition dark:bg-black">
      <FixedBackdrop />

      <div className="relative flex w-full flex-col">
        <header className="flex-auto">
          <NavBar />
        </header>

        <main className="flex-auto">
          <Intro />
          <About />
          <CenteredContainer>
            <div className="grid grid-cols-2 gap-x-5">
              <div className="space-y-5">
                <WorkCard />
                <Education />
              </div>
              <div>
                <Card>
                  <Card.Title faIcon={faScrewdriverWrench} text="Skills" />
                </Card>
              </div>
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
