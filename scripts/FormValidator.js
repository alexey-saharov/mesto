class FormValidator {
  _params;
  _form;

  constructor(params, form) {
    this._params = params;
    this._form = form;
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
    const inputList = Array.from(this._form.querySelectorAll(this._params.inputSelector));
    const button = this._form.querySelector(this._params.submitButtonSelector);

    inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._validateInput(input);
        this._toggleButtonState(inputList, button, this._params.inactiveButtonClass);
      });
    });

    this._form.addEventListener('reset', () => {
      inputList.forEach((input) => {
        const errorElement = input.closest(this._params.formSelector).querySelector(`#${input.id}-error`);
        this._hideError(input, errorElement);
      });

      const submitButton = this._form.querySelector(this._params.submitButtonSelector);
      this._disableButton(submitButton, this._params.inactiveButtonClass);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;
