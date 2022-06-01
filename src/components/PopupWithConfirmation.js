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



  // В рамках данной работы единственное действие, где подтверждение нужно - удаление карточки.
  // Но удалять мы будем каждый раз разные карточки.
  // Поэтому должна быть возможность при открытии попапа переопределять через публичный метод то действие,
  // которое нужно выполнить при нажатии на кнопку.


}
