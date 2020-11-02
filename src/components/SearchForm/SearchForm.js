import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='searchForm page__searchForm'>
      <div className="searchForm__container">
        <h1 className="searchForm__title">Что творится в мире?</h1>
        <p className="searchForm__paragraph">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
        </p>
      </div>
      <div className="searchForm__field">
        <input
          type="text"
          className="searchForm__input"
          id="search-input"
          name="search"
          required
          placeholder="Введите тему новости"
        />
        <button className="searchForm__button" type="submit">Искать</button>
      </div>
    </section>
  )
}

export default SearchForm
