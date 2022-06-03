// import './index.css';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';

import {PARAMS} from '../utils/constants.js';
import {PopupWithConfirmation} from "../components/PopupWithConfirmation.js";

const userAvatarButton = document.querySelector(PARAMS.userAvatarButtonSelector);
const buttonUser = document.querySelector(PARAMS.buttonUserSelector);
const buttonAddCard = document.querySelector(PARAMS.buttonAddCardSelector);
const popupUserAvatarForm = document.querySelector(PARAMS.popupUpdateAvatar).querySelector(PARAMS.formSelector);
const popupEditUserForm = document.querySelector(PARAMS.popupUserSelector).querySelector(PARAMS.formSelector);
const popupAddCardForm = document.querySelector(PARAMS.popupAddCardSelector).querySelector(PARAMS.formSelector);
const popupUpdateAvatarSubmitButton = popupUserAvatarForm.querySelector(PARAMS.submitButtonSelector);
const popupEditUserSubmitButton = popupEditUserForm.querySelector(PARAMS.submitButtonSelector);
const popupAddCardSubmitButton = popupAddCardForm.querySelector(PARAMS.submitButtonSelector);

const api = new Api({
  baseUrl: PARAMS.serverUrl,
  headers: {
    authorization: PARAMS.token,
    'Content-Type': 'application/json'
  }
});

function createCard({ id, link, name, havingTrash, havingLikeActive, countLikes }) {
  return new Card(id, link, name, havingTrash, havingLikeActive, countLikes, PARAMS.cardTemplateSelector,
    handleCardClick, handleCardLikeCLick, handleCardRemoveCLick).getCard();
}

function handleCardClick(link, name) {
  popupImage.open(link, name);
}

function handleCardLikeCLick(idCard, heartElement, countLikesElement) {
  function showCountLikes(count) {
    countLikesElement.textContent = (!count) ? '' : count;
  }
  if (heartElement.classList.contains(PARAMS.cardLikeClass)) {
    api.deleteLikeCard({ _id: idCard })
      .then(res => {
        showCountLikes(res.likes.length);
        heartElement.classList.remove(PARAMS.cardLikeClass);
      })
      .catch(err => console.log(err));
  } else {
    api.likeCard({ _id: idCard })
      .then(res => {
        showCountLikes(res.likes.length);
        heartElement.classList.add(PARAMS.cardLikeClass);
      })
      .catch(err => console.log(err));
  }
}

function handleSubmitPopupConfirmation(idCard, cardElement) {
  api.deleteCard({ _id: idCard})
    .then(() => {
      popupConfirmation.close();
      cardElement.remove();
      cardElement = null;
    })
    .catch(err => console.log(err));
}

const popupConfirmation = new PopupWithConfirmation(PARAMS.popupConfirmationSelector, PARAMS.formSelector);

function handleCardRemoveCLick(id, cardElement) {
  popupConfirmation.open(id, cardElement, handleSubmitPopupConfirmation);
  popupConfirmation.setEventListeners();
}

function handleSubmitPopupUser(inputValues) {
  popupEditUserSubmitButton.textContent = 'Сохранение...';
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

let cardList = {};

api.getUser()
  .then(res => {
    userInfo.setUserInfo({
      userName: res.name,
      userJob: res.about,
    });
    userInfo.setUserAvatar({
      userAvatarSrc: res.avatar,
    });
    const myUserId = res._id;

    api.getInitialCards()
      .then(res => {
        cardList = new Section({
            items: res,
            renderer: ({ _id, link, name, owner, likes }) => {
              const havingTrash = (owner._id === myUserId);
              const havingLikeActive = !!likes.find(item => item._id === myUserId);
              const card = createCard({ id: _id, link, name, havingTrash,
                havingLikeActive, countLikes: likes.length });
              cardList.addItemAppend(card);
            }
          },
          PARAMS.cardsItemsSelector
        );
        cardList.renderItems();
      })
      .catch(err => err);

  })
  .catch(err => err);

function handleSubmitPopupAddCard (inputValues) {
  popupAddCardSubmitButton.textContent = 'Сохранение...';
  api.addCard({
    name: inputValues.name,
    link: inputValues.link
  })
    .then(res => {
      const idCard = res._id;
      const havingTrash = true;
      const havingLikeActive = false;
      const card = createCard({ id: idCard, link: inputValues.link, name: inputValues.name,
        havingTrash, havingLikeActive, countLikes: 0 });
      cardList.addItemPrepend(card);
      popupAddCard.close();
    })
    .catch(err => console.log(err));
}

const popupAddCard = new PopupWithForm(PARAMS.popupAddCardSelector, handleSubmitPopupAddCard, PARAMS.formSelector);

const popupImage = new PopupWithImage({
  popupSelector: PARAMS.popupImageSelector,
  popupImageImgSelector: PARAMS.popupImageImgSelector,
  popupImageTitleSelector: PARAMS.popupImageTitleSelector
});

const addCardFormValidator = new FormValidator(PARAMS, popupAddCardForm);
const editUserFormValidator = new FormValidator(PARAMS, popupEditUserForm);
const userAvatarFormValidator = new FormValidator(PARAMS, popupUserAvatarForm);

buttonUser.addEventListener('click', () => {
  const { userName, userJob } = userInfo.getUserInfo();
  popupUser.setInputValue(PARAMS.popupInputNameSelector, userName);
  popupUser.setInputValue(PARAMS.popupInputJobSelector, userJob);
  popupEditUserSubmitButton.textContent = 'Сохранить';
  popupUser.open();
  editUserFormValidator.clearErrors();
});
popupUser.setEventListeners();

buttonAddCard.addEventListener('click', () => {
  popupAddCardSubmitButton.textContent = 'Создать';
  popupAddCard.open();
  addCardFormValidator.clearErrors();
});

function handleSubmitPopupUserUpdateAvatar(inputValues) {
  popupUpdateAvatarSubmitButton.textContent = 'Сохранение...';
  api.updateUserAvatar({ avatar: inputValues.link_avatar })
    .then(res => {
      userInfo.setUserAvatar({
        userAvatarSrc: res.avatar,
      });
      popupUserAvatar.close();
    })
    .catch(err => console.log(err));
}

const popupUserAvatar = new PopupWithForm(PARAMS.popupUpdateAvatar, handleSubmitPopupUserUpdateAvatar,
  PARAMS.formSelector);
userAvatarButton.addEventListener('click', () => {
  popupUpdateAvatarSubmitButton.textContent = 'Сохранить';
  popupUserAvatar.open();
  userAvatarFormValidator.clearErrors();
});

popupAddCard.setEventListeners();
popupImage.setEventListeners();
popupUserAvatar.setEventListeners();

editUserFormValidator.enableValidation();
addCardFormValidator.enableValidation();
userAvatarFormValidator.enableValidation();
