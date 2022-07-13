import React from "react";
import styles from "./Navigation.module.css";
import cx from 'classnames'

function Navigation({ moreImages, favoriteLists, favoriteNav }) {

  const favoritesNav = cx(styles.navigationItems, {[styles.hidden]: favoriteNav});
  const resultsNav = cx(styles.navigationItems, {[styles.hidden]: !favoriteNav});

  return (
    // Navigation
    <div className={styles.navigationContainer}>
      <span className={styles.background}></span>
      {/* Results Nav */}
      <span className={resultsNav}>
        <h3 className={styles.clickable} onClick={favoriteLists}>
          Favorites
        </h3>
        <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
        <h3 className={styles.clickable} onClick={moreImages}>
          Load More
        </h3>
      </span>
      {/* Favorites Nav */}
      <span className={favoritesNav} id="favoritesNav">
        <h3 className={styles.clickable} onClick={moreImages}>
          Load More NASA Images
        </h3>
      </span>
    </div>
  );
}

export default Navigation;
