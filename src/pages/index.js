// import './index.css';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';

import {PARAMS} from '../utils/constants.js';

const buttonUser = document.querySelector(PARAMS.buttonUserSelector);
const buttonAddCard = document.querySelector(PARAMS.buttonAddCardSelector);
const popupAddCardForm = document.querySelector(PARAMS.popupAddCardSelector).querySelector(PARAMS.formSelector);
const popupEditUserForm = document.querySelector(PARAMS.popupUserSelector).querySelector(PARAMS.formSelector);

const api = new Api({
  baseUrl: PARAMS.serverUrl,
  headers: {
    authorization: PARAMS.token,
    'Content-Type': 'application/json'
  }
});

function createCard({ link, name }) {
  return new Card(link, name, PARAMS.cardTemplateSelector, handleCardClick).getCard();
}

function handleCardClick(link, name) {
  popupImage.open(link, name);
}

function handleSubmitPopupUser(inputValues) {
  api.updateUserData({
    name: inputValues.fullname,
    about: inputValues.job
  })
    .catch(err => console.log(err));

  userInfo.setUserInfo({
    userName: inputValues.fullname,
    userJob: inputValues.job
  });
  popupUser.close();
}

const popupUser = new PopupWithForm(PARAMS.popupUserSelector, handleSubmitPopupUser, PARAMS.formSelector);
const userInfo = new UserInfo({
  userNameSelector: PARAMS.userNameSelector,
  userJobSelector: PARAMS.userJobSelector,
  userAvatarSelector: PARAMS.userAvatarSelector,
});

api.getUser()
  .then(res => {
    userInfo.setUserInfo({
      userName: res.name,
      userJob: res.about,
    });
    userInfo.setUserAvatar({
      userAvatarSrc: res.avatar,
    });

  })
  .catch(err => err);

let cardList = {};

api.getInitialCards()
  .then(res => {
    cardList = new Section({
        items: res,
        renderer: ({ link, name }) => {
          const card = createCard({ link, name });
          cardList.addItemPrepend(card);
        }
      },
      PARAMS.cardsItemsSelector
    );
    cardList.renderItems();
  })
  .catch(err => err);

function handleSubmitPopupAddCard (inputValues) {
  api.addCard({
    name: inputValues.name,
    link: inputValues.link
  })
    .catch(err => console.log(err));

  const card = createCard(inputValues);
  cardList.addItemPrepend(card);
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
