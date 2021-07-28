import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';

describe('movie list tests', () => {
  test('renders movie list!', () => {
    render(<MovieList />);
    const linkElement = screen.getByText(/movie list\.\.\./i);
    expect(linkElement).toBeInTheDocument();
  });
});
