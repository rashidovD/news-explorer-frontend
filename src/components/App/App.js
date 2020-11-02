import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';
import card1 from '../../images/card1.png';
import card2 from '../../images/card2.png';
import card3 from '../../images/card3.png';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';

function App() {

  const exampleResult = [
    {
      source: {
        name: 'лента.ру',
        url: 'https://lenta.ru'
      },
      title: 'Национальное достояние – парки',
      publishedAt: '2 августа, 2019',
      description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
      urlToImage: card1
    },
    {
      source: {
        name: 'медуза',
        url: 'https://meduza.io'
      },
      title: 'Лесные огоньки: история одной фотографии',
      publishedAt: '2 августа, 2019',
      description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
      urlToImage: card2
    },
    {
      source: {
        name: 'РИА',
        url: 'https://ria.ru'
      },
      title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка',
      publishedAt: '2 августа, 2019',
      description: 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где теперь наконец-то может появиться.',
      urlToImage: card3
    }
  ];

  const exampleNewsSaved = [
    {
      source: {
        name: 'лента.ру',
        url: 'https://lenta.ru'
      },
      title: 'Национальное достояние – парки',
      publishedAt: '2 августа, 2019',
      description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
      urlToImage: card1,
      keyword: 'Природа'
    },
    {
      source: {
        name: 'медуза',
        url: 'https://meduza.io'
      },
      title: 'Лесные огоньки: история одной фотографии',
      publishedAt: '2 августа, 2019',
      description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
      urlToImage: card2,
      keyword: 'Природа'
    },
    {
      source: {
        name: 'РИА',
        url: 'https://ria.ru'
      },
      title: '«Первозданная тайга»: новый фотопроект Игоря Шпиленка',
      publishedAt: '2 августа, 2019',
      description: 'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где теперь наконец-то может появиться.',
      urlToImage: card3,
      keyword: 'Тайга'
    },
    {
      source: {
        name: 'лента.ру',
        url: 'https://lenta.ru'
      },
      title: 'Национальное достояние – парки',
      publishedAt: '2 августа, 2019',
      description: 'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.',
      urlToImage: card1,
      keyword: 'Парки'
    },
    {
      source: {
        name: 'медуза',
        url: 'https://meduza.io'
      },
      title: 'Лесные огоньки: история одной фотографии',
      publishedAt: '2 августа, 2019',
      description: 'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.',
      urlToImage: card2,
      keyword: 'Фотография'
    }
  ];

  const [activePage, setActivePage] = React.useState('main');
  const [logged, setLogged] = React.useState(false);
  const [savedNews, setSavedNews] = React.useState(exampleNewsSaved);
  const [searchResults, setSearchResults] = React.useState(exampleResult);
  const [burgerOpened, setBurgerOpened] = React.useState(false);
  const [popupLoginOpen, setPopupLoginOpen] = React.useState(false);
  const [popupRegisterOpen, setPopupRegisterOpen] = React.useState(false);
  const history = useHistory();
  const popupLoginOpenRef = React.useRef();
  popupLoginOpenRef.current = popupLoginOpen;

  function setMainActive() {
    setActivePage('main');
  }

  function setSavedNewsActive() {
    setActivePage('saved-news');
  }

  function toggleBurger() {
    setBurgerOpened(!burgerOpened)
  }

  function handleOverlayClick(event) {
    if(event.target === event.currentTarget) {
      popupLoginOpenRef.current ? closeLoginPopup() : closeRegisterPopup();
    }
  }

  function handleEscClick (event) {
    if(event.key === 'Escape') {
      popupLoginOpenRef.current ? closeLoginPopup() : closeRegisterPopup();
    }
  }

  const memoOnKeydown = React.useCallback(handleEscClick, [])
  const memoOverlayClick = React.useCallback(handleOverlayClick, []);

  function openPopupLogin() {
    document.addEventListener('keydown', memoOnKeydown);
    document.querySelector('.popup_type_login').addEventListener('click', memoOverlayClick);
    setPopupLoginOpen(true);
  }

  function closeLoginPopup() {
    setPopupLoginOpen(false);
    document.querySelector('.popup_type_login').removeEventListener('click', memoOverlayClick);
    document.removeEventListener('keydown', memoOnKeydown);
  }

  function openRegisterPopup() {
    document.addEventListener('keydown', memoOnKeydown);
    document.querySelector('.popup_type_register').addEventListener('click', memoOverlayClick);
    setPopupRegisterOpen(true);
  }

  function closeRegisterPopup() {
    setPopupRegisterOpen(false);
    document.querySelector('.popup_type_register').removeEventListener('click', memoOverlayClick);
    document.removeEventListener('keydown', memoOnKeydown);
  }

  function changePopup() {
    if(popupLoginOpen) {
      closeLoginPopup();
      openRegisterPopup();
    } else {
      closeRegisterPopup();
      openPopupLogin();
    }
  }

  function handleLogout() {
    setMainActive();
    setLogged(false);
    history.push('/');
  }

  return (
    <div className="page">
      <Header
        logged={logged}
        toggleBurger={toggleBurger}
        burgerOpened={burgerOpened}
        activePage={activePage}
        setMainActive={setMainActive}
        setSavedNewsActive={setSavedNewsActive}
        handleLogout={handleLogout}
        openPopupLogin={openPopupLogin}
      />
      <Switch>
        <Route exact path='/'>
          <Main
            logged={logged}
            activePage={activePage}
            searchResults={searchResults}
          />
        </Route>
        <Route path='/saved-news'>
          <SavedNews
            setSavedNewsActive={setSavedNewsActive}
            savedNews={savedNews}
          />
        </Route>
      </Switch>
      <Footer setMainActive={setMainActive} />

      <LoginPopup
        popupLoginOpen={popupLoginOpen}
        onClose={closeLoginPopup}
        changePopup={changePopup}
      />
      <RegisterPopup
        popupRegisterOpen={popupRegisterOpen}
        onClose={closeRegisterPopup}
        changePopup={changePopup}
      />
    </div>
  );
}

export default App;
