const enableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove(inactiveButtonClass);
}

const disableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(inactiveButtonClass);
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, inactiveButtonClass);
  } else {
    enableButton(buttonElement, inactiveButtonClass);
  }
};

const showError = (params, inputElement, errorElement) => {
  errorElement.classList.add(params.errorClass);
  inputElement.classList.add(params.inputErrorClass);
}

const hideError = (params, inputElement, errorElement) => {
  errorElement.classList.remove(params.errorClass);
  inputElement.classList.remove(params.inputErrorClass);
}

const validateInput = (params, formElement, inputElement) => {
  const errorElement = inputElement.parentNode.querySelector(`#${inputElement.id}-error`);
  if (!inputElement.validity.valid) {
    errorElement.textContent = inputElement.validationMessage;
    showError(params, inputElement, errorElement);
  } else {
    errorElement.textContent = '';
    hideError(params, inputElement, errorElement);
  }
}

const setEventListeners = (params, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
  const buttonElement = formElement.querySelector(params.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      validateInput(params, formElement, inputElement);
      toggleButtonState(inputList, buttonElement, params.inactiveButtonClass);
     });
  });
}

const enableValidation = (params) => {
  const formList = Array.from(document.querySelectorAll(params.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(params, formElement);
  });
}

enableValidation(PARAMS);
