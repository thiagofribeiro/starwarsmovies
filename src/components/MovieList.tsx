import { useQuery } from 'react-query';
import React, { ReactElement, useState } from 'react';
import IMovie from '../types/IMovie';
import MovieItem from './MovieItem';
import Overlay from './Overlay';
import IResponse from '../types/IResponse';
import { useMoviesContext } from '../contexts/movies';

const getMovies = async () => {
  const response = await fetch('https://swapi.dev/api/films/');

  if (!response.ok) {
    throw new Error('Problem fetching user');
  }

  const responseData: IResponse<IMovie> = await response.json();
  if (!(responseData && responseData.count > 0)) {
    throw new Error('No movies founded');
  }

  return responseData.results;
};

function MovieList(): ReactElement {
  const { movies, setMovies } = useMoviesContext();
  const { isLoading, error } = useQuery<IMovie[], Error>('repoData', getMovies, {
    onSuccess: (data) => setMovies(data),
  });
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>();

  if (isLoading) return <div data-testid="movie-list">Loading...</div>;

  if (error) return <div data-testid="movie-list">{`${error.message}`}</div>;

  return (
    <>
      <div data-testid="movie-list">
        { movies && movies.map((item) => (
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
