import {Popup} from "./Popup.js";
import {PARAMS} from "../utils/constants.js";

export class PopupWithForm extends Popup {
  _handleSubmit;
  _form;
  _popupButton;
  _popupButtonLoadingString;
  _popupButtonStaticString;

  constructor(popupSelector, handleSubmit, formSelector, popupButtonLoadingString, popupButtonStaticString) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = document.querySelector(popupSelector).querySelector(formSelector);
    this._popupButton = this._form.querySelector(PARAMS.submitButtonSelector);
    this._popupButtonLoadingString = popupButtonLoadingString;
    this._popupButtonStaticString = popupButtonStaticString;
  }

  _getInputValues = () => {
    return Object.fromEntries(new FormData(this._form));
  }

  setInputValue = (inputSelector, inputValue) => {
    this._form.querySelector(inputSelector).value = inputValue;
  }

  renderLoading(isLoading) {
    this._popupButton.textContent = (isLoading)
      ? this._popupButtonLoadingString
      : this._popupButtonStaticString;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmit(this._getInputValues())
    });
  }
}
