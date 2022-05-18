export class Section {
  _initialArray;
  _renderer;
  _container;


  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._initialArray.forEach(this._renderer);
  }

  addItemPrepend(element) {
    this._container.prepend(element);
  }
}
