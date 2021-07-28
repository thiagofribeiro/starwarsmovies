import React, { ReactElement } from 'react';
import { romanize } from 'romans';
import IMovie from '../types/IMovie';

function MovieList({ movie }: {movie: IMovie}): ReactElement {
  return (
    <p data-testid="movie-list-item">
      {`Episode ${romanize(movie.episode_id)} - ${movie.title} (${movie.release_date.split('-')[0]})`}
    </p>
  );
}

export default MovieList;
