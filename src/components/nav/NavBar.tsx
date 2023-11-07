import { useCallback, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import portrait from '../../images/portrait.jpg';
import sections, { SectionData } from '../../model/sections';
import { faMoon, faChevronDown, faX } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import {
  DEFAULT_THEME,
  LOCAL_STORAGE_THEME_KEY,
  Theme,
} from '../../model/theme';
import NavigationItem from './NavigationItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavBar() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(DEFAULT_THEME);

  // Needs to be memoized to prevent infinite renders.
  const updateTheme = useCallback((theme: Theme) => {
    // Add/remove dark class to/from HTML tag.
    switch (theme) {
      case Theme.Light:
        document.documentElement.classList.remove('dark');
        break;
      case Theme.Dark:
        document.documentElement.classList.add('dark');
        break;
      default:
        // Unreachable.
        break;
    }

    // Save in storage and update state.
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    setCurrentTheme(theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === Theme.Light ? Theme.Dark : Theme.Light;
    updateTheme(newTheme);
  };

  const isValidTheme = (theme: string): theme is Theme => {
    return Object.values(Theme).includes(theme as Theme);
  };

  useEffect(() => {
    // First check to see if user has an existing preference and use that.
    let theme = localStorage.getItem('theme');
    if (theme && isValidTheme(theme)) {
      updateTheme(theme);
      return;
    }

    // If not, check if OS has preference and use that.
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    const prefersLightMode = window.matchMedia(
      '(prefers-color-scheme: light)',
    ).matches;

    if (prefersDarkMode) {
      theme = Theme.Dark;
    }

    if (prefersLightMode) {
      theme = Theme.Light;
    }

    // If theme is still not set, set default theme.
    if (!theme) {
      theme = DEFAULT_THEME;
    }

    // Update with determined theme.
    if (isValidTheme(theme)) {
      updateTheme(theme);
    }
  }, [updateTheme]);

  const handleClick = () => {
    toggleTheme();
  };

  const desktopNavigationItems = sections.map((section: SectionData) => {
    return (
      <NavigationItem
        key={section.id}
        section={section}
        className="px-3 py-2"
      />
    );
  });

  const mobileNavigationItems = sections.map((section: SectionData) => {
    return (
      <NavigationItem key={section.id} section={section} className="py-2" />
    );
  });

  return (
    <header className="flex-auto">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative flex flex-row items-center justify-between px-4 py-3 sm:px-8 lg:px-12 ">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-10 w-10 rounded-full shadow-md ring-1 ring-zinc-900/5 dark:ring-zinc-300/20"
                src={portrait}
                alt="Your Company"
              />
            </div>
            <div className="flex flex-grow flex-row justify-end pr-4 sm:justify-center sm:pr-0">
              {/* Mobile menu */}
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button
                    type="button"
                    className="font-md flex flex-row items-center rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-zinc-800 shadow-md ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-zinc-300/20 sm:hidden"
                  >
                    Menu
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-2 h-3 w-3"
                    />
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay asChild>
                    <div className="fixed inset-0 z-50 bg-zinc-800/40 opacity-100 backdrop-blur-sm dark:bg-black/80" />
                  </Dialog.Overlay>
                  <Dialog.Content className="fixed inset-x-4 top-8 z-50 origin-top rounded-xl bg-white  shadow-md ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-zinc-300/20">
                    <div className="p-6">
                      <div className="text-md font-mediu flex flex-row justify-between">
                        Navigation
                        <Dialog.Close asChild>
                          <FontAwesomeIcon icon={faX} className="h-6 w-6" />
                        </Dialog.Close>
                      </div>
                      <ul className="text-md flex flex-col divide-y divide-zinc-100 pt-4 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                        {mobileNavigationItems}
                      </ul>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
              {/* Nav List Desktop */}
              <ul className="text-md hidden flex-row overflow-hidden rounded-full bg-white/90 px-3 font-medium text-zinc-800 shadow-md ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-zinc-300/20 sm:flex">
                {desktopNavigationItems}
              </ul>
            </div>
            <div>
              <button
                data-testid="theme-button"
                type="button"
                aria-label="switch"
                className="relative rounded-full bg-white/90 px-3 py-2 text-teal-400 shadow-md ring-1 ring-zinc-900/5 backdrop-blur transition hover:text-zinc-300  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800 dark:bg-zinc-800/90 dark:text-zinc-500 dark:shadow-none dark:ring-zinc-300/20 dark:hover:bg-zinc-700/90 dark:hover:text-zinc-400"
                onClick={handleClick}
              >
                {currentTheme === Theme.Dark ? (
                  <FontAwesomeIcon icon={faMoon} size="xl" />
                ) : (
                  <FontAwesomeIcon icon={faSun} size="xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
