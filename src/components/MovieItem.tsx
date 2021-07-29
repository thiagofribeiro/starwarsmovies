import React, { ReactElement } from 'react';
import { romanize } from 'romans';
import IMovie from '../types/IMovie';
import styles from './MovieItem.module.css';

function MovieItem(
  { movie, onSelect }: {movie: IMovie, onSelect: (movieItem: IMovie) => void },
): ReactElement {
  return (
    <button type="button" className={styles.movieItem} data-testid="movie-list-item" onClick={() => onSelect(movie)}>
      {`Episode ${romanize(movie.episode_id)} - ${movie.title} (${movie.release_date.split('-')[0]})`}
    </button>
  );
}

export default MovieItem;
