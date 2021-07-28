import React, { ReactElement, ReactNode } from 'react';
import styles from './Overlay.module.css';

function Overlay({ children } : {children: ReactNode}): ReactElement {
  return children
    ? (
      <div className={styles.overlay}>
        { children }
      </div>
    )
    : <></>;
}

export default Overlay;
