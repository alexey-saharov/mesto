import './index.css';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from '../components/Api.js';

import {PopupWithConfirmation} from "../components/PopupWithConfirmation.js";
import {
  PARAMS,
  buttonUserAvatar,
  buttonUserProfile,
  buttonAddCard,

  popupUserAvatarForm,
  popupUserProfileForm,
  popupAddCardForm,
} from '../utils/constants.js';

const api = new Api({
  baseUrl: PARAMS.serverUrl,
  headers: {
    authorization: PARAMS.token,
    'Content-Type': 'application/json'
  }
});

function createCard(cardData) {
  const card = new Card({
    cardData,

    handleImageClick: (link, name) => {
      popupImage.open(link, name);
    },

    handleLikeClick: (card) => {
      api.toggleLikeCard(card.getId(), !card.isLiked())
        .then(res => {
          card.toggleLikeStatus();
          card.showCountLikes(res.likes.length);
        })
        .catch(err => console.log(err));
    },

    handleRemoveClick: (id, cardElement) => {
      popupConfirmation.renderLoading(false);
      popupConfirmation.open(id, cardElement, handleSubmitPopupConfirmation);
      popupConfirmation.setEventListeners();
    }
  });

  return card.getCard();
}

function handleSubmitPopupConfirmation(idCard, card) {
  popupConfirmation.renderLoading(true);
  api.deleteCard({ _id: idCard})
    .then(() => {
      popupConfirmation.close();
      card.remove();
    })
    .catch(err => console.log(err));
}

const popupConfirmation = new PopupWithConfirmation(PARAMS.popupConfirmationSelector, PARAMS.formSelector);

function handleSubmitPopupUserProfile(inputValues) {
  popupUserProfile.renderLoading(true);
  api.updateUserData({
    name: inputValues.fullname,
    about: inputValues.job
  })
    .catch(err => console.log(err));

  userInfo.setUserInfo({
    userName: inputValues.fullname,
    userJob: inputValues.job
  });
  popupUserProfile.close();
}

const popupUserProfile = new PopupWithForm(
  PARAMS.popupUserSelector,
  handleSubmitPopupUserProfile,
  PARAMS.formSelector,
  PARAMS.popupUserSubmitButtonLoadingText,
  PARAMS.popupUserSubmitButtonStaticText
);

const userInfo = new UserInfo({
  userNameSelector: PARAMS.userNameSelector,
  userJobSelector: PARAMS.userJobSelector,
  userAvatarSelector: PARAMS.userAvatarSelector,
});

let cardList = {};

Promise.all([
  api.getUser(),
  api.getInitialCards()
])
  .then(([ getUserRes, getInitialCardsRes]) => {
    userInfo.setUserInfo({
      userName: getUserRes.name,
      userJob: getUserRes.about,
    });
    userInfo.setUserAvatar({
      userAvatarSrc: getUserRes.avatar,
    });
    const myUserId = getUserRes._id;

    cardList = new Section({
        items: getInitialCardsRes,
        renderer: ({ _id, link, name, owner, likes }) => {
          const havingTrash = (owner._id === myUserId);
          const havingLikeActive = !!likes.find(item => item._id === myUserId);
          const card = createCard({
            id: _id,
            link,
            name,
            havingTrash,
            havingLikeActive,
            countLikes: likes.length
          });
          cardList.addItemAppend(card);
        }
      },
      PARAMS.cardsItemsSelector
    );
    cardList.renderItems();
  })
  .catch(err => console.log(err));

function handleSubmitPopupAddCard (inputValues) {
  popupAddCard.renderLoading(true);
  api.addCard({
    name: inputValues.name,
    link: inputValues.link
  })
    .then(res => {
      const idCard = res._id;
      const havingTrash = true;
      const havingLikeActive = false;
      const card = createCard({
        id: idCard,
        link: inputValues.link,
        name: inputValues.name,
        havingTrash,
        havingLikeActive,
        countLikes: 0
      });
      cardList.addItemPrepend(card);
      popupAddCard.close();
    })
    .catch(err => console.log(err));
}

const popupAddCard = new PopupWithForm(
  PARAMS.popupAddCardSelector,
  handleSubmitPopupAddCard,
  PARAMS.formSelector,
  PARAMS.popupAddCardSubmitButtonLoadingText,
  PARAMS.popupAddCardSubmitButtonStaticText
);

const popupImage = new PopupWithImage({
  popupSelector: PARAMS.popupImageSelector,
  popupImageImgSelector: PARAMS.popupImageImgSelector,
  popupImageTitleSelector: PARAMS.popupImageTitleSelector
});

const addCardFormValidator = new FormValidator(PARAMS, popupAddCardForm);
const userProfileFormValidator = new FormValidator(PARAMS, popupUserProfileForm);
const userAvatarFormValidator = new FormValidator(PARAMS, popupUserAvatarForm);

buttonUserProfile.addEventListener('click', () => {
  const { userName, userJob } = userInfo.getUserInfo();
  popupUserProfile.setInputValue(PARAMS.popupInputNameSelector, userName);
  popupUserProfile.setInputValue(PARAMS.popupInputJobSelector, userJob);
  popupUserProfile.renderLoading(false);
  popupUserProfile.open();
  userProfileFormValidator.clearErrors();
});
popupUserProfile.setEventListeners();

buttonAddCard.addEventListener('click', () => {
  popupAddCard.renderLoading(false);
  popupAddCard.open();
  addCardFormValidator.clearErrors();
});

function handleSubmitPopupUserAvatar(inputValues) {
  popupUserAvatar.renderLoading(true);
  api.updateUserAvatar({ avatar: inputValues.link_avatar })
    .then(res => {
      userInfo.setUserAvatar({
        userAvatarSrc: res.avatar,
      });
      popupUserAvatar.close();
    })
    .catch(err => console.log(err));
}

const popupUserAvatar = new PopupWithForm(
  PARAMS.popupUpdateAvatar,
  handleSubmitPopupUserAvatar,
  PARAMS.formSelector,
  PARAMS.popupUpdateAvatarSubmitButtonLoadingText,
  PARAMS.popupUpdateAvatarSubmitButtonStaticText
);

buttonUserAvatar.addEventListener('click', () => {
  popupUserAvatar.renderLoading(false);
  popupUserAvatar.open();
  userAvatarFormValidator.clearErrors();
});

popupAddCard.setEventListeners();
popupImage.setEventListeners();
popupUserAvatar.setEventListeners();

userProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
userAvatarFormValidator.enableValidation();
