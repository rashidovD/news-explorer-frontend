import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';
import notFoundIcon from '../../images/notFoundIcon.svg';

function NewsCardList({activePage, logged, savedNews, searchResultsShow, onSaveBtnClick, searchResultsHidden, handleShowMore, searchQueryFail, onDeleteBtnClick}) {

  return (
    <>
      {
        activePage === 'main'
        ?
        (searchResultsShow
          ?
        <section className="newsCardList">
            {searchResultsShow.length > 0
            ?
            <div className="newsCardList__container">
              <p className="newsCardList__title">Результаты поиска</p>
              <div className="newsCardList__cards">
                    {searchResultsShow.map((card, index) => (
                      <NewsCard
                        card={card}
                        key={index}
                        logged={logged}
                        activePage={activePage}
                        onSaveBtnClick={onSaveBtnClick}
                      />
                    ))}
              </div>
              {searchResultsHidden.length > 0 &&
                <button
                  type="button"
                  className="newsCardList__showmore"
                  onClick={handleShowMore}
                >
                  Показать еще
                </button>}
            </div>
            :
            <>
              <img
                src={notFoundIcon}
                alt="Нет результатов"
                className="newsCardList__noCards"
              />
              <p className="newsCardList__noTitle">Ничего не найдено</p>
              <p className="newsCardList__noText">
                К сожалению по вашему запросу ничего не найдено
              </p>
            </>
          }
        </section>
        :
        (searchQueryFail &&
          <p className="newsCardList__error">
              Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </p>)
        )
        :
        <section className="newsCardList">
          <div className="newsCardList__container">
            <div className="newsCardList__cards">
              {
                savedNews.map((card, index) => (
                  <NewsCard
                    card={card}
                    key={index}
                    activePage={activePage}
                    onDeleteBtnClick={onDeleteBtnClick}
                  />
                ))
              }
            </div>
          </div>
        </section>
      }
    </>
  )
}

export default NewsCardList;
