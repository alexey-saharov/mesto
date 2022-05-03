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

  _enableButton(inactiveButtonClass) {
    this._button.disabled = false;
    this._button.classList.remove(inactiveButtonClass);
  }

  _disableButton(inactiveButtonClass) {
    this._button.disabled = true;
    this._button.classList.add(inactiveButtonClass);
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inactiveButtonClass) {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableButton(inactiveButtonClass);
    } else {
      this._enableButton(inactiveButtonClass);
    }
  };

  _showError(input, errorElement) {
    errorElement.classList.add(this._params.errorClass);
    input.classList.add(this._params.inputErrorClass);
  }

  _hideError(input, errorElement) {
    errorElement.classList.remove(this._params.errorClass);
    input.classList.remove(this._params.inputErrorClass);
  }

  _validateInput(input) {
    const errorElement = input.parentNode.querySelector(`#${input.id}-error`);
    if (!input.validity.valid) {
      errorElement.textContent = input.validationMessage;
      this._showError(input, errorElement);
    } else {
      errorElement.textContent = '';
      this._hideError(input, errorElement);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._validateInput(input);
        this._toggleButtonState(this._params.inactiveButtonClass);
      });
    });
  }

  clearErrors() {
    this._inputList.forEach((input) => {
      const errorElement = input.closest(this._params.formSelector).querySelector(`#${input.id}-error`);
      this._hideError(input, errorElement);
    });
    this._disableButton(this._params.inactiveButtonClass);
  }


  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;
