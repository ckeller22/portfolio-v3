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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo dolores aliquid dolore adipisci aliquam, voluptates
                provident maiores rem consequatur unde veniam id repudiandae
                itaque eius pariatur veritatis aspernatur facere reiciendis?
              </div>
            </div>
          </div>
          <div className="sm:px-8 mt-9">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="px-4 sm:px-8 lg:px-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo dolores aliquid dolore adipisci aliquam, voluptates
                provident maiores rem consequatur unde veniam id repudiandae
                itaque eius pariatur veritatis aspernatur facere reiciendis?
              </div>
            </div>
          </div>
          <div className="sm:px-8 mt-9">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="px-4 sm:px-8 lg:px-12">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo dolores aliquid dolore adipisci aliquam, voluptates
                provident maiores rem consequatur unde veniam id repudiandae
                itaque eius pariatur veritatis aspernatur facere reiciendis?
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PageLayout;
