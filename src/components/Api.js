export class Api {
  _url;
  _headers;

  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUser() {
    return fetch(`${this._url}/users/me`,{
      headers: this._headers,
    })
      .then(this._handleResponse)
  }

  updateUserData(userData) {
    return fetch(`${this._url}/users/me`,{
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(userData),
    })
      .then(this._handleResponse)
  }

  updateUserAvatar(userAvatar) {
    return fetch(`${this._url}/users/me/avatar`,{
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(userAvatar),
    })
      .then(this._handleResponse)
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`,{
      headers: this._headers
    })
      .then(this._handleResponse)
  }

  addCard(card) {
    return fetch(`${this._url}/cards`,{
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(card),
    })
      .then(this._handleResponse)
  }

  deleteCard({ _id }) {
    return fetch(`${this._url}/cards/${_id}`,{
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._handleResponse)
  }

  likeCard({ _id }) {
    return fetch(`${this._url}/cards/${_id}/likes`,{
      method: 'PUT',
      headers: this._headers,
    })
      .then(this._handleResponse)
  }

  deleteLikeCard({ _id }) {
    return fetch(`${this._url}/cards/${_id}/likes`,{
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._handleResponse)
  }

  toggleLikeCard(id, targetLikeStatus) {
    if (targetLikeStatus) {
      return this.likeCard({ _id: id});
    } else {
      return this.deleteLikeCard({ _id: id});
    }
  }

}
