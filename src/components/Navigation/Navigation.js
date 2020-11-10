import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logout from '../../images/logout.svg';
import logoutBlack from '../../images/logoutBlack.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation({activePage, setMainActive, setSavedNewsActive, logged, burgerOpened, openPopupLogin, handleLogout}) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <nav className={activePage === 'main' ?
    burgerOpened ? 'nav nav_opened' : 'nav' : burgerOpened ? 'nav nav_opened nav_whiteStrip' : 'nav'}>
      <Link
        className={activePage === 'main' ?
        'nav__link nav__link_active nav__link_active_white'
        : 'nav__link nav__link_color_black' }
        to='/'
        onClick={setMainActive}
      >
        Главная
      </Link>
      {logged &&
        <Link
          className={activePage === 'main' ?
          'nav__link nav__link_color_gray'
          : 'nav__link nav__link_color_black nav__link_active nav__link_active_black'}
          to='/saved-news'
          onClick={setSavedNewsActive}
        >
          Сохраненные статьи
        </Link>}
        {logged ?
          <button
            className={activePage === 'main' ?
            'nav__logout'
            : 'nav__logout nav__logout_color_black'}
            type='button'
            onClick={handleLogout}
          >
            {currentUser.name}
            <img
              className='nav__logoutIcon'
              src={activePage === 'main' ? logout : logoutBlack}
              alt='Logout Icon'
            />
          </button>
          :
          <button
            className="nav__auth"
            type='button'
            onClick={openPopupLogin}
          >
            Авторизоваться
          </button>
          }
    </nav>
  )
}

export default Navigation
