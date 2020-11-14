import React from 'react';
import './SuccessPopup.css';

function SuccessPopup(props) {
  return (
    <div className={props.isOpen ? `popup popup_type_success popup_opened` : `popup popup_type_success`}>
      <div className="popup__container">
        <h2 className="popup__message">Пользователь успешно зарегистрирован!</h2>
        <span className="popup__link popup__link_signIn" onClick={props.changePopup}>Войти</span>
        <button className="popup__closebtn" type="button" onClick={props.onClose} aria-label="Закрыть окно."></button>
      </div>
    </div>
  )
}

export default SuccessPopup;
