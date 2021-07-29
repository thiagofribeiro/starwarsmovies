import React, {
  LegacyRef, ReactElement, ReactNode, useRef,
} from 'react';
import styles from './Overlay.module.css';

function Overlay(
  { children, onClose } : {children: ReactNode, onClose: () => void },
): ReactElement {
  const overlayEl:LegacyRef<HTMLDivElement> = useRef(null);

  const handleClick = () => {
    overlayEl.current?.classList.add(styles.fadeOut);
    const idTimeout = setTimeout(() => {
      clearTimeout(idTimeout);
      onClose();
    }, 1000);
  };

  return children
    ? (
      <div className={styles.overlay}>
        <div ref={overlayEl} className={styles.overlayContainer}>
          <button type="button" className={styles.close} onClick={handleClick}>
            <span className={styles.closeSign}>&times;</span>
            <span className={styles.closeText}>close</span>
          </button>
          { children }
        </div>
      </div>
    )
    : <></>;
}

export default Overlay;
