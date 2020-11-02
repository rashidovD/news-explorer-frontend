import React from 'react'

import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main({activePage, searchResults, logged}) {
  return (
    <>
      <SearchForm />
      <Preloader />
      <NewsCardList
        logged={logged}
        searchResults={searchResults}
        activePage={activePage}
      />
      <About />
    </>
  )
}

export default Main
