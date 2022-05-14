import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {Section} from './Section.js';
import {UserInfo} from './UserInfo.js';

import {PARAMS, initialCards} from '../utils/constants.js';



function handleSubmitPopupUser (event, inputValues) {
  event.preventDefault();

  userInfo.setUserInfo({
    userName: inputValues.fullname,
    userJob: inputValues.job
  });
  popupUser.close();
}

const popupUser = new PopupWithForm(PARAMS.popupUserSelector, handleSubmitPopupUser, PARAMS.formSelector);
const userInfo = new UserInfo({
  userNameSelector: PARAMS.userNameSelector,
  userJobSelector: PARAMS.userJobSelector
});

const buttonUser = document.querySelector(PARAMS.buttonUserSelector);
buttonUser.addEventListener('click', () => {
  const { userName, userJob } = userInfo.getUserInfo();
  popupUser.setInputValue(PARAMS.popupInputNameSelector, userName);
  popupUser.setInputValue(PARAMS.popupInputJobSelector, userJob);
  popupUser.open(PARAMS.popupOpenedClass);
  editUserFormValidator.clearErrors();
});
popupUser.setEventListeners(PARAMS.popupButtonCloseClass);



function handleSubmitPopupAddCard (event, inputValues) {
  event.preventDefault();
  addCardList([inputValues]);
  popupAddCard.close();
}

const popupAddCard = new PopupWithForm(PARAMS.popupAddCardSelector, handleSubmitPopupAddCard, PARAMS.formSelector);

const buttonAddCard = document.querySelector(PARAMS.buttonAddCardSelector);
buttonAddCard.addEventListener('click', () => {
  popupAddCard.open(PARAMS.popupOpenedClass);
  addCardFormValidator.clearErrors();
});
popupAddCard.setEventListeners(PARAMS.popupButtonCloseClass);



const popupImage = new PopupWithImage({
  popupSelector: PARAMS.popupImageSelector,
  popupImageImgSelector: PARAMS.popupImageImgSelector,
  popupImageTitleSelector: PARAMS.popupImageTitleSelector
});
const handleCardClick = (link, name) => {
  popupImage.open(link, name, PARAMS.popupOpenedClass);
}
popupImage.setEventListeners(PARAMS.popupButtonCloseClass);



function addCardList(itemList) {
  const cardList = new Section({
      items: itemList,
      renderer: ({ link, name }) => {
        const card = new Card(link, name, PARAMS.cardTemplateSelector, handleCardClick).getCard();
        cardList.addItemPrepend(card);
      }
    },
    PARAMS.cardsItemsSelector
  );
  cardList.renderItems();
}
addCardList(initialCards);



const popupAddCardForm = document.querySelector(PARAMS.popupAddCardSelector).querySelector(PARAMS.formSelector);
const addCardFormValidator = new FormValidator(PARAMS, popupAddCardForm);
addCardFormValidator.enableValidation();

const popupEditUserForm = document.querySelector(PARAMS.popupUserSelector).querySelector(PARAMS.formSelector);
const editUserFormValidator = new FormValidator(PARAMS, popupEditUserForm);
editUserFormValidator.enableValidation();
