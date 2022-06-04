import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  _popupElement;
  _imageElement;
  _titleElement;

  constructor({ popupSelector, popupImageImgSelector, popupImageTitleSelector }) {
      super(popupSelector);
      this._popupElement = document.querySelector(popupSelector);
      this._imageElement = this._popupElement.querySelector(popupImageImgSelector);
      this._titleElement = this._popupElement.querySelector(popupImageTitleSelector);
  }

  open(link, name) {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._titleElement.textContent = name;
    super.open();
  }
}
