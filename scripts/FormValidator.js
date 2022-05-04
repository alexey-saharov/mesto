class FormValidator {
  _params;
  _form;

  _inputList;
  _button;

  constructor(params, form) {
    this._params = params;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._params.inputSelector));
    this._button = this._form.querySelector(this._params.submitButtonSelector);
  }

  _enableButton() {
    this._button.disabled = false;
    this._button.classList.remove(this._params.inactiveButtonClass);
  }

  _disableButton() {
    this._button.disabled = true;
    this._button.classList.add(this._params.inactiveButtonClass);
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  };

  _showError(input, errorString) {
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
    errorElement.textContent = errorString;
    errorElement.classList.add(this._params.errorClass);
    input.classList.add(this._params.inputErrorClass);
  }

  _hideError(input) {
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this._params.errorClass);
    input.classList.remove(this._params.inputErrorClass);
  }

  _validateInput(input) {
    if (!input.validity.valid) {
      const errorString = input.validationMessage;
      this._showError(input, errorString);
    } else {
      this._hideError(input);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._validateInput(input);
        this._toggleButtonState();
      });
    });
  }

  clearErrors() {
    this._inputList.forEach((input) => {
      const errorElement = input.closest(this._params.formSelector).querySelector(`#${input.id}-error`);
      this._hideError(input, errorElement);
    });
    this._disableButton();
  }


  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;
