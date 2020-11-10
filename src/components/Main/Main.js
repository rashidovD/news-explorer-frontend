import React from 'react'

import './Main.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main(props) {
  return (
    <>
      <SearchForm
        searchQuery={props.searchQuery}
        searchQueryError={props.searchQueryError}
        onChange={props.handleSearchChange}
        onSearch={props.onSearch}
      />
      {props.loading && <Preloader />}
      <NewsCardList
        logged={props.logged}
        searchResultsShow={props.searchResultsShow}
        searchResultsHidden={props.searchResultsHidden}
        handleShowMore={props.handleShowMore}
        onSaveBtnClick={props.onSaveBtnClick}
        searchQueryFail={props.searchQueryFail}
        activePage={props.activePage}
      />
      <About />
    </>
  )
}

export default Main
