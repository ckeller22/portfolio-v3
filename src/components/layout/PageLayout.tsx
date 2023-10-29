import GenericText from '../shared/GenericText';
import content from '../../data/content.json';

function PageLayout() {
  return (
    <div className="flex h-full bg-zinc-50 dark:bg-black ">
      {/* Static centered container. */}
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>

      <div className="relative flex w-full flex-col" style={{ height: 5000 }}>
        <main className="flex-auto">
          <div className="sm:px-8 mt-9">
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
        </main>
      </div>
    </div>
  );
}

export default PageLayout;
