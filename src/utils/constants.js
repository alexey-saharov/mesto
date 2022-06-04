export const ESC_KEY = 'Escape';

export const PARAMS = {
  userNameSelector: '.profile__name-text',
  userJobSelector: '.profile__job-text',
  userAvatarSelector: '.profile__photo',
  userAvatarButtonSelector: '.profile__edit-avatar',
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

  popupUpdateAvatar: '.popup_type_avatar',
  popupUpdateAvatarSubmitButtonLoadingText: 'Сохранение...',
  popupUpdateAvatarSubmitButtonStaticText: 'Сохранить',

  popupUserSelector: '.popup_type_profile',
  popupInputNameSelector: '.popup__input_fullname',
  popupInputJobSelector: '.popup__input_job',
  popupUserSubmitButtonLoadingText: 'Сохранение...',
  popupUserSubmitButtonStaticText: 'Сохранить',

  popupAddCardSelector: '.popup_type_card-add',
  popupAddCardSubmitButtonLoadingText: 'Сохранение...',
  popupAddCardSubmitButtonStaticText: 'Создать',

  popupImageSelector: '.popup_type_image',
  popupImageImgSelector: '.popup__image',
  popupImageTitleSelector: '.popup__image-title',

  popupConfirmationSelector: '.popup_type_confirmation',
  popupConfirmationSubmitButtonLoadingText: 'Удаление...',
  popupConfirmationSubmitButtonStaticText: 'Да',

  cardsItemsSelector: '.cards__items',
  cardItemSelector: '.cards__item',
  cardImgSelector: '.cards__img',
  cardTitleSelector: '.cards__title',
  cardHeartSelector: '.cards__heart',
  cardCountLikesSelector: '.cards__count-likes',
  cardTrashSelector: '.cards__trash',
  cardTemplateSelector:'#card__template',
  cardLikeClass: 'cards__heart_active',

  serverUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
  token: '29779b63-56c9-48f1-bf2c-946b66c63b59',
};

export const buttonUserAvatar = document.querySelector(PARAMS.userAvatarButtonSelector);
export const buttonUserProfile = document.querySelector(PARAMS.buttonUserSelector);
export const buttonAddCard = document.querySelector(PARAMS.buttonAddCardSelector);

export const popupUserAvatarForm = document.querySelector(PARAMS.popupUpdateAvatar).querySelector(PARAMS.formSelector);
export const popupUserProfileForm = document.querySelector(PARAMS.popupUserSelector).querySelector(PARAMS.formSelector);
export const popupAddCardForm = document.querySelector(PARAMS.popupAddCardSelector).querySelector(PARAMS.formSelector);
