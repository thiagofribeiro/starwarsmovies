import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MoviesContextProvider } from '../contexts/movies';
import styles from './App.module.css';
import LastEdition from './LastEdition';
import MovieList from './MovieList';
import People from './People';

const queryClient = new QueryClient();

function App(): ReactElement {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <h1>
          Star Wars movie collection!
        </h1>

        <QueryClientProvider client={queryClient}>
          <MoviesContextProvider>
            <MovieList />
            <People />
            <LastEdition />
          </MoviesContextProvider>
        </QueryClientProvider>
      </main>
    </div>
  );
}

export default App;
