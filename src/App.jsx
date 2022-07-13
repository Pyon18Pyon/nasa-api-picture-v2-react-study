import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Navigation from './components/Navigation';
import Card from './components/Card';
import SaveButton from './components/SaveButton';
import styles from './App.module.css';

// import { images } from './images';


// NASA API
const apiKey = 'DEMO_KEY';

function App() {

  // State
  const [appState, setAppState] = useState({
    loading: false,
    lists: []
  });

  const [favorites, setFavorites] = useState([]);

  const [isSaved, setIsSaved] = useState(true);

  const [favoriteNav, setFavoriteNav] = useState(true);

  // Destructuring
  const { loading, lists } = appState;

  // ----------------------------------------------------------------------

  const addImages = (count) => {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
    setAppState({ loading: true, lists: lists });
    fetch(apiUrl)
      .then((response) => response.json())
      .then((lists) => {
        setAppState((prevState) => ({ loading: false, lists: [...prevState.lists, ...lists] }));
      });
  };

  useEffect(() => {
    (async function () {
      addImages(10);
    })();
  }, [setAppState]);

  const moreImages = () => {
    if (favoriteNav) {
      addImages(10);
    } else {
      setFavoriteNav(true);
      addImages(10);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // -----------------------------------------------------------------------------

  // Demo with images.js ----------
  // useEffect(() => {
  //   setAppState({ ...appState, lists: images })
  // }, []);

  // ------------------------------


  const toggleFavorite = (item) => {
    const found = favorites.find((value) => (value.url === item.url));
    console.log('found:', found);
    if (!found) {
      setFavorites([...favorites, item]);
      // Show Save Confirmation for 2 seconds
      setIsSaved(false);
      setTimeout(() => {
        setIsSaved(true);
      }, 2000);
    } else if (found && !favoriteNav) {
      // setFavorites(prevItems => prevItems.filter((value) => value !== item));
      setFavorites(favorites.filter((value) => value !== item));
    } 
  };



  // Set Favorites in localStorage
  useEffect(() => {
    console.log('favorites1:', favorites);
    localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const favoriteLists = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setFavoriteNav(false);
    // Get Favorites from localStorage
    const data = localStorage.getItem('nasaFavorites')
    if (data) {
      setFavorites(JSON.parse(data));
    }
  };

  return (
    <>
      <Loader
        isLoading={loading}
      />
      <div className={styles.container}>
        <Navigation
          moreImages={moreImages}
          favoriteLists={favoriteLists}
          favoriteNav={favoriteNav}
        />
        <Card
          lists={lists}
          toggleFavorite={toggleFavorite}
          favoriteNav={favoriteNav}
          favorites={favorites}
        />
      </div>
      <SaveButton
        isSaved={isSaved}
      />
    </>
  ); 
}

export default App;
