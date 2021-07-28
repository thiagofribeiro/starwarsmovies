import React, { ReactElement } from 'react';
import IMovie from '../types/IMovie';

function MovieList({ movie }: {movie: IMovie}): ReactElement {
  return (
    <p data-testid="movie-list-item">
      {movie.title}
    </p>
  );
}

export default MovieList;
