export class UserInfo {
  _userNameElement;
  _userJobElement;
  _userAvatarElement;

  constructor({ userNameSelector, userJobSelector, userAvatarSelector }) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
    this._userAvatarElement = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userJob: this._userJobElement.textContent
    };
  }

  setUserInfo({ userName, userJob }) {
    if (userName) this._userNameElement.textContent = userName;
    if (userJob) this._userJobElement.textContent = userJob;
  }

  setUserAvatar({ userAvatarSrc }) {
    if (userAvatarSrc) this._userAvatarElement.src = userAvatarSrc;
    this._userAvatarElement.alt = 'мой аватар';
  }
}
