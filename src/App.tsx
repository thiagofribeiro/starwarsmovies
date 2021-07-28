import React, { ReactElement } from 'react';
import styles from './App.module.css';

function App(): ReactElement {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <h1>
          Star Wars movie collection!
        </h1>
      </main>
    </div>
  );
}

export default App;
