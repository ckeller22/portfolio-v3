import { useCallback, useEffect, useState } from 'react';
import portrait from '../../images/portrait.jpg';

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
      '(prefers-color-scheme: dark)'
    ).matches;

    const prefersLightMode = window.matchMedia(
      '(prefers-color-scheme: light)'
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

  return (
    <div className="flex">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="flex flex-row justify-between px-4 sm:px-8 lg:px-12 py-2 ">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-12 w-12 rounded-full"
              src={portrait}
              alt="Your Company"
            />
          </div>
          <div>list</div>
          <div>
            <button
              data-testid="theme-button"
              type="button"
              aria-label="switch"
              className="py-2 px-4 text-black  dark:text-white"
              onClick={handleClick}
            >
              switch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
