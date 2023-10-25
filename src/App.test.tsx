import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders hi mom text', () => {
  render(<App />);

  expect(screen.getByText(/Hi mom!/i)).toBeInTheDocument();
});
