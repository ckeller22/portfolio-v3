import sections from '../../model/sections';

function NavigationItems() {
  return (
    <>
      {sections.map((section) => {
        return (
          <li
            className="cursor-pointer transition hover:text-teal-400"
            key={section.id}
          >
            <button type="button">{section.name}</button>
          </li>
        );
      })}
    </>
  );
}

function NavList() {
  return (
    <div className="text-md font-medium text-zinc-800 dark:text-zinc-100">
      <ul className="flex flex-row flex-wrap space-x-4">
        <NavigationItems />
      </ul>
    </div>
  );
}

function FooterMetadata() {
  const COPYRIGHT = '© Built by Chris Keller - 2023';

  return <div className="text-zinc-600 dark:text-zinc-400">{COPYRIGHT}</div>;
}

function Footer() {
  return (
    <footer className="mt-32">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 px-4 dark:border-zinc-700/40 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-center pb-16 pt-8 sm:flex-row sm:justify-between">
              <NavList />
              <FooterMetadata />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
