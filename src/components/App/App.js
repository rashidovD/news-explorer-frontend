import React from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { login, register, checkAuth, createArticle, deleteArticle, getArticles } from '../../utils/MainApi';
import { searchNews } from '../../utils/NewsApi';

function App() {
  const history = useHistory();

  const [activePage, setActivePage] = React.useState('main');
  const [logged, setLogged] = React.useState(false);
  const [savedNews, setSavedNews] = React.useState([]);
  const [searchResultsShow, setSearchResultsShow] = React.useState(null);
  const [searchResultsHidden, setSearchResultsHidden] = React.useState([]);
  const [sortKeywords, setSortKeywords] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchQueryError, setSearchQueryError] = React.useState('');
  const [searchQueryFail, setSearchQueryFail] = React.useState(false);
  const [loading, setLoading] = React.useState('');
  const [burgerOpened, setBurgerOpened] = React.useState(false);
  // popups settings
  const [popupLoginOpen, setPopupLoginOpen] = React.useState(false);
  const popupLoginOpenRef = React.useRef();
  popupLoginOpenRef.current = popupLoginOpen;
  const [popupRegisterOpen, setPopupRegisterOpen] = React.useState(false);
  const popupRegisterOpenRef = React.useRef();
  popupRegisterOpenRef.current = popupRegisterOpen;
  const [popupSuccessOpen, setPopupSuccessOpen] = React.useState(false);
  // form settings
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');

  function handleChangeInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsValid(event.target.closest('form').checkValidity());
  }

  function resetForm() {
    setValues({});
    setErrors({});
    setIsValid(false);
    setSubmitError('');
  }

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
      if (popupLoginOpenRef.current) {
        closeLoginPopup();
      } else if (popupRegisterOpenRef.current) {
        closeRegisterPopup();
      } else {
        closeSuccessPopup();
      }
    }
  }

  function handleEscClick (event) {
    if(event.key === 'Escape') {
      if (popupLoginOpenRef.current) {
        closeLoginPopup()
      } else if (popupRegisterOpenRef.current) {
        closeRegisterPopup();
      } else {
        closeSuccessPopup();
      }
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
    resetForm();
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
    resetForm();
  }

  function openSuccessPopup() {
    document.addEventListener('keydown', memoOnKeydown);
    document.querySelector('.popup_type_success').addEventListener('click', memoOverlayClick);
    setPopupSuccessOpen(true);
  }

  function closeSuccessPopup() {
    setPopupSuccessOpen(false);
    document.removeEventListener('keydown', memoOnKeydown);
    document.querySelector('.popup_type_success').removeEventListener('click', memoOverlayClick);
  }


  function changePopup() {
    if(popupLoginOpen) {
      closeLoginPopup();
      openRegisterPopup();
    } else if (popupRegisterOpen) {
      closeRegisterPopup();
      openPopupLogin();
    } else {
      closeSuccessPopup();
      popupLoginOpen();
    }
  }

  function handleLogout() {
    localStorage.removeItem('logged');
    setMainActive();
    setLogged(false);
    history.push('/');
  }

  function onRegister(email, password, name) {
    register(email, password, name)
      .then(res => {
        if(res.data) {
          closeRegisterPopup();
          openSuccessPopup();
        } else {
          setSubmitError(res.message)
        }
      })
      .catch(err => console.log(err));
  }

  function onLogin(email, password) {
    login(email, password)
      .then(res => {
        if(res.data) {
          localStorage.setItem('logged', 'true');
          setCurrentUser(res.data);
          setLogged(true);
          closeLoginPopup();
        } else {
          setSubmitError(res.message);
        }
      })
      .catch(err => console.log(err));
  }

  function onSaveBtnClick(card) {
    if (!logged) {
      openRegisterPopup();
    } else {
      if (!card.isSaved) {
        createArticle(searchQuery, card.title, card.description, card.publishedAt, card.source.name, card.url, card.urlToImage)
          .then (res => {
            if(res.data) {
              const newSearchResShow = [...searchResultsShow];
              const idx = newSearchResShow.findIndex(item => {
                return item.title === card.title && item.description === card.description && item.publishedAt === card.publishedAt && item.source.name === card.source.name && item.url === card.url && item.urlToImage === card.urlToImage
              });
              newSearchResShow[idx].isSaved = true;
              newSearchResShow[idx]._id = res.data._id;
              localStorage.setItem('searchResultsShow', JSON.stringify(newSearchResShow));
              setSearchResultsShow(newSearchResShow);
            }
          })
          .catch(err => console.log(err));
      } else {
        deleteArticle(card._id)
          .then(res => {
            if (res.data) {
              const newSearchResShow = [...searchResultsShow];
              const idx = newSearchResShow.findIndex(item => {
                return item.title === card.title && item.description === card.description && item.publishedAt === card.publishedAt && item.source.name === card.source.name && item.url === card.url && item.urlToImage === card.urlToImage
              });
              newSearchResShow[idx].isSaved = false;
              delete newSearchResShow[idx]._id;
              localStorage.setItem('searchResultsShow', JSON.stringify(newSearchResShow));
              setSearchResultsShow(newSearchResShow);
            }
          })
          .catch(err => console.log(err));
      }
    }
  }

  function onDeleteBtnClick(card) {
    deleteArticle(card._id)
      .then(res => {
        if (res.data) {
          const newSearchResShow = [...searchResultsShow];
          const idx = newSearchResShow.findIndex(item => item._id === card._id);
          if (idx >= 0) {
            newSearchResShow[idx].isSaved = false;
            delete newSearchResShow[idx]._id;
            localStorage.setItem('searchResultsShow', JSON.stringify(newSearchResShow));
            setSearchResultsShow(newSearchResShow);
          }
          getArticlesOnSavedNewsMount();
        }
      })
      .catch(err => console.log(err));
  }

  function handleSearchChange(event) {
    if (!event.target.value.trim()) {
      setSearchQueryError('Введите ключевое слово');
    } else {
      setSearchQueryError('');
    }
    setSearchQuery(event.target.value);
  }

  function onSearch() {
    if (searchQuery.trim()) {
      setLoading(true);
      setSearchQueryFail(false);
      searchNews(searchQuery)
        .then(res => {
          if (res.status === 'ok') {
            res.articles = res.articles.map(item => ({
              ...item,
              isSaved: false
            }));
            if (res.articles.length > 0) {
              localStorage.setItem('searchResultsShow', JSON.stringify(res.articles.slice(0, 3)));
              localStorage.setItem('searchQuery', searchQuery);
            } else {
              localStorage.removeItem('searchResultsShow');
              localStorage.removeItem('searchQuery');
            }
            setSearchResultsShow(res.articles.slice(0, 3));
            localStorage.setItem('searchResultsHidden', JSON.stringify(res.articles.slice(3)));
            setSearchResultsHidden(res.articles.slice(3));
            setLoading(false);
          } else {
            setSearchQueryFail(true);
            setLoading(false);
          }
        })
        .catch(err => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setSearchQueryError('Введи ключевое слово');
    }
  }

  function handleShowMore() {
    localStorage.setItem('searchResultsShow', JSON.stringify([...searchResultsShow, ...searchResultsHidden.slice(0, 3)]));
    setSearchResultsShow([...searchResultsShow, ...searchResultsHidden.slice(0, 3)]);
    localStorage.setItem('searchResultsHidden', JSON.stringify(searchResultsHidden.slice(3)));
    setSearchResultsHidden(searchResultsHidden.slice(3));
  }

  function getArticlesOnSavedNewsMount () {
    getArticles()
      .then(res => {
        if (res.data) {
          const keywordMap = res.data.map(item => item = item.keyword)
            .reduce((acc, current) => {
              acc[current] = (acc[current] || 0) + 1;
              return acc;
            }, {});
            const sortKeywords = Object.keys(keywordMap).sort((a, b) => keywordMap[b] - keywordMap[a]);
            setSavedNews(res.data);
            setSortKeywords(sortKeywords);
        } else if (res.message === 'Статьи не найдены') {
          setSavedNews([]);
          setSortKeywords([]);
        }
      })
      .catch(err => console.log(err));
  }

  React.useEffect(() => {
    const logged = localStorage.getItem('logged');
    const searchResultsShow = JSON.parse(localStorage.getItem('searchResultsShow'));
    const searchResultsHidden = JSON.parse(localStorage.getItem('searchResultsHidden')) || [];
    const searchQuery = localStorage.getItem('searchQuery') || '';
    setSearchResultsShow(searchResultsShow);
    setSearchResultsHidden(searchResultsHidden);
    setSearchQuery(searchQuery);
    checkAuth()
      .then(res => {
        if (res.data && logged === 'true') {
          setCurrentUser(res.data);
          setLogged(true);
        } else if (logged === 'true') {
          localStorage.removeItem('logged');
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          logged={logged}
          toggleBurger={toggleBurger}
          burgerOpened={burgerOpened}
          activePage={activePage}
          setMainActive={setMainActive}
          setSavedNewsActive={setSavedNewsActive}
          handleLogout={handleLogout}
          openPopupLogin={openPopupLogin}
          currentUser={currentUser}
        />
        <Switch>
          <Route exact path='/'>
            <Main
              logged={logged}
              activePage={activePage}
              searchResultsShow={searchResultsShow}
              searchResultsHidden={searchResultsHidden}
              handleShowMore={handleShowMore}
              onSaveBtnClick={onSaveBtnClick}
              searchQuery={searchQuery}
              searchQueryError={searchQueryError}
              handleSearchChange={handleSearchChange}
              onSearch={onSearch}
              searchQueryFail={searchQueryFail}
              loading={loading}
            />
          </Route>
          <ProtectedRoute path='/saved-news'
            logged={logged}
            setSavedNewsActive={setSavedNewsActive}
            onDeleteBtnClick={onDeleteBtnClick}
            savedNews={savedNews}
            getArticles={getArticlesOnSavedNewsMount}
            sortKeywords={sortKeywords}
            openPopupLogin={openPopupLogin}
            component={SavedNews}
          />
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>
        <Footer setMainActive={setMainActive} />

        <LoginPopup
          popupLoginOpen={popupLoginOpen}
          onClose={closeLoginPopup}
          changePopup={changePopup}
          onLogin={onLogin}
          submitError={submitError}
          values={values}
          errors={errors}
          isValid={isValid}
          handleChange={handleChangeInput}
        />
        <RegisterPopup
          popupRegisterOpen={popupRegisterOpen}
          onClose={closeRegisterPopup}
          changePopup={changePopup}
          onRegister={onRegister}
          submitError={submitError}
          values={values}
          errors={errors}
          isValid={isValid}
          handleChange={handleChangeInput}
        />
        <SuccessPopup
          isOpen={popupSuccessOpen}
          changePopup={changePopup}
          onClose={closeSuccessPopup}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
