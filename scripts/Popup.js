import {ESC_KEY} from '../utils/constants.js';

export class Popup {
  _popup;
  _popupOpenedClass;

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(event) {
    if (event.key === ESC_KEY) {
      this.close();
    }
  }

  open(popupOpenedClass) {
    this._popupOpenedClass = popupOpenedClass;
    this._popup.classList.add(this._popupOpenedClass);
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(this._popupOpenedClass);
    document.removeEventListener('keyup', this._handleEscClose);
  }

  setEventListeners(popupButtonCloseClass) {
    this._popup.addEventListener('mousedown', event => {
      if (event.target.classList.contains(this._popupOpenedClass) ||
          event.target.classList.contains(popupButtonCloseClass)) {
        this.close();
      }
    });
  }
}
