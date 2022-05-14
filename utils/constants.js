
export const buttonProfile = document.querySelector('.profile__edit-button');
//export const btnEditProfile = document.querySelector('.profile__edit-button');
export const btnAddCard = document.querySelector('.profile__add-button');
export const cardsItemsSelector = '.cards__items';
// export const cardsItems = document.querySelector('.cards__items');
export const cardTemplateSelector = '#card__template';


export const popupAddCard = document.querySelector('.popup_type_card-add');
export const popupAddCardForm = popupAddCard.querySelector('.popup__form');
export const popupAddCardInputPlaceName = popupAddCard.querySelector('.popup__input_placename');
export const popupAddCardInputPlaceLink = popupAddCard.querySelector('.popup__input_placelink');

export const ESC_KEY = 'Escape';

export const PARAMS = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',

  userNameSelector: '.profile__name-text',
  userJobSelector: '.profile__job-text',

  popupOpenedClass: 'popup_opened',
  popupButtonCloseClass: 'popup__button-close',

  popupProfileSelector: '.popup_type_profile',
  popupInputNameSelector: '.popup__input_fullname',
  popupInputJobSelector: '.popup__input_job',

  popupImageSelector: '.popup_type_image',
  popupImageImgSelector: '.popup__image',
  popupImageTitleSelector: '.popup__image-title'
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

