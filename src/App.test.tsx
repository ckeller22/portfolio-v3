import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';
import App, { LOCAL_STORAGE_THEME_KEY, Theme } from './App';

describe('The App component', () => {
  beforeEach(() => {
    // Clear storage.
    localStorage.removeItem(LOCAL_STORAGE_THEME_KEY);

    // Mock matchMedia.matches to return false.
    window.matchMedia = vi.fn().mockImplementation((query) => {
      return {
        matches: false,
        media: query,
      };
    });
  });

  it('Should switch the theme on button click', async () => {
    const user = userEvent.setup();
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.Dark);

    render(<App />);

    expect(document.documentElement.classList.contains('dark')).toBe(true);

    // Emulate click event on toggle button.
    const button = await screen.findByTestId('theme-button');
    await user.click(button);

    // HTML should have class removed.
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('Should use theme from local storage if available', async () => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, Theme.Dark);

    render(<App />);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('Should use system preference if local storage is not set', async () => {
    // Mock for user prefers light mode.
    window.matchMedia = vi.fn().mockImplementation((query) => {
      return {
        matches: query === '(prefers-color-scheme: light)',
        media: query,
      };
    });

    render(<App />);

    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('Use default if no other preference was found', async () => {
    localStorage.removeItem(LOCAL_STORAGE_THEME_KEY);

    render(<App />);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
