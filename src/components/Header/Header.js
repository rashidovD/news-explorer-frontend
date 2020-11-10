import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({burgerOpened, toggleBurger, activePage, setMainActive, setSavedNewsActive, handleLogout, logged, openPopupLogin, currentUser}) {

  return (
    <header className={activePage === 'main' ?
      burgerOpened ? 'header header_darkStrip' : 'header' : 'header header_whiteStrip'}>
      <Link
        className={activePage === 'main' ? 'header__logo' : 'header__logo header__logo_color_black'}
        to='/'
        onClick={setMainActive}
      >
        NewsExplorer
      </Link>
      <button
        className={activePage === 'main' ?
        burgerOpened ?
        'header__burgerMenu header__burgerMenu_opened_white' : 'header__burgerMenu'
        : burgerOpened ? 'header__burgerMenu header__burgerMenu_opened_black header__burgerMenu_color_black' :
        'header__burgerMenu header__burgerMenu_color_black'}
        type='button'
        onClick={toggleBurger}
      ></button>
      <Navigation
        activePage={activePage}
        setMainActive={setMainActive}
        setSavedNewsActive={setSavedNewsActive}
        logged={logged}
        burgerOpened={burgerOpened}
        openPopupLogin={openPopupLogin}
        handleLogout={handleLogout}
        currentUser={currentUser}
      />
    </header>
  )
}

export default Header;
