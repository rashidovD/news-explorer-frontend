import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import github from '../../images/github.svg';
import fb from '../../images/fb.svg';


function Footer({setMainActive}) {
  return (
    <footer className="footer">
      <p className="footer__copy">&copy; 2020 Supersite, Powered by News API</p>
      <ul className="footer__container">
        <div className="footer__links">
          <li className="footer__li">
            <Link
              className="footer__link"
              to="/"
              onClick={setMainActive}
            >
              Главная
            </Link>
          </li>
          <li className="footer__li">
            <a
              href="https://praktikum.yandex.ru"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
        </div>
        <li className="footer__ico">
          <a
            href="https://github.com/rashidovD"
            className="footer__icoLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="Icon Github"
              className="footer__icoImg"
            />
          </a>
        </li>
        <li className="footer__ico">
          <a
            href="https://www.facebook.com/dzh.rashidow"
            className="footer__icoLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={fb}
              alt="Icon FaceBook"
              className="footer__icoImg"
            />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
