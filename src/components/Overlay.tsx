import React, { ReactElement, ReactNode } from 'react';
import styles from './Overlay.module.css';

function Overlay(
  { children, onClose } : {children: ReactNode, onClose: () => void },
): ReactElement {
  return children
    ? (
      <div className={styles.overlay}>
        <button type="button" className={styles.close} onClick={onClose}>
          <span className={styles.closeSign}>&times;</span>
          <span className={styles.closeText}>close</span>
        </button>
        { children }
      </div>
    )
    : <></>;
}

export default Overlay;
