import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Star Wars movie collection!', () => {
  render(<App />);
  const linkElement = screen.getByText(/Star Wars movie collection!/i);
  expect(linkElement).toBeInTheDocument();
});
