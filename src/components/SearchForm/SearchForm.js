import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onSearch();
  }

  return (
    <section className='searchForm page__searchForm'>
      <div className="searchForm__container">
        <h1 className="searchForm__title">Что творится в мире?</h1>
        <p className="searchForm__paragraph">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
        </p>
      </div>
      <form
        className="searchForm__field"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="text"
          className="searchForm__input"
          name="search"
          required
          placeholder="Введите тему новости"
          value={props.value}
          onChange={props.onChange}
        />
        <button className="searchForm__button" type="submit">Искать</button>
      </form>
    </section>
  )
}

export default SearchForm
