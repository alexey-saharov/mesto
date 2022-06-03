import {Popup} from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  _handleSubmit;
  _form;
  _idCard;
  _cardElement;

  constructor(popupSelector, formSelector) {
    super(popupSelector);
    this._form = document.querySelector(popupSelector).querySelector(formSelector);
  }

  open(idCard, cardElement, handleSubmit) {
    super.open();
    this._handleSubmit = handleSubmit;
    this._idCard = idCard;
    this._cardElement = cardElement;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmit(this._idCard, this._cardElement);
    });
  }
}
