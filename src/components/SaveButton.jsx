import React from 'react';
import styles from './SaveButton.module.css';

function SaveButton({ isSaved }) {
  return (
    <div className={styles.saveConfirmed} hidden={isSaved}>
        <h1>ADDED!</h1>
    </div>
  );
}

export default SaveButton;