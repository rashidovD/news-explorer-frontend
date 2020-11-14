import React from 'react';
import './SavedNews.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({setSavedNewsActive, savedNews, getArticles, sortKeywords, onDeleteBtnClick}) {
  React.useEffect(() => {
    setSavedNewsActive();
  })
  React.useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      {
        savedNews.length > 0 ?
        <>
          <SavedNewsHeader
            savedNews={savedNews}
            sortKeywords={sortKeywords}
          />
          <NewsCardList
            savedNews={savedNews}
            onDeleteBtnClick={onDeleteBtnClick}
          />
        </>
        :
        <p>Пока нет сохраненных статей</p>
      }
    </>
  )
}

export default SavedNews;
