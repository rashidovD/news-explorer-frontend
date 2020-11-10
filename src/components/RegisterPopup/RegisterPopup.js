import React from 'react';
import './RegisterPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegisterPopup(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.onRegister(props.values.email, props.values.password, props.values.name);
  }

  return (
    <PopupWithForm
      name="register"
      title="Регистрация"
      isOpen={props.popupRegisterOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      submitBtnText="Зарегистироваться"
      textLink="Войти"
      changePopup={props.changePopup}
      isValid={props.isValid}
    >
      <p className="popup__inputTitle">Email</p>
      <input
        name="email"
        type="email"
        className="popup__input"
        placeholder="Введите почту"
        value={props.values.email || ''}
        onChange={props.handleChange}
        required
        pattern="[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+"
      />
      <span
        className={props.errors.email ? 'popup__input-error popup__input-error_visible' : 'popup__input-error'}
      >
        {props.errors.email}
      </span>
      <p className="popup__inputTitle">Пароль</p>
      <input
      name="password"
      type="password"
      placeholder="Введите пароль"
      value={props.values.password || ''}
      onChange={props.handleChange}
      className="popup__input"
      required
      />
      <span
        className={props.errors.password ? 'popup__input-error popup__input-error_visible' : 'popup__input-error'}
      >
        {props.errors.password}
      </span>
      <p className="popup__inputTitle">Имя</p>
      <input
        className="popup__input"
        name="name"
        minLength="2"
        maxLength="30"
        type="text"
        required
        placeholder="Введите свое имя"
        value={props.values.name || ''}
        onChange={props.handleChange}
      />
      <span className={props.errors.name ? 'popup__input-error popup__input-error_visible' : 'popup__input-error'}>
        {props.errors.name}
      </span>
      <span className="popup__submit-error">{props.submitError}</span>
    </PopupWithForm>
  )
}

export default RegisterPopup;
