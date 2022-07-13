import React from 'react';
import styles from './Loader.module.css';
import cx from 'classnames'

function Loader({ isLoading }) {
  if (!isLoading) return null;

  const loader = cx(styles.loader);

  return (
    <div className={loader}>
        <img src="rocket2.svg" alt="Rocket Loading Animation" />
    </div>
  );
}

export default Loader;