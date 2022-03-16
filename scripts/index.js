const name = document.querySelector('.profile__name-text');
const job = document.querySelector('.profile__job-text');

const editProfileButton = document.querySelector('.profile__edit-button');

const formElement = document.querySelector('.popup');
const nameInput = formElement.querySelector('.popup__input-name');
const jobInput = formElement.querySelector('.popup__input-job');
const formCloseButton = formElement.querySelector('.popup__close-button-img');
const formSaveButton = formElement.querySelector('.popup__submit-button');

const EnterKey = 'Enter';
const EscKey = 'Escape';


function openPopup() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  formElement.classList.add('popup_opened');
  document.addEventListener('keyup', onDocumentKeyUp);
  formSaveButton.focus();
}

editProfileButton.addEventListener('click', openPopup);

function closePopup() {
  formElement.classList.remove('popup_opened');
  document.removeEventListener('keyup', onDocumentKeyUp);
}

formCloseButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

function onDocumentKeyUp(event) {
  if (event.key === EnterKey) {
    formSubmitHandler();
  }
  if (event.key === EscKey) {
    closePopup();
  }
}
