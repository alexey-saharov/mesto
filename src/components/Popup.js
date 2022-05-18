import {ESC_KEY, PARAMS} from '../utils/constants.js';

export class Popup {
  _popup;
  _popupOpenedClass;
  _popupButtonCloseClass;

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupOpenedClass = PARAMS.popupOpenedClass;
    this._popupButtonCloseClass = PARAMS.popupButtonCloseClass;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(event) {
    if (event.key === ESC_KEY) {
      this.close();
    }
  }

  open() {
    this._popup.classList.add(this._popupOpenedClass);
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(this._popupOpenedClass);
    document.removeEventListener('keyup', this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', event => {
        if (event.target.classList.contains(this._popupOpenedClass) ||
          event.target.classList.contains(this._popupButtonCloseClass)) {
        this.close();
      }
    });
  }
}
