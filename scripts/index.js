const name = document.querySelector('.profile__name-text');
const job = document.querySelector('.profile__job-text');

const editProfileButton = document.querySelector('.profile__edit-button');
const addCardButton = document.querySelector('.profile__add-button');

const formElement = document.querySelector('.popup');
const formTitle = formElement.querySelector('.popup__title');
const input1 = formElement.querySelector('.popup__input-name');
const input2 = formElement.querySelector('.popup__input-job');
const formCloseButton = formElement.querySelector('.popup__close-button-img');
const formSubmitButton = formElement.querySelector('.popup__submit-button');

let typeForm = '';
const FORM_EDIT = 'FormEdit';
const FORM_ADD = 'FormAdd';

const ENTER_KEY = 'Enter';
const ESC_KEY = 'Escape';


function openPopup() {
  if (typeForm === FORM_EDIT) {
    formTitle.textContent = 'Редактировать профиль';
    input1.value = name.textContent;
    input1.setAttribute('placeholder', '');
    input2.value = job.textContent;
    input2.setAttribute('placeholder', '');
    formSubmitButton.textContent = 'Сохранить';
  }
  if (typeForm === FORM_ADD) {
    formTitle.textContent = 'Новое место';
    input1.value = '';
    input1.setAttribute('placeholder', 'Название');
    input2.value = '';
    input2.setAttribute('placeholder', 'Ссылка на картинку');
    formSubmitButton.textContent = 'Создать';
  }

  formElement.classList.add('popup_opened');
  document.addEventListener('keyup', onDocumentKeyUp);
  formSubmitButton.focus();
}

editProfileButton.addEventListener('click', () => { typeForm = FORM_EDIT; openPopup(); });
addCardButton.addEventListener('click', () => { typeForm = FORM_ADD; openPopup(); });

function closePopup() {
  formElement.classList.remove('popup_opened');
  document.removeEventListener('keyup', onDocumentKeyUp);
  typeForm = '';
}

formCloseButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  if (typeForm === FORM_EDIT) {
    name.textContent = input1.value;
    job.textContent = input2.value;
  }
  if (typeForm === FORM_ADD) {
    addCard([input2.value, '', input1.value]);
  }
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


function invertHeartActive(evt) {
  evt.target.classList.toggle('cards__heart_active');
}

function removeCard(evt) {
  evt.target.parentElement.remove();
}


const cardTemplate = document.querySelector('#card').content;
const cardsElement = document.querySelector('.cards__items');

function addCard (card) {
  let cardElement = cardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__img').src = card[0];
  cardElement.querySelector('.cards__img').alt = card[1];
  cardElement.querySelector('.cards__title').textContent = card[2];
  cardsElement.prepend(cardElement);

  let heartsElement = document.querySelectorAll('.cards__heart');
  let trashesElement = document.querySelectorAll('.cards__trash');

  Array.from(heartsElement).forEach((item) => {
    item.addEventListener('click', invertHeartActive);
  });

  Array.from(trashesElement).forEach((item) => {
    item.addEventListener('click', removeCard);
  });
}

const cardArr = [['./blocks/cards/images/cards-sudak.webp', 'каменное побережье', 'Судак'],
  ['./blocks/cards/images/cards-saint-petersburg.webp', 'фонтаны на фоне дворца', 'Санкт-Петербург'],
  ['./blocks/cards/images/cards-sochi.webp', 'заснеженные горные вершины', 'Сочи'],
  ['./blocks/cards/images/cards-irkutskaya-obl.webp', 'замерзший Байкал', 'Иркутская область'],
  ['./blocks/cards/images/cards-altay.webp', 'река на Алтае', 'Алтай'],
  ['./blocks/cards/images/cards-nalchik.webp', 'замок на озере', 'Нальчик']];

cardArr.forEach(item => addCard(item));



