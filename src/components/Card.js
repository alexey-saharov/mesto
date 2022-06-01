export class Card {
  _id;
  _link;
  _name;
  _havingTrash;
  _countLikes;
  _cardTemplate;
  _handleClickImage;
  _handleClickLike;
  _handleClickRemove;

  _cardElement;
  _cardImageElement;
  _cardTitleElement;
  _heartElement;
  _countLikesElement;
  _trashElement;

  constructor(id, link, name, havingTrash, countLikes, cardTemplateSelector, handleClickImage, handleClickLike, handleClickRemove) {
    this._id = id;
    this._link = link;
    this._name = name;
    this._havingTrash = havingTrash;
    this._countLikes = countLikes;
    this._cardTemplate = document.querySelector(cardTemplateSelector).content;
    this._handleClickImage = handleClickImage;
    this._handleClickLike = handleClickLike;
    this._handleClickRemove = handleClickRemove;
  }

  _getCardMarkup() {
    this._cardElement = this._cardTemplate.querySelector('.cards__item').cloneNode(true);
    this._cardImageElement = this._cardElement.querySelector('.cards__img');
    this._cardTitleElement = this._cardElement.querySelector('.cards__title');
    this._heartElement = this._cardElement.querySelector('.cards__heart');
    this._countLikesElement = this._cardElement.querySelector('.cards__count-likes');
    this._trashElement = this._cardElement.querySelector('.cards__trash');
  }

  getCard() {
    this._getCardMarkup();

    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._cardTitleElement.textContent = this._name;
    if (!this._havingTrash) {
      this._trashElement.remove();
      this._trashElement = null;
    }
    this._countLikesElement.textContent = (!this._countLikes) ? '' : this._countLikes;


    this._heartElement.addEventListener('click', () => this._handleClickLike(this._heartElement, this._countLikesElement));
    this._cardImageElement.addEventListener('click', () => this._handleClickImage(this._link, this._name));
    if (this._havingTrash) {
      this._trashElement.addEventListener('click', () => this._handleClickRemove(this._id, this._cardElement));
    }

    return this._cardElement;
  }
}
