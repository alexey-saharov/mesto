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

  _enableButton(button, inactiveButtonClass) {
    button.disabled = false;
    button.classList.remove(inactiveButtonClass);
  }

  _disableButton(button, inactiveButtonClass) {
    button.disabled = true;
    button.classList.add(inactiveButtonClass);
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(buttonElement, inactiveButtonClass);
    } else {
      this._enableButton(buttonElement, inactiveButtonClass);
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
        this._toggleButtonState(this._inputList, this._button, this._params.inactiveButtonClass);
      });
    });
  }

  clearErrors() {
    this._inputList.forEach((input) => {
      const errorElement = input.closest(this._params.formSelector).querySelector(`#${input.id}-error`);
      this._hideError(input, errorElement);
    });
    this._disableButton(this._button, this._params.inactiveButtonClass);
  }


  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;
