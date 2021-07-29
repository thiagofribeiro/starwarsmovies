import React, { ReactElement } from 'react';
import { romanize } from 'romans';
import { useMoviesContext } from '../contexts/movies';
import IMovie from '../types/IMovie';
import styles from './MovieItem.module.css';

function MovieItem({ movie }: {movie: IMovie}): ReactElement {
  const { setSelectedMovie } = useMoviesContext();
  return (
    <button type="button" className={styles.movieItem} data-testid="movie-list-item" onClick={() => setSelectedMovie(movie)}>
      {`Episode ${romanize(movie.episode_id)} - ${movie.title} (${movie.release_date.split('-')[0]})`}
    </button>
  );
}

export default MovieItem;
