import Card from './Card.js';
import FormValidator from './FormValidator.js';


const profileName = document.querySelector('.profile__name-text');
const profileJob = document.querySelector('.profile__job-text');
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnAddCard = document.querySelector('.profile__add-button');
const cardsItems = document.querySelector('.cards__items');
const cardTemplateSelector = '#card__template';

const popupEditProfile = document.querySelector('.popup_type_profile');
const popupEditProfileForm = popupEditProfile.querySelector('.popup__form');
const popupEditProfileInputName = popupEditProfile.querySelector('.popup__input_fullname');
const popupEditProfileInputJob = popupEditProfile.querySelector('.popup__input_job');

const popupAddCard = document.querySelector('.popup_type_card-add');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');
const popupAddCardInputPlaceName = popupAddCard.querySelector('.popup__input_placename');
const popupAddCardInputPlaceLink = popupAddCard.querySelector('.popup__input_placelink');

const popupImage = document.querySelector('.popup_type_image');
const popupImageImg = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');

const popupList = [popupEditProfile, popupAddCard, popupImage];

const ESC_KEY = "Escape";

export const PARAMS = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


const handleEscKey = (event) => {
  if (event.key === ESC_KEY) {
    closePopup(document.querySelector('.popup_opened'));
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
  profileName.textContent = popupEditProfileInputName.value;
  profileJob.textContent = popupEditProfileInputJob.value;
  closePopup(popupEditProfile);
}

function handleSubmitPopupAddCard (event) {
  event.preventDefault();
  renderCard(popupAddCardInputPlaceLink.value, popupAddCardInputPlaceName.value);
  closePopup(popupAddCard);
}

btnEditProfile.addEventListener('click', () => {
  popupEditProfileInputName.value = profileName.textContent;
  popupEditProfileInputJob.value = profileJob.textContent;
  editProfileFormValidator.clearErrors();
  openPopup(popupEditProfile);
});
popupEditProfile.addEventListener('submit', handleSubmitPopupEditProfile);


btnAddCard.addEventListener('click', () => {
  popupAddCardForm.reset();
  addCardFormValidator.clearErrors();
  openPopup(popupAddCard);
});
popupAddCard.addEventListener('submit', handleSubmitPopupAddCard);


popupList.forEach(popupElement => {
  popupElement.addEventListener('mousedown', event => {
    if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__button-close')) {
      closePopup(popupElement);
    }
  });
});

const handleCLickImage = (link, name) => {
  popupImageImg.src = link;
  popupImageImg.alt = name;
  popupImageTitle.textContent = name;
  openPopup(popupImage);
}

function renderCard (link, name) {
  return new Card(link, name, cardTemplateSelector, handleCLickImage).getCard();
}

function addCard (card) {
  cardsItems.prepend(card);
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

initialCards.forEach((item) => {
  const card = renderCard(item.link, item.name);
  addCard(card);
});

const addCardFormValidator = new FormValidator(PARAMS, popupAddCardForm);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(PARAMS, popupEditProfileForm);
editProfileFormValidator.enableValidation();
