import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  _submitter;
  _form;

  constructor(popupSelector, submitter, formSelector) {
    super(popupSelector);
    this._submitter = submitter;
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

  setEventListeners(popupButtonCloseClass) {
    super.setEventListeners(popupButtonCloseClass);
    this._form.addEventListener('submit', (event) => {
      this._submitter(event, this._getInputValues())
    });
  }
}
