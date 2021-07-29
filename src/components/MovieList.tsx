import { useQuery } from 'react-query';
import React, { ReactElement, useState } from 'react';
import IMovie from '../types/IMovie';
import MovieItem from './MovieItem';
import Overlay from './Overlay';
import IResponse from '../types/IResponse';

function MovieList(): ReactElement {
  const { isLoading, error, data } = useQuery<boolean, Error, IResponse<IMovie>>('repoData', () => fetch('https://swapi.dev/api/films/').then((res) => res.json()));
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>();

  if (isLoading) return <div data-testid="movie-list">Loading...</div>;

  if (error) return <div data-testid="movie-list">{`An error has occurred: ${error.message}`}</div>;

  return (
    <>
      <div data-testid="movie-list">
        { data && data.count > 0
          && data.results.map((item) => (
            <MovieItem
              key={item.episode_id}
              movie={item}
              onSelect={(movie) => setSelectedMovie(movie)}
            />
          )) }
      </div>
      <Overlay
        onClose={() => setSelectedMovie(null)}
      >
        {selectedMovie && selectedMovie.title}
      </Overlay>
    </>
  );
}

export default MovieList;
