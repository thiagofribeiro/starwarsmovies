import React, { ReactElement } from 'react';
import { romanize } from 'romans';
import IMovie from '../types/IMovie';
import styles from './MovieItem.module.css';

function MovieList({ movie }: {movie: IMovie}): ReactElement {
  return (
    <div className={styles.movieItem} data-testid="movie-list-item">
      {`Episode ${romanize(movie.episode_id)} - ${movie.title} (${movie.release_date.split('-')[0]})`}
    </div>
  );
}

export default MovieList;
