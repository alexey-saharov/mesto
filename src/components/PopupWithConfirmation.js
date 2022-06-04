import {Popup} from "./Popup.js";
import {PARAMS} from "../utils/constants.js";

export class PopupWithConfirmation extends Popup {
  _handleSubmit;
  _form;
  _idCard;
  _cardElement;
  _popupButton;

  constructor(popupSelector, formSelector) {
    super(popupSelector);
    this._form = document.querySelector(popupSelector).querySelector(formSelector);
    this._popupButton = this._form.querySelector(PARAMS.submitButtonSelector);
  }

  open(idCard, cardElement, handleSubmit) {
    super.open();
    this._handleSubmit = handleSubmit;
    this._idCard = idCard;
    this._cardElement = cardElement;
  }

  renderLoading(isLoading) {
    this._popupButton.textContent = (isLoading)
      ? PARAMS.popupConfirmationSubmitButtonLoadingText
      : PARAMS.popupConfirmationSubmitButtonStaticText;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmit(this._idCard, this._cardElement);
    });
  }
}
