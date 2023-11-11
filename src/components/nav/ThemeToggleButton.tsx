import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import { Theme } from '../../model/theme';

type ThemeToggleButtonProps = {
  currentTheme: Theme;
  updateTheme: (theme: Theme) => void;
};

function ThemeToggleButton({
  currentTheme,
  updateTheme,
}: ThemeToggleButtonProps) {
  const toggleTheme = useCallback(() => {
    const newTheme = currentTheme === Theme.Light ? Theme.Dark : Theme.Light;
    updateTheme(newTheme);
  }, [currentTheme, updateTheme]);

  return (
    <button
      data-testid="theme-button"
      type="button"
      aria-label="switch"
      className="text-skin-primary relative rounded-full bg-white/90 px-3 py-2 shadow-md ring-1 ring-zinc-900/5 backdrop-blur transition hover:text-zinc-300  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800 dark:bg-zinc-800/90 dark:text-zinc-500 dark:shadow-none dark:ring-zinc-300/20 dark:hover:bg-zinc-700/90 dark:hover:text-zinc-400"
      onClick={toggleTheme}
    >
      {currentTheme === Theme.Dark ? (
        <FontAwesomeIcon icon={faMoon} size="xl" fixedWidth />
      ) : (
        <FontAwesomeIcon icon={faSun} size="xl" fixedWidth />
      )}
    </button>
  );
}

export default ThemeToggleButton;
