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

  buttonProfileSelector: '.profile__edit-button',
  buttonAddCardSelector: '.profile__add-button',

  popupOpenedClass: 'popup_opened',
  popupButtonCloseClass: 'popup__button-close',

  popupProfileSelector: '.popup_type_profile',
  popupInputNameSelector: '.popup__input_fullname',
  popupInputJobSelector: '.popup__input_job',

  popupAddCardSelector: '.popup_type_card-add',

  popupImageSelector: '.popup_type_image',
  popupImageImgSelector: '.popup__image',
  popupImageTitleSelector: '.popup__image-title',

  cardsItemsSelector: '.cards__items',
  cardTemplateSelector:'#card__template'
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

