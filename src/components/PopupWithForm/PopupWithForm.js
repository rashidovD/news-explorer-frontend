import React from 'react';

import './PopupWithForm.css';

function PopupWithForm({isOpen, name, title, submitBtnText, textLink, changePopup, onClose, children, isValid}) {
  return (
    <div className={
      isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`
    }>
      <form className="popup__form" name={name}>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button
          className={isValid ? 'popup__savebtn' : 'popup__savebtn popup__savebtn_disabled'}
          type="submit"
        >
          {submitBtnText}
        </button>
        <p className="popup__linkText">или <span className="popup__link" onClick={changePopup}>{textLink}</span></p>
        <button
          className="popup__closebtn"
          type="button"
          onClick={onClose}
        ></button>
      </form>
    </div>
  )
}

export default PopupWithForm
