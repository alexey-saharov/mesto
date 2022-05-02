class Card {
  _link;
  _name;
  _cardTemplate;

  _card;
  _cardImage;
  _cardTitle;
  _heart;
  _trash;

  constructor(link, name, cardTemplate) {
    this._link = link;
    this._name = name;
    this._cardTemplate = cardTemplate;
  }

  _getCardMarkup() {
    this._card = this._cardTemplate.querySelector('.cards__item').cloneNode(true);
    this._cardImage = this._card.querySelector('.cards__img');
    this._cardTitle = this._card.querySelector('.cards__title');
    this._heart = this._card.querySelector('.cards__heart');
    this._trash = this._card.querySelector('.cards__trash');
  }

  _invertHeartActive(event) {
    event.target.classList.toggle('cards__heart_active');
  }

  _removeCard(event) {
    event.target.closest('.cards__item').remove();
  }

  getCard(handleClickImage) {
    this._getCardMarkup();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._heart.addEventListener('click', this._invertHeartActive);
    this._trash.addEventListener('click', this._removeCard);
    this._cardImage.addEventListener('click', handleClickImage);

    return this._card;
  }
}

export default Card;