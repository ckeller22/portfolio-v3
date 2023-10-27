import { useEffect, useState } from 'react';
import './App.css';
// import EmailSideBar from './components/sidebar/EmailSideBar';
// import SocialSideBar from './components/sidebar/SocialSideBars';

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

const DEFAULT_THEME = Theme.Dark;
const LOCAL_STORAGE_THEME_KEY = 'theme';

function App() {
  const [currentTheme, setCurrentTheme] = useState<Theme>(DEFAULT_THEME);

  const toggleTheme = () => {
    const newTheme = currentTheme === Theme.Light ? Theme.Dark : Theme.Light;
    setCurrentTheme(newTheme);
  };

  const updateThemeClass = (theme: Theme) => {
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

    setCurrentTheme(theme);
  };

  const isValidTheme = (theme: string): theme is Theme => {
    return Object.values(Theme).includes(theme as Theme);
  };

  useEffect(() => {
    // First check to see if user has an existing preference and use that.
    let theme = localStorage.getItem('theme');
    if (theme && isValidTheme(theme)) {
      updateThemeClass(theme);
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

    // If theme is still not, set default mode.
    if (!theme) {
      theme = DEFAULT_THEME;
    }

    // Update with determined theme.
    if (isValidTheme(theme)) {
      updateThemeClass(theme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
  }, [currentTheme]);

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <div>
      <button
        type="button"
        aria-label="switch"
        className="py-2 px-4 bg-black text-white "
        onClick={handleClick}
      >
        switch
      </button>
    </div>
  );
}

export default App;
