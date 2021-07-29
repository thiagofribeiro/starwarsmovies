import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import MovieList from './MovieList';
import { MoviesContextProvider } from '../contexts/movies';

const queryClient = new QueryClient();

describe('movie list tests', () => {
  test('renders movie list element', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MoviesContextProvider>
          <MovieList />
        </MoviesContextProvider>
      </QueryClientProvider>,
    );
    const movieListElement = screen.getByTestId('movie-list');
    expect(movieListElement).toBeInTheDocument();
  });
});
