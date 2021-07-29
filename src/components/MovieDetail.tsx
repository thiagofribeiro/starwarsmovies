import React, { ReactElement } from 'react';
import { romanize } from 'romans';
import uuid from 'react-uuid';
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
        <div className={styles.openingCrawl}>
          {selectedMovie.opening_crawl.split('\n').map((item) => (
            <span key={uuid()}>
              {item}
              <br />
            </span>
          ))}
        </div>
      </div>
      )}
    </>
  );
}

export default MovieDetail;
