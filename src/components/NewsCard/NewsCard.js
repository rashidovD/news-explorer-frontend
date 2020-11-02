import React from 'react'
import './NewsCard.css';

function NewsCard({card, logged, activePage}) {
  return (
    <div className="newsCard">
      <a className="newsCard__link" href={card.source.url} target="_blank" rel="noopener noreferrer">
        <img className="newsCard__image" src={card.urlToImage} alt="Картинка к новости." />
        <div className="newsCard__container">
          <p className="newsCard__date">{card.publishedAt}</p>
          <div className="newsCard__textbox">
            <p className="newsCard__title">{card.title}</p>
            <p className="newsCard__description">{card.description}</p>
          </div>
          <p className="newsCard__source">{card.source.name}</p>
        </div>
      </a>
      {activePage === 'main'
        ?
        <button className={logged ? 'newsCard__save' : 'newsCard__save newsCard__save_nologged'}
          type="button"
        />
        :
        <>
          <button className="newsCard__delete" type="button"/>
          <p className="newsCard__keyword">{card.keyword}</p>
        </>
      }
    </div>
  )
}

export default NewsCard
