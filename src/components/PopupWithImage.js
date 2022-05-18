import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  _imageElement;
  _titleElement;

  constructor({ popupSelector, popupImageImgSelector, popupImageTitleSelector }) {
      super(popupSelector);
      this._imageElement = document.querySelector(popupImageImgSelector);
      this._titleElement = document.querySelector(popupImageTitleSelector);
  }

  open(link, name) {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._titleElement.textContent = name;
    super.open();
  }
}
