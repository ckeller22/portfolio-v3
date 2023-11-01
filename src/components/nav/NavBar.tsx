import { useCallback, useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import portrait from '../../images/portrait.jpg';
import sections from '../../model/sections';

import {
  DEFAULT_THEME,
  LOCAL_STORAGE_THEME_KEY,
  Theme,
} from '../../model/theme';

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

  const iconClasses = 'h-6 w-6';

  const navigationItems = sections.map((section) => {
    return (
      <li
        key={section.id}
        className="cursor-pointer px-3 py-2 transition hover:text-teal-400"
      >
        <button type="button">{section.name}</button>
      </li>
    );
  });

  return (
    <header className="flex">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="flex flex-row items-center justify-between px-4 py-2 sm:px-8 lg:px-12 ">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-12 w-12 rounded-full"
              src={portrait}
              alt="Your Company"
            />
          </div>
          <div>
            <ul className="text-md flex flex-row overflow-hidden rounded-full bg-white/90 px-3 font-medium text-zinc-800 shadow-md ring-1 ring-zinc-900/5 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-zinc-300/20">
              {navigationItems}
            </ul>
          </div>
          <div>
            <button
              data-testid="theme-button"
              type="button"
              aria-label="switch"
              className="relative rounded-full bg-white/90 px-3 py-2 text-teal-400 shadow-md ring-1 ring-zinc-900/5 backdrop-blur transition hover:text-zinc-300  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800 dark:bg-zinc-800/90 dark:text-zinc-500 dark:shadow-none dark:ring-zinc-300/20"
              onClick={handleClick}
            >
              {currentTheme === Theme.Dark ? (
                <MoonIcon className={iconClasses} />
              ) : (
                <SunIcon className={iconClasses} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
