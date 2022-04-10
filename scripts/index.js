const profileName = document.querySelector('.profile__name-text');
const profileJob = document.querySelector('.profile__job-text');
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnAddCard = document.querySelector('.profile__add-button');
const cardsItems = document.querySelector('.cards__items');
const cardTemplate = cardsItems.querySelector('#card__template').content;

const popupEditProfile = document.querySelector('.popup_type_profile');
const popupEditProfileInputName = popupEditProfile.querySelector('.popup__input_fullname');
const popupEditProfileInputNameError = popupEditProfile.querySelector(`#${popupEditProfileInputName.id}-error`);
const popupEditProfileInputJob = popupEditProfile.querySelector('.popup__input_job');
const popupEditProfileInputJobError = popupEditProfile.querySelector(`#${popupEditProfileInputJob.id}-error`);
const popupEditProfileBtnSubmit = popupEditProfile.querySelector('.popup__button-submit');
const popupEditProfileBtnClose = popupEditProfile.querySelector('.popup__button-close');

const popupAddCard = document.querySelector('.popup_type_card-add');
const popupAddCardInputPlaceName = popupAddCard.querySelector('.popup__input_placename');
const popupAddCardInputPlaceNameError = popupAddCard.querySelector(`#${popupAddCardInputPlaceName.id}-error`);
const popupAddCardInputPlaceLink = popupAddCard.querySelector('.popup__input_placelink');
const popupAddCardInputPlaceLinkError = popupAddCard.querySelector(`#${popupAddCardInputPlaceLink.id}-error`);
const popupAddCardBtnSubmit = popupAddCard.querySelector('.popup__button-submit');
const popupAddCardBtnClose = popupAddCard.querySelector('.popup__button-close');

const popupImage = document.querySelector('.popup_type_image');
const popupImageImg = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');
const popupImageBtnClose = popupImage.querySelector('.popup__button-close');

const ESC_KEY = "Escape";

const PARAMS = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


function getOpenedPopup() {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  for (let i = 0; i <= popupList.length - 1; i++) {
    if (popupList[i].classList.contains('popup_opened')) {
      return popupList[i];
    }
  }
}

function onDocumentKeyUpEsc(event) {
  if (event.key === ESC_KEY) {
    closePopup(getOpenedPopup());
  }
}

function onPopupOverlayClick(event) {
  if (event.target.classList.contains('popup_opened')) {
    closePopup(event.target);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', onDocumentKeyUpEsc);
  popup.addEventListener('click', onPopupOverlayClick);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', onDocumentKeyUpEsc);
  popup.removeEventListener('click', onPopupOverlayClick);
}

function handleSubmitPopupEditProfile (event) {
  event.preventDefault();
  const currentForm = event.target;
  if (currentForm.checkValidity()) {
    profileName.textContent = popupEditProfileInputName.value;
    profileJob.textContent = popupEditProfileInputJob.value;
    closePopup(popupEditProfile);
  }
}

function handleSubmitPopupAddCard (event) {
  event.preventDefault();
  const currentForm = event.target;
  if (currentForm.checkValidity()) {
    renderCard(popupAddCardInputPlaceLink.value, popupAddCardInputPlaceName.value);
    closePopup(popupAddCard);
  }
}

btnEditProfile.addEventListener('click', () => {
  popupEditProfileInputName.value = profileName.textContent;
  popupEditProfileInputJob.value = profileJob.textContent;
  if (popupEditProfileInputName.value && popupEditProfileInputJob.value) {
    enableButton(popupEditProfileBtnSubmit, PARAMS.inactiveButtonClass);
  } else {
    disableButton(popupEditProfileBtnSubmit, PARAMS.inactiveButtonClass);
  }
  hideError(PARAMS, popupEditProfileInputName, popupEditProfileInputNameError);
  hideError(PARAMS, popupEditProfileInputJob, popupEditProfileInputJobError);
  openPopup(popupEditProfile);
});
popupEditProfileBtnClose.addEventListener('click', () => closePopup(popupEditProfile));
popupEditProfile.addEventListener('submit', handleSubmitPopupEditProfile);

btnAddCard.addEventListener('click', () => {
  popupAddCardInputPlaceName.value = '';
  popupAddCardInputPlaceLink.value = '';
  disableButton(popupAddCardBtnSubmit, PARAMS.inactiveButtonClass);
  hideError(PARAMS, popupAddCardInputPlaceName, popupAddCardInputPlaceNameError);
  hideError(PARAMS, popupAddCardInputPlaceLink, popupAddCardInputPlaceLinkError);
  openPopup(popupAddCard);
});
popupAddCardBtnClose.addEventListener('click', () => closePopup(popupAddCard));
popupAddCard.addEventListener('submit', handleSubmitPopupAddCard);

popupImageBtnClose.addEventListener('click', () => closePopup(popupImage));

function invertHeartActive(event) {
  event.target.classList.toggle('cards__heart_active');
}

function removeCard(event) {
  event.target.parentElement.remove();
}

function createCard (link, name) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__img').src = link;
  cardElement.querySelector('.cards__img').alt = name;
  cardElement.querySelector('.cards__title').textContent = name;

  const heartElement = cardElement.querySelector('.cards__heart');
  heartElement.addEventListener('click', invertHeartActive);

  const trashElement = cardElement.querySelector('.cards__trash');
  trashElement.addEventListener('click', removeCard);

  const imageElement = cardElement.querySelector('.cards__img');
  imageElement.addEventListener('click', (event) => {
    popupImageImg.setAttribute('src', event.target.src);
    popupImageTitle.textContent = name;
    openPopup(popupImage);
  });

  return cardElement;
}

function renderCard (link, name) {
  cardsItems.prepend(createCard(link, name));
}

const initialCards = [
  {
    name: 'Судак',
    link: './images/cards-sudak.webp'
  },
  {
    name: 'Санкт-Петербург',
    link: './images/cards-saint-petersburg.webp'
  },
  {
    name: 'Сочи',
    link: './images/cards-sochi.webp'
  },
  {
    name: 'Иркутская область',
    link: './images/cards-irkutskaya-obl.webp'
  },
  {
    name: 'Алтай',
    link: './images/cards-altay.webp'
  },
  {
    name: 'Нальчик',
    link: './images/cards-nalchik.webp'
  }
];

initialCards.forEach(item => renderCard(item.link, item.name));
