import React, { ReactElement } from 'react';
import { romanize } from 'romans';
import { useMoviesContext } from '../contexts/movies';
import styles from './MovieDetail.module.css';

function MovieDetail(): ReactElement {
  const { selectedMovie } = useMoviesContext();
  return (
    <>
      { selectedMovie
      && (
      <div className={styles.detail}>
        <div className={styles.brand}>Star Wars</div>
        <div className={styles.episode}>
          {`Episode ${romanize(selectedMovie.episode_id)} - ${selectedMovie.title} (${selectedMovie.release_date.split('-')[0]})`}
        </div>
      </div>
      )}
    </>
  );
}

export default MovieDetail;
