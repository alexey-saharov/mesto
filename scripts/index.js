const profileName = document.querySelector('.profile__name-text');
const profileJob = document.querySelector('.profile__job-text');
const btnEditProfile = document.querySelector('.profile__edit-button');
const btnAddCard = document.querySelector('.profile__add-button');
const cardsItems = document.querySelector('.cards__items');
const cardTemplate = cardsItems.querySelector('#card__template').content;

const popups = document.querySelectorAll('.popup');
const popupEditProfile = popups[0];
const popupAddCard = popups[1];
const popupImage = popups[2];

const popupEditProfileInputs = popupEditProfile.querySelectorAll('.popup__input');
const popupEditProfileInputName = popupEditProfileInputs[0];
const popupEditProfileInputJob = popupEditProfileInputs[1];
const popupEditProfileBtnClose = popupEditProfile.querySelector('.popup__button-close');

const popupAddCardInputs = popupAddCard.querySelectorAll('.popup__input');
const popupAddCardInputPlaceName = popupAddCardInputs[0];
const popupAddCardInputPlaceLink = popupAddCardInputs[1];
const popupAddCardBtnClose = popupAddCard.querySelector('.popup__button-close');

const popupImageImg = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__image-title');
const popupImageBtnClose = popupImage.querySelector('.popup__button-close');



function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function popupEditProfileSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupEditProfileInputName.value;
  profileJob.textContent = popupEditProfileInputJob.value;
  closePopup(popupEditProfile);
}

function popupAddCardSubmitHandler (evt) {
  evt.preventDefault();
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



function invertHeartActive(evt) {
  evt.target.classList.toggle('cards__heart_active');
}

function removeCard(evt) {
  evt.target.parentElement.remove();
}



function createCard (link, description, name) {
  const cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__img').src = link;
  cardElement.querySelector('.cards__img').alt = name;
  cardElement.querySelector('.cards__title').textContent = name;

  const heartElement = cardElement.querySelector('.cards__heart');
  heartElement.addEventListener('click', invertHeartActive);

  const trashElement = cardElement.querySelector('.cards__trash');
  trashElement.addEventListener('click', removeCard);

  const imageElement = cardElement.querySelector('.cards__img');
  imageElement.addEventListener('click', (evt) => {
    popupImageImg.setAttribute('src', evt.target.src);
    popupImageTitle.textContent = evt.target.closest('.cards__item').querySelector('.cards__title').textContent;
    openPopup(popupImage);
  });

  return cardElement;
}

function renderCard (link, description, name) {
  cardsItems.prepend(createCard(link, description, name));
}

const cardArr = [['./images/cards-sudak.webp', 'каменное побережье', 'Судак'],
  ['./images/cards-saint-petersburg.webp', 'фонтаны на фоне дворца', 'Санкт-Петербург'],
  ['./images/cards-sochi.webp', 'заснеженные горные вершины', 'Сочи'],
  ['./images/cards-irkutskaya-obl.webp', 'замерзший Байкал', 'Иркутская область'],
  ['./images/cards-altay.webp', 'река на Алтае', 'Алтай'],
  ['./images/cards-nalchik.webp', 'замок на озере', 'Нальчик']];

cardArr.forEach(item => renderCard(...item));
