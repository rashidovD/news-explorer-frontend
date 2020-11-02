import React from 'react';
import './SaverNewsHeader.css';

function SavedNewsHeader() {
  return (
    <section className="savedNewsHeader">
      <p className="savedNewsHeader__title">Сохраненные статьи</p>
      <p className="savedNewsHeader__articles">Грета, у вас 5 сохраненных статей</p>
      <p className="savedNewsHeader__keywords">
        По ключевым словам: <span className="savedNewsHeader__keyword">Природа</span>,
        <span className="savedNewsHeader__keyword">Тайга</span> и
        <span className="savedNewsHeader__keyword">2-м другим</span>
      </p>
    </section>
  )
}

export default SavedNewsHeader
