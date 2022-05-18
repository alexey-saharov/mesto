import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  _handleSubmit;
  _form;

  constructor(popupSelector, handleSubmit, formSelector) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = document.querySelector(popupSelector).querySelector(formSelector);
  }

  _getInputValues = () => {
    return Object.fromEntries(new FormData(this._form));
  }

  setInputValue = (inputSelector, inputValue) => {
    this._form.querySelector(inputSelector).value = inputValue;
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
