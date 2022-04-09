const profileName = document.querySelector('.profile__name-text');
const profileJob = document.querySelector('.profile__job-text');
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnAddCard = document.querySelector('.profile__add-button');
const cardsItems = document.querySelector('.cards__items');
const cardTemplate = cardsItems.querySelector('#card__template').content;

const popupEditProfile = document.querySelector('.popup_type_profile');
const popupEditProfileInputName = popupEditProfile.querySelector('.popup__input_fullname');
const popupEditProfileInputJob = popupEditProfile.querySelector('.popup__input_job');
const popupEditProfileBtnClose = popupEditProfile.querySelector('.popup__button-close');

const popupAddCard = document.querySelector('.popup_type_card-add');
const popupAddCardInputPlaceName = popupAddCard.querySelector('.popup__input_placename');
const popupAddCardInputPlaceLink = popupAddCard.querySelector('.popup__input_placelink');
const popupAddCardBtnClose = popupAddCard.querySelector('.popup__button-close');

const popupImage = document.querySelector('.popup_type_image');
const popupImageImg = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');
const popupImageBtnClose = popupImage.querySelector('.popup__button-close');

const ESC_KEY = "Escape";



function onDocumentKeyUpEsc(event) {
  if (event.key === ESC_KEY) {
    const popupList = Array.from(document.querySelectorAll('.popup'));
    popupList.forEach((popup) => {
      if (popup.classList.contains('popup_opened')) {
        closePopup(popup);
      }
    });
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', onDocumentKeyUpEsc);
  popup.addEventListener('click', )
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', onDocumentKeyUpEsc);
}

function popupEditProfileSubmitHandler (event) {
  event.preventDefault();
  profileName.textContent = popupEditProfileInputName.value;
  profileJob.textContent = popupEditProfileInputJob.value;
  closePopup(popupEditProfile);
}

function popupAddCardSubmitHandler (event) {
  event.preventDefault();
  renderCard(popupAddCardInputPlaceLink.value, '', popupAddCardInputPlaceName.value);
  closePopup(popupAddCard);
}



btnEditProfile.addEventListener('click', () => {
  popupEditProfileInputName.value = profileName.textContent;
  popupEditProfileInputJob.value = profileJob.textContent;
  openPopup(popupEditProfile);
});
popupEditProfileBtnClose.addEventListener('click', () => closePopup(popupEditProfile));
popupEditProfile.addEventListener('submit', popupEditProfileSubmitHandler);



btnAddCard.addEventListener('click', () => {
  popupAddCardInputPlaceName.value = '';
  popupAddCardInputPlaceLink.value = '';
  openPopup(popupAddCard);
});
popupAddCardBtnClose.addEventListener('click', () => closePopup(popupAddCard));
popupAddCard.addEventListener('submit', popupAddCardSubmitHandler);



popupImageBtnClose.addEventListener('click', () => closePopup(popupImage));



function invertHeartActive(event) {
  event.target.classList.toggle('cards__heart_active');
}

function removeCard(event) {
  event.target.parentElement.remove();
}



function createCard (link, name) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__img').src = link;
  cardElement.querySelector('.cards__img').alt = name;
  cardElement.querySelector('.cards__title').textContent = name;

  const heartElement = cardElement.querySelector('.cards__heart');
  heartElement.addEventListener('click', invertHeartActive);

  const trashElement = cardElement.querySelector('.cards__trash');
  trashElement.addEventListener('click', removeCard);

  const imageElement = cardElement.querySelector('.cards__img');
  imageElement.addEventListener('click', (event) => {
    popupImageImg.setAttribute('src', event.target.src);
    popupImageTitle.textContent = name;
    openPopup(popupImage);
  });

  return cardElement;
}

function renderCard (link, name) {
  cardsItems.prepend(createCard(link, name));
}


const initialCards = [
  {
    name: 'Судак',
    link: './images/cards-sudak.webp'
  },
  {
    name: 'Санкт-Петербург',
    link: './images/cards-saint-petersburg.webp'
  },
  {
    name: 'Сочи',
    link: './images/cards-sochi.webp'
  },
  {
    name: 'Иркутская область',
    link: './images/cards-irkutskaya-obl.webp'
  },
  {
    name: 'Алтай',
    link: './images/cards-altay.webp'
  },
  {
    name: 'Нальчик',
    link: './images/cards-nalchik.webp'
  }
];

initialCards.forEach(item => renderCard(item.link, item.name));



