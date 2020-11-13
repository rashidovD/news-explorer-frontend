import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './LoginPopup.css';

function LoginPopup(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onLogin(props.values.email, props.values.password);
  }

  return (
    <PopupWithForm
      name="login"
      title="Вход"
      isOpen={props.popupLoginOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      submitBtnText="Войти"
      textLink="Зарегистрироваться"
      changePopup={props.changePopup}
      isValid={props.isValid}
    >
      <p className="popup__inputTitle">Email</p>
      <input
        type="email"
        name="email"
        className="popup__input"
        placeholder="Введите почту"
        value={props.values.email || ''}
        onChange={props.handleChange}
        required
        pattern="[a-zA-Z-1-9.]+@[a-zA-Z]+\.[a-zA-Z]+"
      />
      <span
        className={props.errors.email ? 'popup__input-error popup__input-error_visible' : 'popup__input-error'}
      >
        {props.errors.email}
      </span>
      <p className="popup__inputTitle">Пароль</p>
      <input
        type="password"
        className="popup__input"
        name="password"
        placeholder="Введите пароль"
        required
        value={props.values.password || ''}
        onChange={props.handleChange}
      />
      <span
        className={props.errors.password ? 'popup__input-error popup__input-error_visible' : 'popup__input-error'}
      >
        {props.errors.password}
      </span>

      <span className="popup__submit-error">{props.submitError}</span>
    </PopupWithForm>
  )
}

export default LoginPopup;
