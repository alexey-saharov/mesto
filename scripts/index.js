const name = document.querySelector('.profile__name-text');
const job = document.querySelector('.profile__job-text');

const editProfileButton = document.querySelector('.profile__edit-button');

const formElement = document.querySelector('.popup');
const nameInput = formElement.querySelector('.popup__input-name');
const jobInput = formElement.querySelector('.popup__input-job');
const formCloseButton = formElement.querySelector('.popup__close-button-img');
const formSaveButton = formElement.querySelector('.popup__submit-button');

const ENTER_KEY = 'Enter';
const ESC_KEY = 'Escape';


function openPopup() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  formElement.classList.add('popup_opened');
  document.addEventListener('keyup', onDocumentKeyUp);
  formSaveButton.focus();
}

editProfileButton.addEventListener('click', openPopup);

function closePopup() {
  formElement.classList.remove('popup_opened');
  document.removeEventListener('keyup', onDocumentKeyUp);
}

formCloseButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

function onDocumentKeyUp(event) {
  if (event.key === ENTER_KEY) {
    formSubmitHandler();
  }
  if (event.key === ESC_KEY) {
    closePopup();
  }
}


const cardArr = [['./blocks/cards/images/cards-nalchik.webp', 'замок на озере', 'Нальчик'],
  ['./blocks/cards/images/cards-altay.webp', 'река на Алтае', 'Алтай'],
  ['./blocks/cards/images/cards-irkuskaya-obl.webp', 'замерзший Байкал', 'Иркутская область'],
  ['./blocks/cards/images/cards-sochi.webp', 'заснеженные горные вершины', 'Сочи'],
  ['./blocks/cards/images/cards-saint-petersburg.webp', 'фонтаны на фоне дворца', 'Санкт-Петербург'],
  ['./blocks/cards/images/cards-sudak.webp', 'каменное побережье', 'Судак']];

const cardTemplate = document.querySelector('#card').content;
const cardsElement = document.querySelector('.cards__items');

cardArr.forEach(item => {
  let cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__img').src = item[0];
  cardElement.querySelector('.cards__img').alt = item[1];
  cardElement.querySelector('.cards__title').textContent = item[2];
  cardsElement.append(cardElement);
});


