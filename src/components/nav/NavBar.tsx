import { useCallback, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { faChevronDown, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animateScroll } from 'react-scroll';
import { debounce } from 'lodash';
import sections, { SectionData } from '../../model/sections';
import {
  DEFAULT_THEME,
  LOCAL_STORAGE_THEME_KEY,
  Theme,
} from '../../model/theme';
import NavigationItem from './NavigationItem';
import HomeButton from './HomeButton';
import ThemeToggleButton from './ThemeToggleButton';
import ColorPickerDropdown from './ColorPickerDropdown';

function NavBar() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(DEFAULT_THEME);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPosition = window.scrollY;
      const scrollDifference = prevScrollPosition - currentScrollPosition;

      const hasScrolledUpSignificantly =
        prevScrollPosition > currentScrollPosition && scrollDifference > 10;

      const isNearTopOfPage = currentScrollPosition < 10;

      const shouldNavbarBeVisible =
        hasScrolledUpSignificantly || isNearTopOfPage;

      if (isVisible !== shouldNavbarBeVisible) {
        setIsVisible(shouldNavbarBeVisible);
      }

      setPrevScrollPosition(currentScrollPosition);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      handleScroll.cancel();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition, isVisible]);

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

  const handleHomeClick = () => {
    const options = {
      duration: 500,
      smooth: true,
    };

    animateScroll.scrollToTop(options);
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
    // The following divs replicate the structure of CenteredContainer
    // but with support for fixed positioning.
    <div
      className={`${
        isVisible ? 'visible' : ''
      } nav-container fixed left-0 right-0 z-10 mx-auto w-full max-w-7xl py-4 lg:px-8`}
    >
      <div className="mx-4 sm:mx-8 sm:px-8 lg:mx-12">
        <div className="relative mx-auto max-w-2xl lg:max-w-5xl">
          <div className="flex flex-row items-center justify-between ">
            <HomeButton onClick={handleHomeClick} />
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
                      <div className="text-md flex flex-row justify-between font-medium">
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
            <div className="flex flex-row">
              <ColorPickerDropdown />
              <ThemeToggleButton
                currentTheme={currentTheme}
                updateTheme={updateTheme}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
