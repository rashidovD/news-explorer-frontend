import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({setSavedNewsActive, savedNews}) {
  React.useEffect(() => {
    setSavedNewsActive();
  })

  return (
    <>
      {
        savedNews.length > 0 ?
        <>
          <SavedNewsHeader savedNews={savedNews} />
          <NewsCardList savedNews={savedNews} />
        </>
        :
        <p>Пока нет сохраненных статей</p>
      }
    </>
  )
}

export default SavedNews;
