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

const popupAddCard = document.querySelector('.popup_type_card-add');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');
const popupAddCardInputPlaceName = popupAddCard.querySelector('.popup__input_placename');
const popupAddCardInputPlaceNameError = popupAddCard.querySelector(`#${popupAddCardInputPlaceName.id}-error`);
const popupAddCardInputPlaceLink = popupAddCard.querySelector('.popup__input_placelink');
const popupAddCardInputPlaceLinkError = popupAddCard.querySelector(`#${popupAddCardInputPlaceLink.id}-error`);
const popupAddCardBtnSubmit = popupAddCard.querySelector('.popup__button-submit');

const popupImage = document.querySelector('.popup_type_image');
const popupImageImg = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');

const popupList = [popupEditProfile, popupAddCard, popupImage];

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
  for (let i = 0; i < popupList.length; i++) {
    if (popupList[i].classList.contains('popup_opened')) {
      return popupList[i];
    }
  }
}

function handleEscKey(event) {
  if (event.key === ESC_KEY) {
    closePopup(getOpenedPopup());
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleEscKey);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleEscKey);
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
popupEditProfile.addEventListener('submit', handleSubmitPopupEditProfile);

btnAddCard.addEventListener('click', () => {
  popupAddCardForm.reset();
  disableButton(popupAddCardBtnSubmit, PARAMS.inactiveButtonClass);
  hideError(PARAMS, popupAddCardInputPlaceName, popupAddCardInputPlaceNameError);
  hideError(PARAMS, popupAddCardInputPlaceLink, popupAddCardInputPlaceLinkError);
  openPopup(popupAddCard);
});
popupAddCard.addEventListener('submit', handleSubmitPopupAddCard);

popupList.forEach(popupElement => {
  popupElement.addEventListener('mousedown', event => {
    if (event.target.classList.contains('popup_opened')) {
      closePopup(popupElement);
    }
    if (event.target.classList.contains('popup__button-close')) {
      closePopup(popupElement);
    }
  })
});

function invertHeartActive(event) {
  event.target.classList.toggle('cards__heart_active');
}

function removeCard(event) {
  event.target.closest('.cards__item').remove();
}

function createCard (link, name) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  const cardImageElement = cardElement.querySelector('.cards__img');
  cardImageElement.src = link;
  cardImageElement.alt = name;
  cardElement.querySelector('.cards__title').textContent = name;

  const heartElement = cardElement.querySelector('.cards__heart');
  heartElement.addEventListener('click', invertHeartActive);

  const trashElement = cardElement.querySelector('.cards__trash');
  trashElement.addEventListener('click', removeCard);

  cardImageElement.addEventListener('click', ()=> {
    popupImageImg.src = link;
    popupImageImg.alt = name;
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
