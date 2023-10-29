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
                    Full stack engineer, problem solver, and a builder of
                    things.
                  </h1>
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    Hello world! I am Chris, a Full Stack Engineer with a
                    passion for building scalable, performant, and user-friendly
                    applications. With a background in both front-end and
                    back-end development, I strive to create seamless digital
                    experiences that drive value and impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:px-8 mt-9">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="px-4 sm:px-8 lg:px-12">
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  aperiam vel tempore molestias et vero vitae nesciunt illum quo
                  delectus illo quibusdam quasi voluptatibus perspiciatis rem
                  dolorum obcaecati, nihil quisquam?
                </p>
              </div>
            </div>
          </div>
          <div className="sm:px-8 mt-9">
            <div className="mx-auto w-full max-w-7xl lg:px-8">
              <div className="px-4 sm:px-8 lg:px-12">
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  ipsa modi qui sed harum exercitationem illo laboriosam odio
                  doloremque amet aliquid doloribus possimus impedit similique,
                  fugiat alias quod minus libero.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PageLayout;
