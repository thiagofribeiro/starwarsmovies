import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieItem from './MovieItem';
import IMovie from '../types/IMovie';

const movie: IMovie = { episode_id: 4, title: 'A New Hope' };

describe('movie item tests', () => {
  test('renders movie list item element', () => {
    render(<MovieItem movie={movie} />);
    const movieItemElement = screen.getByTestId('movie-list-item');
    expect(movieItemElement).toBeInTheDocument();
  });

  test('renders movie list item has A new hope', () => {
    render(<MovieItem movie={movie} />);
    const movieItemElement = screen.getByText(/a new hope/i);
    expect(movieItemElement).toBeInTheDocument();
  });
});
