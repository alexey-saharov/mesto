let typeForm = '';
const FORM_EDIT = 'FormEdit';
const FORM_ADD = 'FormAdd';
const FORM_IMG = 'FormImg';

const ENTER_KEY = 'Enter';
const ESC_KEY = 'Escape';


const profileName = document.querySelector('.profile__name-text');
const profileJob = document.querySelector('.profile__job-text');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const formPopup = document.querySelector('.popup');
const formPopupTitle = formPopup.querySelector('.popup__title');
const formPopupInput1 = formPopup.querySelector('.popup__input-first');
const formPopupInput2 = formPopup.querySelector('.popup__input-second');
const formPopupCloseButton = formPopup.querySelector('.popup__close-button-img');
const formPopupSubmitButton = formPopup.querySelector('.popup__submit-button');

function openFormPopup() {
  if (typeForm === FORM_EDIT) {
    formPopupTitle.textContent = 'Редактировать профиль';
    formPopupInput1.value = profileName.textContent;
    formPopupInput1.setAttribute('placeholder', '');
    formPopupInput2.value = profileJob.textContent;
    formPopupInput2.setAttribute('placeholder', '');
    formPopupSubmitButton.textContent = 'Сохранить';
  }
  if (typeForm === FORM_ADD) {
    formPopupTitle.textContent = 'Новое место';
    formPopupInput1.value = '';
    formPopupInput1.setAttribute('placeholder', 'Название');
    formPopupInput2.value = '';
    formPopupInput2.setAttribute('placeholder', 'Ссылка на картинку');
    formPopupSubmitButton.textContent = 'Создать';
  }
  formPopup.classList.add('popup_opened');
  document.addEventListener('keydown', onDocumentKeyDown);
  formPopupSubmitButton.focus();
}

profileEditButton.addEventListener('click', () => { typeForm = FORM_EDIT; openFormPopup(); });
profileAddButton.addEventListener('click', () => { typeForm = FORM_ADD; openFormPopup(); });

function closeFormPopup() {
  formPopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', onDocumentKeyDown);
  formPopupInput2.classList.remove('popup__input-second_error-url');
  typeForm = '';
}

formPopupCloseButton.addEventListener('click', closeFormPopup);



function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  if (typeForm === FORM_EDIT) {
    profileName.textContent = formPopupInput1.value;
    profileJob.textContent = formPopupInput2.value;
  }
  if (typeForm === FORM_ADD) {
    if (isValidHttpUrl(formPopupInput2.value)) {
      addCardsCard([formPopupInput2.value, '', formPopupInput1.value]);
    } else {
      formPopupInput2.classList.add('popup__input-second_error-url');
      return false;
    }
  }
  closeFormPopup();
}

formPopup.addEventListener('submit', formSubmitHandler);

function onDocumentKeyDown(event) {
  if (typeForm === FORM_EDIT || typeForm === FORM_ADD) {
    if (event.key === ENTER_KEY) {
      formSubmitHandler(event);
    }
    if (event.key === ESC_KEY) {
      closeFormPopup();
    }
  }
  if (typeForm === FORM_IMG && event.key === ESC_KEY) {
    closeFormImgPopup();
  }
}



function invertCardsHeartActive(evt) {
  evt.target.classList.toggle('cards__heart_active');
}

function removeCardsCard(evt) {
  evt.target.parentElement.remove();
}

const formImgPopup = document.querySelector('.img-popup');
const formImgPopupImage = formImgPopup.querySelector('.img-popup__image');
const formImgPopupImageTitle = formImgPopup.querySelector('.img-popup__title');
const formImgPopupCloseButton = formImgPopup.querySelector('.img-popup__close-button-img');

function openFormImgPopup(evt) {
  typeForm = FORM_IMG;
  formImgPopupImage.setAttribute('src', evt.target.src);
  formImgPopupImageTitle.textContent = evt.target.nextElementSibling.firstElementChild.textContent;
  formImgPopup.classList.add('img-popup_opened');
  document.addEventListener('keydown', onDocumentKeyDown);
}

function closeFormImgPopup() {
  formImgPopup.classList.remove('img-popup_opened');
  document.removeEventListener('keydown', onDocumentKeyDown);
  typeForm = '';
}

formImgPopupCloseButton.addEventListener('click', closeFormImgPopup);



const cardsCardTemplate = document.querySelector('#card').content;
const cardsCardsItems = document.querySelector('.cards__items');

function addCardsCard (card) {
  let cardElement = cardsCardTemplate.querySelector('.cards__item').cloneNode(true);
  cardElement.querySelector('.cards__img').src = card[0];
  cardElement.querySelector('.cards__img').alt = card[1];
  cardElement.querySelector('.cards__title').textContent = card[2];
  cardsCardsItems.prepend(cardElement);

  let heartsElement = document.querySelectorAll('.cards__heart');
  let trashesElement = document.querySelectorAll('.cards__trash');
  let imagesElement = document.querySelectorAll('.cards__img');

  Array.from(heartsElement).forEach((item) => {
    item.addEventListener('click', invertCardsHeartActive);
  });

  Array.from(trashesElement).forEach((item) => {
    item.addEventListener('click', removeCardsCard);
  });

  Array.from(imagesElement).forEach((item) => {
    item.addEventListener('click', openFormImgPopup);
  });
}



const cardArr = [['./blocks/cards/images/cards-sudak.webp', 'каменное побережье', 'Судак'],
  ['./blocks/cards/images/cards-saint-petersburg.webp', 'фонтаны на фоне дворца', 'Санкт-Петербург'],
  ['./blocks/cards/images/cards-sochi.webp', 'заснеженные горные вершины', 'Сочи'],
  ['./blocks/cards/images/cards-irkutskaya-obl.webp', 'замерзший Байкал', 'Иркутская область'],
  ['./blocks/cards/images/cards-altay.webp', 'река на Алтае', 'Алтай'],
  ['./blocks/cards/images/cards-nalchik.webp', 'замок на озере', 'Нальчик']];

cardArr.forEach(item => addCardsCard(item));
