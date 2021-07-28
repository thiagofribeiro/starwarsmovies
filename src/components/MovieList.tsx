import { useQuery } from 'react-query';
import React, { ReactElement } from 'react';
import IMovie from '../types/IMovie';
import MovieItem from './MovieItem';

function MovieList(): ReactElement {
  const { isLoading, error, data } = useQuery('repoData', () => fetch('https://swapi.dev/api/films/').then((res) => res.json()));

  if (isLoading) return <div data-testid="movie-list">Loading...</div>;

  if (error) return <div data-testid="movie-list">{`An error has occurred: ${(error as Error).message}`}</div>;

  return (
    <div data-testid="movie-list">
      { data && data.count > 0
        && data.results.map((item: IMovie) => (
          <MovieItem key={item.episode_id} movie={item} />
        )) }
    </div>
  );
}

export default MovieList;
