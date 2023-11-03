import GenericText from '../shared/GenericText';
import content from '../../data/content.json';
import NavBar from '../nav/NavBar';
import Footer from '../footer/Footer';
import CenteredContainer from './CenteredContainer';

function PageLayout() {
  return (
    <div className="flex h-full bg-zinc-50 dark:bg-black ">
      {/* Static centered container. */}
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>

      <div className="relative flex w-full flex-col">
        <NavBar />
        <main className="flex-auto" style={{ height: 1080 }}>
          <div className="mt-9 sm:px-8">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="px-4 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    {content.introHeader}
                  </h1>
                  <GenericText className="mt-6" text={content.intro} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9 sm:px-8">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="px-4 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Hello World!
                  </h1>
                  <GenericText
                    className="mt-6"
                    text={
                      "Her be relays to only the salesmen of worthy that being up do. Is the should or few normal of her she longer the attempt. Good which in brains written turn especially in for in there a and that experiments until deep odd was would was now each easy themselves, in be break a the be a go princesses everyone. See back necessary he it this customary a on goat, would be plans. The is herself is the if ticking fortune. Gone the and problem. Torn more in either borne my small I out perfected isn't that economics on the."
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <CenteredContainer>
            <div>Some awesome content</div>
          </CenteredContainer>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default PageLayout;
