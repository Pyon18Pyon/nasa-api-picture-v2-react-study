import React from 'react';
import styles from './Card.module.css';



function Card({ lists, toggleFavorite, favoriteNav, favorites }) {

  const displayLists = favoriteNav ? lists : favorites;

  if (!displayLists || displayLists.length === 0 ) return null;

  

  return (
    <>
      {displayLists.map((list) => (
        <div className={styles.imagesContainer} key={list.url}>
          <div className={styles.card}>
            <a href={list.hdurl} title="View Full Image" target="_blank">
              <img src={list.url} alt="NASA Picture of the Day" className={styles.cardImgTop} />
            </a>
            <div className={styles.cardBody}>
              <h5 className={styles.cardTitle}>{list.title}</h5>
              <p className={styles.clickable} onClick={() => toggleFavorite(list)}>{favoriteNav ? `Add to Favorites` : `Remove Favorites`}</p>
              <p className={styles.cardText}>{list.explanation}</p>
              <small className={styles.dateCopyright}>
                <strong>{list.date}</strong>
                <span className={styles.copyright}>{list.copyright === undefined ? '' : list.copyright}</span>
              </small>
            </div>
          </div>
        </div>
        ))}
    </>
  );

  // Demo with images.js ------------------------------------------------------------------------
  // return (
  //   <>
  //     {displayLists.map((list) => (
  //       <div className={styles.imagesContainer} key={list.id}>
  //         <div className={styles.card}>
  //           <a href={list.hdurl} title="View Full Image" target="_blank">
  //             <img src={`../assets/img/${list.url}.jpg`} alt="Random images" className={styles.cardImgTop} />
  //           </a>
  //           <div className={styles.cardBody}>
  //             <h5 className={styles.cardTitle}>{list.title}</h5>
  //             <p className={styles.clickable} onClick={() => saveFavorite(list)}>Add to Favorites</p>
  //             <p className={styles.cardText}>{list.explanation}</p>
  //             <small className={styles.textMuted}>
  //               <strong>{list.date}</strong>
  //               <span>{list.copyright === undefined ? '' : list.copyright}</span>
  //             </small>
  //           </div>
  //         </div>
  //       </div>
  //       ))}
  //   </>
  // );
  // ----------------------------------------------------------------------------------------------

  }
export default Card;