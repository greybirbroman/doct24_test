import React from 'react';
import styles from './ModalOverlay.module.css';

const ModalOverlay = ({ onClose, style }) => {
  return <div className={styles.overlay} onClick={onClose} style={style} />;
};

export default React.memo(ModalOverlay);
