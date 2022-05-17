export const ESC_KEY = 'Escape';

export const PARAMS = {
  userNameSelector: '.profile__name-text',
  userJobSelector: '.profile__job-text',
  buttonUserSelector: '.profile__edit-button',
  buttonAddCardSelector: '.profile__add-button',

  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  popupOpenedClass: 'popup_opened',
  popupButtonCloseClass: 'popup__button-close',

  popupUserSelector: '.popup_type_profile',
  popupInputNameSelector: '.popup__input_fullname',
  popupInputJobSelector: '.popup__input_job',

  popupAddCardSelector: '.popup_type_card-add',

  popupImageSelector: '.popup_type_image',
  popupImageImgSelector: '.popup__image',
  popupImageTitleSelector: '.popup__image-title',

  cardsItemsSelector: '.cards__items',
  cardTemplateSelector:'#card__template'
};

const sudak = new URL('../images/cards-sudak.jpg', import.meta.url);
const saintPetersburg = new URL('../images/cards-saint-petersburg.jpg', import.meta.url);
const sochi = new URL('../images/cards-sochi.jpg', import.meta.url);
const irkutskayaObl = new URL('../images/cards-irkutskaya-obl.jpg', import.meta.url);
const altay = new URL('../images/cards-altay.jpg', import.meta.url);
const nalchik = new URL('../images/cards-nalchik.jpg', import.meta.url);

export const initialCards = [
  {
    name: 'Судак',
    link: sudak
  },
  {
    name: 'Санкт-Петербург',
    link: saintPetersburg
  },
  {
    name: 'Сочи',
    link: sochi
  },
  {
    name: 'Иркутская область',
    link: irkutskayaObl
  },
  {
    name: 'Алтай',
    link: altay
  },
  {
    name: 'Нальчик',
    link: nalchik
  }
];
