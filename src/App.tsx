import React, { ReactElement } from 'react';
import styles from './App.module.css';
import MovieList from './components/MovieList';

function App(): ReactElement {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <h1>
          Star Wars movie collection!
        </h1>

        <MovieList />
      </main>
    </div>
  );
}

export default App;
