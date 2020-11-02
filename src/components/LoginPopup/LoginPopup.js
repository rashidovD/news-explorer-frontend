import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './LoginPopup.css';

function LoginPopup({popupLoginOpen, onClose, changePopup}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function hadleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <PopupWithForm
      name="login"
      title="Вход"
      isOpen={popupLoginOpen}
      onClose={onClose}
      submitBtnText="Войти"
      textLink="Зарегистрироваться"
      changePopup={changePopup}
    >
      <p className="popup__inputTitle">Email</p>
      <input
        type="email"
        name="email"
        id="email-input"
        className="popup__input"
        placeholder="Введите почту"
        value={email}
        onChange={hadleEmailChange}
        required
      />
      <span className="popup__input-error" id="email-input-error"></span>
      <p className="popup__inputTitle">Пароль</p>
      <input
        type="password"
        className="popup__input"
        id="password-input"
        name="password"
        placeholder="Введите пароль"
        required
        value={password}
        onChange={handlePasswordChange}
      />
      <span className="popup__input-error" id="password-input-error"></span>
    </PopupWithForm>
  )
}

export default LoginPopup;
