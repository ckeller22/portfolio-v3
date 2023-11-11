import NavBar from '../nav/NavBar';
import Footer from '../footer/Footer';
import Projects from '../projects/Projects';
import Intro from '../intro/Intro';
import FixedBackdrop from './FixedBackdrop';
import About from '../about/About';
import Experience from '../experience/Experience';

function PageLayout() {
  return (
    <div className="flex h-full bg-zinc-50 transition dark:bg-black ">
      <FixedBackdrop />

      <div className="relative flex w-full flex-col">
        <header className="flex-auto">
          <NavBar />
        </header>

        <main className="flex-auto">
          <Intro />
          <About />
          <Experience />
          <Projects />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;
