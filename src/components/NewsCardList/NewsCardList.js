import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';
import notFoundIcon from '../../images/notFoundIcon.svg';

function NewsCardList({activePage, searchResults, logged, savedNews}) {
  // console.log(props.searchResults.length);
  console.log(savedNews);
  return (
    <>
      {
        activePage === 'main'
        ?
        <section className="newsCardList">
            {searchResults.length > 0
            ?
            <div className="newsCardList__container">
              <p className="newsCardList__title">Результаты поиска</p>
              <div className="newsCardList__cards">

                    {searchResults.map((card, index) => (
                      <NewsCard
                        card={card}
                        key={index}
                        logged={logged}
                        activePage={activePage}
                      />
                    ))}

              </div>
              <button type="button" className="newsCardList__showmore">
                Показать еще
              </button>
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
        <section className="newsCardList">
          {savedNews.length > 0
          ?
          <div className="newsCardList__container">
            <div className="newsCardList__cards">
              {
                savedNews.map((card, index) => (
                  <NewsCard
                    card={card}
                    key={index}
                    activePage={activePage}
                  />
                ))
              }
            </div>
          </div> :
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
      }
    </>
  )
}

export default NewsCardList;
