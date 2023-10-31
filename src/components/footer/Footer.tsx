function Footer() {
  const navigationItems = ['About', 'Projects', 'Experience', 'Resume'];

  const navLinks = navigationItems.map((item) => {
    // eslint-disable-next-line react/jsx-key
    return <li className="">{item}</li>;
  });
  return (
    <footer className="mt-32">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 px-4 dark:border-zinc-700/40 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-center pb-16 pt-8 sm:flex-row sm:justify-between">
              <div className="text-md font-medium text-zinc-800 dark:text-zinc-100">
                <ul className="flex flex-row flex-wrap gap-4">{navLinks}</ul>
              </div>
              <div className="text-zinc-600 dark:text-zinc-400">
                © Built by Chris Keller - 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
