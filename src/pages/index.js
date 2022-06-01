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

function createCard({ id, link, name, havingTrash, countLikes }) {
  return new Card(id, link, name, havingTrash, countLikes, PARAMS.cardTemplateSelector, handleCardClick, handleCardLikeCLick,
    handleCardRemoveCLick).getCard();
}

function handleCardClick(link, name) {
  popupImage.open(link, name);
}

// todo если лайкнул карточку раньше, то показать это при начальной загрузке карточек

function handleCardLikeCLick(heartElement, countLikesElement) {
  //добавить или убрать 1 лайк на сервере
    //отобразить итоговое кол-во на странице


  let count = +countLikesElement.textContent; // todo брать из сервера, а не из верстки
  if (heartElement.classList.contains(PARAMS.cardLikeClass)) {
    count--;
    heartElement.classList.remove(PARAMS.cardLikeClass);
  } else {
    count++;
    heartElement.classList.add(PARAMS.cardLikeClass);
  }
  countLikesElement.textContent = (!count) ? '' : count;
}

function handleCardRemoveCLick(id, cardElement) {
  api.deleteCard({ _id: id})
    .then(() => {
      cardElement.remove();
      cardElement = null;
    })
    .catch(err => console.log(err));
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
              const card = createCard({ id: _id, link, name, havingTrash, countLikes: likes.length });
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
  api.addCard({
    name: inputValues.name,
    link: inputValues.link
  })
    .then(res => {
      const idCard = res._id;
      const havingTrash = true;
      const card = createCard({ id: idCard, link: inputValues.link, name: inputValues.name,
        havingTrash, countLikes: 0 });
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
