import { useQuery } from 'react-query';
import React, { ReactElement, useState } from 'react';
import IMovie from '../types/IMovie';
import MovieItem from './MovieItem';
import Overlay from './Overlay';
import IResponse from '../types/IResponse';

const getMovies = async () => {
  const response = await fetch('https://swapi.dev/api/films/');

  if (!response.ok) {
    throw new Error('Problem fetching user');
  }

  const responseData = await response.json();
  if (!(responseData && responseData.count > 0)) {
    throw new Error('No movies founded');
  }

  return responseData;
};

function MovieList(): ReactElement {
  const { isLoading, error, data } = useQuery<boolean, Error, IResponse<IMovie>>('repoData', getMovies);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>();

  if (isLoading) return <div data-testid="movie-list">Loading...</div>;

  if (error) return <div data-testid="movie-list">{`${error.message}`}</div>;

  return (
    <>
      <div data-testid="movie-list">
        { data && data.results.map((item) => (
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
