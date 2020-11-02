import React from 'react';
import './RegisterPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegisterPopup({popupRegisterOpen, onClose, changePopup}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  return (
    <PopupWithForm
      name="register"
      title="Регистрация"
      isOpen={popupRegisterOpen}
      onClose={onClose}

      submitBtnText="Зарегистироваться"
      textLink="Войти"
      changePopup={changePopup}
    >
      <p className="popup__inputTitle">Email</p>
      <input
        name="email"
        type="email"
        id="email-input"
        className="popup__input"
        placeholder="Введите почту"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <span className="popup__input-error" id="email-input-error"></span>
      <p className="popup__inputTitle">Пароль</p>
      <input
      name="password"
      type="password"
      id="password-input"
      placeholder="Введите пароль"
      value={password}
      onChange={handlePasswordChange}
      className="popup__input"
      required
      />
      <span className="popup__input-error" id="password-input-error"></span>
      <p className="popup__inputTitle">Имя</p>
      <input
        className="popup__input"
        name="username"
        id="username-input"
        type="text"
        placeholder="Введите свое имя"
        value={username}
        onChange={handleUsernameChange}
      />
      <span className="popup__input-error" id="username-input-error"></span>
    </PopupWithForm>
  )
}

export default RegisterPopup;
