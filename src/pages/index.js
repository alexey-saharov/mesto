import './index.css';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';

import {PARAMS, initialCards} from '../utils/constants.js';



const buttonUser = document.querySelector(PARAMS.buttonUserSelector);
const buttonAddCard = document.querySelector(PARAMS.buttonAddCardSelector);
const popupAddCardForm = document.querySelector(PARAMS.popupAddCardSelector).querySelector(PARAMS.formSelector);
const popupEditUserForm = document.querySelector(PARAMS.popupUserSelector).querySelector(PARAMS.formSelector);



function createCard({ link, name }) {
  const card = new Card(link, name, PARAMS.cardTemplateSelector, handleCardClick).getCard();
  cardList.addItemPrepend(card);
}

const cardList = new Section({
    items: initialCards,
    renderer: createCard
  },
  PARAMS.cardsItemsSelector
);

cardList.renderItems();



function handleCardClick(link, name) {
  popupImage.open(link, name);
}



function handleSubmitPopupUser(inputValues) {
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



function handleSubmitPopupAddCard (inputValues) {
  createCard(inputValues);
  popupAddCard.close();
}

const popupAddCard = new PopupWithForm(PARAMS.popupAddCardSelector, handleSubmitPopupAddCard, PARAMS.formSelector);



const popupImage = new PopupWithImage({
  popupSelector: PARAMS.popupImageSelector,
  popupImageImgSelector: PARAMS.popupImageImgSelector,
  popupImageTitleSelector: PARAMS.popupImageTitleSelector
});



const addCardFormValidator = new FormValidator(PARAMS, popupAddCardForm);
const editUserFormValidator = new FormValidator(PARAMS, popupEditUserForm);



buttonUser.addEventListener('click', () => {
  const { userName, userJob } = userInfo.getUserInfo();
  popupUser.setInputValue(PARAMS.popupInputNameSelector, userName);
  popupUser.setInputValue(PARAMS.popupInputJobSelector, userJob);
  popupUser.open();
  editUserFormValidator.clearErrors();
});
popupUser.setEventListeners();



buttonAddCard.addEventListener('click', () => {
  popupAddCard.open();
  addCardFormValidator.clearErrors();
});
popupAddCard.setEventListeners();



popupImage.setEventListeners();



editUserFormValidator.enableValidation();
addCardFormValidator.enableValidation();
