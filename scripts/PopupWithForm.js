import {Popup} from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitter) {
    // Кроме селектора попапа принимает в конструктор колбэк сабмита формы
    super();

  }

  _getInputValues() {

  }

  close() {
    super.close();
    // Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
  }

  setEventListeners() {
    super.setEventListeners();
    // Метод setEventListeners класса PopupWithForm должен не только добавлять обработчик клика иконке закрытия,
    // но и добавлять обработчик сабмита формы.
  }

}

// Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
