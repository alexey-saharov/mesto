import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {Section} from './Section.js';
import {UserInfo} from './UserInfo.js';

import {
  buttonProfile,
  // btnEditProfile,
  btnAddCard,
  cardsItemsSelector,
  // cardsItems,
  cardTemplateSelector,


  popupAddCard,
  popupAddCardForm,
  popupAddCardInputPlaceName,
  popupAddCardInputPlaceLink,

  PARAMS,
  initialCards
} from '../utils/constants.js';




// function handleSubmitPopupEditProfile (event) {
//   event.preventDefault();
//   profileName.textContent = popupEditProfileInputName.value;
//   profileJob.textContent = popupEditProfileInputJob.value;
//   closePopup(popupEditProfile);
// }
//
// function handleSubmitPopupAddCard (event) {
//   event.preventDefault();
//   const card = renderCard(popupAddCardInputPlaceLink.value, popupAddCardInputPlaceName.value);
//   addCard(card);
//   closePopup(popupAddCard);
// }

// buttonProfile.addEventListener('click', () => {
//   popupEditProfileInputName.value = profileName.textContent;
//   popupEditProfileInputJob.value = profileJob.textContent;
//   editProfileFormValidator.clearErrors();
//   openPopup(popupEditProfile);
// });
// popupEditProfile.addEventListener('submit', handleSubmitPopupEditProfile);





function handleSubmitPopupProfile (event, inputValues) {
  event.preventDefault();

  userInfo.setUserInfo({
    userName: inputValues.fullname,
    userJob: inputValues.job
  });
  popupProfile.close();
}


const popupProfile = new PopupWithForm(PARAMS.popupProfileSelector, handleSubmitPopupProfile, PARAMS.formSelector);
const userInfo = new UserInfo({
  userNameSelector: PARAMS.userNameSelector,
  userJobSelector: PARAMS.userJobSelector
});

buttonProfile.addEventListener('click', () => {
  const { userName, userJob } = userInfo.getUserInfo();
  popupProfile.setInputValue(PARAMS.popupInputNameSelector, userName);
  popupProfile.setInputValue(PARAMS.popupInputJobSelector, userJob);
  popupProfile.open(PARAMS.popupOpenedClass);
  editProfileFormValidator.clearErrors();
});
popupProfile.setEventListeners(PARAMS.popupButtonCloseClass);




//
// btnAddCard.addEventListener('click', () => {
//   popupAddCardForm.reset();
//   addCardFormValidator.clearErrors();
//   openPopup(popupAddCard);
// });
// popupAddCard.addEventListener('submit', handleSubmitPopupAddCard);






const popupImage = new PopupWithImage({
  popupSelector: PARAMS.popupImageSelector,
  popupImageImgSelector: PARAMS.popupImageImgSelector,
  popupImageTitleSelector: PARAMS.popupImageTitleSelector
});
const handleCardClick = (link, name) => {
  popupImage.open(link, name, PARAMS.popupOpenedClass);
}
popupImage.setEventListeners(PARAMS.popupButtonCloseClass);



const cardList = new Section({
    items: initialCards,
    renderer: ({ link, name }) => {
      const card = new Card(link, name, cardTemplateSelector, handleCardClick).getCard();
      cardList.addItemPrepend(card);
    }
  },
  cardsItemsSelector
);
cardList.renderItems();



const addCardFormValidator = new FormValidator(PARAMS, popupAddCardForm);
addCardFormValidator.enableValidation();

const popupEditProfileForm = document.querySelector(PARAMS.popupProfileSelector).querySelector(PARAMS.formSelector);
const editProfileFormValidator = new FormValidator(PARAMS, popupEditProfileForm);
editProfileFormValidator.enableValidation();
