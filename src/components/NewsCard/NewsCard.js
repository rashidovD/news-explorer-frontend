import React from 'react'
import './NewsCard.css';

function NewsCard({card, logged, activePage, onSaveBtnClick, onDeleteBtnClick}) {
  function handleSaveBtn() {
    onSaveBtnClick(card);
  }

  function handleDeleteBtn() {
    onDeleteBtnClick(card);
  }

  return (
    <div className="newsCard">
      <a
        className="newsCard__link"
        href={activePage === 'main' ? card.url : card.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="newsCard__image"
          src={activePage === 'main' ? card.urlToImage : card.image}
          alt={card.title}
        />
        <div className="newsCard__container">
          <p className="newsCard__date">
            {activePage === 'main' ? dateFormat(card.publishedAt) : dateFormat(card.date)}
          </p>
          <div className="newsCard__textbox">
            <p className="newsCard__title">{card.title}</p>
            <p className="newsCard__description">
              {activePage === 'main' ? card.description : card.text}
            </p>
          </div>
          <p className="newsCard__source">
            {activePage === 'main' ? card.source.name : card.source}
          </p>
        </div>
      </a>
      {activePage === 'main'
        ?
        <button
          className={logged ? card.isSaved ? 'newsCard__save newsCard__save_saved' : 'newsCard__save' : 'newsCard__save newsCard__save_nologged'}
          type="button"
          onClick={handleSaveBtn}
        />
        :
        <>
          <button
            className="newsCard__delete"
            type="button"
            onClick={handleDeleteBtn}
          />
          <p className="newsCard__keyword">{card.keyword}</p>
        </>
      }
    </div>
  )
}

function dateFormat(date) {
  let month;
  switch (date.slice(5, 7)) {
    case '01':
      month = ' января, ';
      break;
    case '02':
      month = ' февраля, ';
      break;
    case '03':
      month = ' марта, ';
      break;
    case '04':
      month = ' апреля, ';
      break;
    case '05':
      month = ' мая, ';
      break;
    case '06':
      month = ' июня, ';
      break;
    case '07':
      month = ' июня, ';
      break;
    case '08':
      month = ' августа, ';
      break;
    case '09':
      month = ' сентября, ';
      break;
    case '10':
      month = ' октября, ';
      break;
    case '11':
      month = ' ноября, ';
      break;
    case '12':
      month = ' декабря, ';
      break;
    default:
      month = '';
  }
  return +date.slice(8, 10) + month + date.slice(0, 4);
}

export default NewsCard
