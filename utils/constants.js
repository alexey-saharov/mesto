export const profileName = document.querySelector('.profile__name-text');
export const profileJob = document.querySelector('.profile__job-text');
export const btnEditProfile = document.querySelector('.profile__edit-button');
export const btnAddCard = document.querySelector('.profile__add-button');
export const cardsItemsSelector = '.cards__items';
// export const cardsItems = document.querySelector('.cards__items');
export const cardTemplateSelector = '#card__template';

export const popupProfileSelector = '.popup_type_profile';
export const popupEditProfile = document.querySelector('.popup_type_profile');
export const popupEditProfileForm = popupEditProfile.querySelector('.popup__form');
export const popupEditProfileInputName = popupEditProfile.querySelector('.popup__input_fullname');
export const popupEditProfileInputJob = popupEditProfile.querySelector('.popup__input_job');

export const popupAddCard = document.querySelector('.popup_type_card-add');
export const popupAddCardForm = popupAddCard.querySelector('.popup__form');
export const popupAddCardInputPlaceName = popupAddCard.querySelector('.popup__input_placename');
export const popupAddCardInputPlaceLink = popupAddCard.querySelector('.popup__input_placelink');

export const popupImage = document.querySelector('.popup_type_image');
export const popupImageImg = popupImage.querySelector('.popup__image');
export const popupImageTitle = popupImage.querySelector('.popup__image-title');

export const popupList = document.querySelectorAll('.popup');

export const ESC_KEY = "Escape";

export const PARAMS = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const initialCards = [
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
