import { useQuery } from 'react-query';
import React, { ReactElement } from 'react';
import IMovie from '../types/IMovie';

function MovieList(): ReactElement {
  const { isLoading, error, data } = useQuery('repoData', () => fetch('https://swapi.dev/api/films/').then((res) => res.json()));

  if (isLoading) return <div data-testid="movie-list">Loading...</div>;

  if (error) return <div data-container="movie-list">{`An error has occurred: ${(error as Error).message}`}</div>;

  return (
    <div data-container="movie-list">
      { data && data.count > 0
        && data.results.map((item: IMovie) => (
          <p key={item.episode_id}>
            {item.title}
          </p>
        )) }
    </div>
  );
}

export default MovieList;
