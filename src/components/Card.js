import {PARAMS} from "../utils/constants.js";

export class Card {
  _id;
  _link;
  _name;
  _havingTrash;
  _countLikes;
  _isLiked;
  _handleImageClick;
  _handleLikeClick;
  _handleRemoveClick;

  _cardElement;
  _cardImageElement;
  _cardTitleElement;
  _heartElement;
  _countLikesElement;
  _trashElement;

  constructor({ cardData, handleImageClick, handleLikeClick, handleRemoveClick }) {
    this._id = cardData.id;
    this._link = cardData.link;
    this._name = cardData.name;
    this._havingTrash = cardData.havingTrash;
    this._countLikes = cardData.countLikes;
    this._isLiked = cardData.havingLikeActive;
    this._handleImageClick = handleImageClick;
    this._handleLikeClick = handleLikeClick;
    this._handleRemoveClick = handleRemoveClick;
  }

  getId() {
    return this._id;
  }

  isLiked() {
    return this._isLiked;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(PARAMS.cardTemplateSelector)
      .content
      .querySelector(PARAMS.cardItemSelector)
      .cloneNode(true);

    return cardElement;
  }

  _getCardMarkup() {
    this._cardImageElement = this._cardElement.querySelector(PARAMS.cardImgSelector);
    this._cardTitleElement = this._cardElement.querySelector(PARAMS.cardTitleSelector);
    this._heartElement = this._cardElement.querySelector(PARAMS.cardHeartSelector);
    this._countLikesElement = this._cardElement.querySelector(PARAMS.cardCountLikesSelector);
    this._trashElement = this._cardElement.querySelector(PARAMS.cardTrashSelector);
  }

  _showLike() {
    this._heartElement.classList.add(PARAMS.cardLikeClass);
  }

  _hideLike() {
    this._heartElement.classList.remove(PARAMS.cardLikeClass);
  }

  toggleLikeStatus() {
    if (!this._isLiked) {
      this._showLike();
    } else {
      this._hideLike();
    }
  }

  showCountLikes(count) {
    this._countLikesElement.textContent = (!count) ? '' : count;
  }


  _addEventListeners() {
    this._heartElement.addEventListener('click', () => this._handleLikeClick(this));
    this._cardImageElement.addEventListener('click', () => this._handleImageClick(this._link, this._name));
    if (this._havingTrash) {
      this._trashElement.addEventListener('click', () => this._handleRemoveClick(this._id, this));
    }
  }

  remove() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getCard() {
    this._cardElement = this._getTemplate();
    this._getCardMarkup();

    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._name;
    this._cardTitleElement.textContent = this._name;
    if (!this._havingTrash) {
      this._trashElement.remove();
      this._trashElement = null;
    }
    this._countLikesElement.textContent = (!this._countLikes) ? '' : this._countLikes;
    if (this._isLiked) {
      this._heartElement.classList.add(PARAMS.cardLikeClass);
    }

    this._addEventListeners();

    return this._cardElement;
  }
}
