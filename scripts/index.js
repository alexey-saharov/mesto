import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {Popup} from './Popup.js';
import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {Section} from './Section.js';
import {UserInfo} from './UserInfo.js';

import {
  profileName,
  profileJob,
  btnEditProfile,
  btnAddCard,
  cardsItemsSelector,
  // cardsItems,
  cardTemplateSelector,

  popupProfileSelector,
  popupEditProfile,
  popupEditProfileForm,
  popupEditProfileInputName,
  popupEditProfileInputJob,

  popupAddCard,
  popupAddCardForm,
  popupAddCardInputPlaceName,
  popupAddCardInputPlaceLink,

  popupImage,
  popupImageImg,
  popupImageTitle,

  popupList,
  ESC_KEY,
  PARAMS,

  initialCards
} from '../utils/constants.js';





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
  const card = renderCard(popupAddCardInputPlaceLink.value, popupAddCardInputPlaceName.value);
  addCard(card);
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

const cardList = new Section({
    items: initialCards,
    renderer: ({ link, name }) => {
      const card = new Card(link, name, cardTemplateSelector, handleCLickImage).getCard();
      cardList.addItemPrepend(card);
    }
  },
  cardsItemsSelector
);

cardList.renderItems();




const addCardFormValidator = new FormValidator(PARAMS, popupAddCardForm);
addCardFormValidator.enableValidation();

const editProfileFormValidator = new FormValidator(PARAMS, popupEditProfileForm);
editProfileFormValidator.enableValidation();


// Свяжите класс Card c попапом. Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick.
// Эта функция должна открывать попап с картинкой при клике на карточку.
