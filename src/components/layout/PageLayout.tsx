import { useEffect } from 'react';
import NavBar from '../nav/NavBar';
import Footer from '../footer/Footer';
import Projects from '../projects/Projects';
import Intro from '../intro/Intro';
import FixedBackdrop from './FixedBackdrop';
import About from '../about/About';
import Experience from '../experience/Experience';

function PageLayout() {
  // const presetColors = [
  //   "#6231af",
  //   "#db2777",
  //   "#f59e0b",
  //   "#2dd4bf",
  //   "#06b6d4",
  //   "#10b981",
  // ]

  // useEffect(() => {
  //   // Create a new style element
  //   const style = document.createElement('style');
  //   // Set the content of the style element
  //   style.textContent = `
  //     :root {
  //       --color-primary: #6231af;
  //     }
  //     /* Add more styles as needed */
  //   `;
  //   // Append the style element to the head
  //   document.head.appendChild(style);

  //   // This function is called when the component is unmounted
  //   return () => {
  //     // Remove the style element from the head
  //     document.head.removeChild(style);
  //   };
  // }, []);

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
          <Experience />
          <Projects />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;
