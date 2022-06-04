(()=>{"use strict";var e={userNameSelector:".profile__name-text",userJobSelector:".profile__job-text",userAvatarSelector:".profile__photo",userAvatarButtonSelector:".profile__edit-avatar",buttonUserSelector:".profile__edit-button",buttonAddCardSelector:".profile__add-button",formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-submit",inactiveButtonClass:"popup__button-submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible",popupOpenedClass:"popup_opened",popupButtonCloseClass:"popup__button-close",popupUpdateAvatar:".popup_type_avatar",popupUpdateAvatarSubmitButtonLoadingText:"Сохранение...",popupUpdateAvatarSubmitButtonStaticText:"Сохранить",popupUserSelector:".popup_type_profile",popupInputNameSelector:".popup__input_fullname",popupInputJobSelector:".popup__input_job",popupUserSubmitButtonLoadingText:"Сохранение...",popupUserSubmitButtonStaticText:"Сохранить",popupAddCardSelector:".popup_type_card-add",popupAddCardSubmitButtonLoadingText:"Сохранение...",popupAddCardSubmitButtonStaticText:"Создать",popupImageSelector:".popup_type_image",popupImageImgSelector:".popup__image",popupImageTitleSelector:".popup__image-title",popupConfirmationSelector:".popup_type_confirmation",popupConfirmationSubmitButtonLoadingText:"Удаление...",popupConfirmationSubmitButtonStaticText:"Да",cardsItemsSelector:".cards__items",cardItemSelector:".cards__item",cardImgSelector:".cards__img",cardTitleSelector:".cards__title",cardHeartSelector:".cards__heart",cardCountLikesSelector:".cards__count-likes",cardTrashSelector:".cards__trash",cardTemplateSelector:"#card__template",cardLikeClass:"cards__heart_active",serverUrl:"https://mesto.nomoreparties.co/v1/cohort-42",token:"29779b63-56c9-48f1-bf2c-946b66c63b59"},t=document.querySelector(e.userAvatarButtonSelector),r=document.querySelector(e.buttonUserSelector),n=document.querySelector(e.buttonAddCardSelector),o=document.querySelector(e.popupUpdateAvatar).querySelector(e.formSelector),i=document.querySelector(e.popupUserSelector).querySelector(e.formSelector),a=document.querySelector(e.popupAddCardSelector).querySelector(e.formSelector);function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(){function t(e){var r=e.cardData,n=e.handleImageClick,o=e.handleLikeClick,i=e.handleRemoveClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"_id",void 0),c(this,"_link",void 0),c(this,"_name",void 0),c(this,"_havingTrash",void 0),c(this,"_countLikes",void 0),c(this,"_isLiked",void 0),c(this,"_handleImageClick",void 0),c(this,"_handleLikeClick",void 0),c(this,"_handleRemoveClick",void 0),c(this,"_cardElement",void 0),c(this,"_cardImageElement",void 0),c(this,"_cardTitleElement",void 0),c(this,"_heartElement",void 0),c(this,"_countLikesElement",void 0),c(this,"_trashElement",void 0),this._id=r.id,this._link=r.link,this._name=r.name,this._havingTrash=r.havingTrash,this._countLikes=r.countLikes,this._isLiked=r.havingLikeActive,this._handleImageClick=n,this._handleLikeClick=o,this._handleRemoveClick=i}var r,n;return r=t,(n=[{key:"getId",value:function(){return this._id}},{key:"isLiked",value:function(){return this._isLiked}},{key:"_getTemplate",value:function(){return document.querySelector(e.cardTemplateSelector).content.querySelector(e.cardItemSelector).cloneNode(!0)}},{key:"_getCardMarkup",value:function(){this._cardImageElement=this._cardElement.querySelector(e.cardImgSelector),this._cardTitleElement=this._cardElement.querySelector(e.cardTitleSelector),this._heartElement=this._cardElement.querySelector(e.cardHeartSelector),this._countLikesElement=this._cardElement.querySelector(e.cardCountLikesSelector),this._trashElement=this._cardElement.querySelector(e.cardTrashSelector)}},{key:"_showLike",value:function(){this._heartElement.classList.add(e.cardLikeClass)}},{key:"_hideLike",value:function(){this._heartElement.classList.remove(e.cardLikeClass)}},{key:"toggleLikeStatus",value:function(){this._isLiked?this._hideLike():this._showLike()}},{key:"showCountLikes",value:function(e){this._countLikesElement.textContent=e||""}},{key:"_addEventListeners",value:function(){var e=this;this._heartElement.addEventListener("click",(function(){return e._handleLikeClick(e,e._id,e._heartElement)})),this._cardImageElement.addEventListener("click",(function(){return e._handleImageClick(e._link,e._name)})),this._havingTrash&&this._trashElement.addEventListener("click",(function(){return e._handleRemoveClick(e._id,e)}))}},{key:"remove",value:function(){this._cardElement.remove(),this._cardElement=null}},{key:"getCard",value:function(){return this._cardElement=this._getTemplate(),this._getCardMarkup(),this._cardImageElement.src=this._link,this._cardImageElement.alt=this._name,this._cardTitleElement.textContent=this._name,this._havingTrash||(this._trashElement.remove(),this._trashElement=null),this._countLikesElement.textContent=this._countLikes?this._countLikes:"",this._isLiked&&this._heartElement.classList.add(e.cardLikeClass),this._addEventListeners(),this._cardElement}}])&&u(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_params",void 0),p(this,"_form",void 0),p(this,"_inputList",void 0),p(this,"_button",void 0),this._params=t,this._form=r,this._inputList=Array.from(this._form.querySelectorAll(this._params.inputSelector)),this._button=this._form.querySelector(this._params.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_enableButton",value:function(){this._button.disabled=!1,this._button.classList.remove(this._params.inactiveButtonClass)}},{key:"_disableButton",value:function(){this._button.disabled=!0,this._button.classList.add(this._params.inactiveButtonClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?this._disableButton():this._enableButton()}},{key:"_showError",value:function(e,t){var r=e.parentNode.querySelector("#".concat(e.id,"-error"));r.textContent=t,r.classList.add(this._params.errorClass),e.classList.add(this._params.inputErrorClass)}},{key:"_hideError",value:function(e){var t=e.parentNode.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._params.errorClass),e.classList.remove(this._params.inputErrorClass)}},{key:"_validateInput",value:function(e){if(e.validity.valid)this._hideError(e);else{var t=e.validationMessage;this._showError(e,t)}}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e._toggleButtonState()}))}))}},{key:"clearErrors",value:function(){var e=this;this._inputList.forEach((function(t){var r=t.closest(e._params.formSelector).querySelector("#".concat(t.id,"-error"));e._hideError(t,r)})),this._disableButton()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _=function(){function t(r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"_popup",void 0),h(this,"_popupOpenedClass",void 0),h(this,"_popupButtonCloseClass",void 0),h(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),this._popup=document.querySelector(r),this._popupOpenedClass=e.popupOpenedClass,this._popupButtonCloseClass=e.popupButtonCloseClass}var r,n;return r=t,(n=[{key:"open",value:function(){this._popup.classList.add(this._popupOpenedClass),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove(this._popupOpenedClass),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains(e._popupOpenedClass)||t.target.classList.contains(e._popupButtonCloseClass))&&e.close()}))}}])&&f(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=b(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},y.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function g(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(n);if(o){var r=E(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t,r=e.popupSelector,n=e.popupImageImgSelector,o=e.popupImageTitleSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),L(k(t=i.call(this,r)),"_popupElement",void 0),L(k(t),"_imageElement",void 0),L(k(t),"_titleElement",void 0),t._popupElement=document.querySelector(r),t._imageElement=t._popupElement.querySelector(n),t._titleElement=t._popupElement.querySelector(o),t}return t=a,(r=[{key:"open",value:function(e,t){this._imageElement.src=e,this._imageElement.alt=t,this._titleElement.textContent=t,y(E(a.prototype),"open",this).call(this)}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=I(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},j.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function P(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,t);var r,n,o,i,a=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(o);if(i){var r=A(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return P(this,e)});function u(t,r,n,o,i){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),R(B(c=a.call(this,t)),"_handleSubmit",void 0),R(B(c),"_form",void 0),R(B(c),"_popupButton",void 0),R(B(c),"_popupButtonLoadingString",void 0),R(B(c),"_popupButtonStaticString",void 0),R(B(c),"_getInputValues",(function(){return Object.fromEntries(new FormData(c._form))})),R(B(c),"setInputValue",(function(e,t){c._form.querySelector(e).value=t})),c._handleSubmit=r,c._form=document.querySelector(t).querySelector(n),c._popupButton=c._form.querySelector(e.submitButtonSelector),c._popupButtonLoadingString=o,c._popupButtonStaticString=i,c}return r=u,(n=[{key:"renderLoading",value:function(e){this._popupButton.textContent=e?this._popupButtonLoadingString:this._popupButtonStaticString}},{key:"close",value:function(){j(A(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;j(A(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}}])&&O(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),u}(_);function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var N=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),U(this,"_initialArray",void 0),U(this,"_renderer",void 0),U(this,"_container",void 0),this._initialArray=n,this._renderer=o,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(){this._initialArray.forEach(this._renderer)}},{key:"addItemPrepend",value:function(e){this._container.prepend(e)}},{key:"addItemAppend",value:function(e){this._container.append(e)}}])&&q(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var V=function(){function e(t){var r=t.userNameSelector,n=t.userJobSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),D(this,"_userNameElement",void 0),D(this,"_userJobElement",void 0),D(this,"_userAvatarElement",void 0),this._userNameElement=document.querySelector(r),this._userJobElement=document.querySelector(n),this._userAvatarElement=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{userName:this._userNameElement.textContent,userJob:this._userJobElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.userName,r=e.userJob;t&&(this._userNameElement.textContent=t),r&&(this._userJobElement.textContent=r)}},{key:"setUserAvatar",value:function(e){var t=e.userAvatarSrc;t&&(this._userAvatarElement.src=t),this._userAvatarElement.alt="мой аватар"}}])&&J(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var z=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),M(this,"_url",void 0),M(this,"_headers",void 0),M(this,"_handleResponse",(function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),this._url=t.baseUrl,this._headers=t.headers}var t,r;return t=e,(r=[{key:"getUser",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"updateUserData",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"updateUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){var t=e._id;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"likeCard",value:function(e){var t=e._id;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"deleteLikeCard",value:function(e){var t=e._id;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"toggleLikeCard",value:function(e,t){return t?this.likeCard({_id:e}):this.deleteLikeCard({_id:e})}}])&&H(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function G(){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=K(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},G.apply(this,arguments)}function K(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Y(e)););return e}function Q(e,t){return Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Q(e,t)}function W(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return X(e)}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(e){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Y(e)}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ee=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q(e,t)}(u,t);var r,n,o,i,a=(o=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Y(o);if(i){var r=Y(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return W(this,e)});function u(t,r){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),Z(X(n=a.call(this,t)),"_handleSubmit",void 0),Z(X(n),"_form",void 0),Z(X(n),"_idCard",void 0),Z(X(n),"_cardElement",void 0),Z(X(n),"_popupButton",void 0),n._form=document.querySelector(t).querySelector(r),n._popupButton=n._form.querySelector(e.submitButtonSelector),n}return r=u,(n=[{key:"open",value:function(e,t,r){G(Y(u.prototype),"open",this).call(this),this._handleSubmit=r,this._idCard=e,this._cardElement=t}},{key:"renderLoading",value:function(t){this._popupButton.textContent=t?e.popupConfirmationSubmitButtonLoadingText:e.popupConfirmationSubmitButtonStaticText}},{key:"setEventListeners",value:function(){var e=this;G(Y(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._idCard,e._cardElement)}))}}])&&$(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),u}(_);function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var re=new z({baseUrl:e.serverUrl,headers:{authorization:e.token,"Content-Type":"application/json"}});function ne(e){return new s({cardData:e,handleImageClick:function(e,t){le.open(e,t)},handleLikeClick:function(e){re.toggleLikeCard(e.getId(),!e.isLiked()).then((function(t){e.toggleLikeStatus(),e.showCountLikes(t.likes.length)})).catch((function(e){return console.log(e)}))},handleRemoveClick:function(e,t){ie.renderLoading(!1),ie.open(e,t,oe),ie.setEventListeners()}}).getCard()}function oe(e,t){ie.renderLoading(!0),re.deleteCard({_id:e}).then((function(){ie.close(),t.remove()})).catch((function(e){return console.log(e)}))}var ie=new ee(e.popupConfirmationSelector,e.formSelector),ae=new x(e.popupUserSelector,(function(e){ae.renderLoading(!0),re.updateUserData({name:e.fullname,about:e.job}).catch((function(e){return console.log(e)})),ue.setUserInfo({userName:e.fullname,userJob:e.job}),ae.close()}),e.formSelector,e.popupUserSubmitButtonLoadingText,e.popupUserSubmitButtonStaticText),ue=new V({userNameSelector:e.userNameSelector,userJobSelector:e.userJobSelector,userAvatarSelector:e.userAvatarSelector}),ce={};Promise.all([re.getUser(),re.getInitialCards()]).then((function(t){var r,n,o=(n=2,function(e){if(Array.isArray(e))return e}(r=t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(r,n)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?te(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],a=o[1];ue.setUserInfo({userName:i.name,userJob:i.about}),ue.setUserAvatar({userAvatarSrc:i.avatar});var u=i._id;(ce=new N({items:a,renderer:function(e){var t=e._id,r=e.link,n=e.name,o=e.owner,i=e.likes,a=ne({id:t,link:r,name:n,havingTrash:o._id===u,havingLikeActive:!!i.find((function(e){return e._id===u})),countLikes:i.length});ce.addItemAppend(a)}},e.cardsItemsSelector)).renderItems()})).catch((function(e){return console.log(e)}));var se=new x(e.popupAddCardSelector,(function(e){se.renderLoading(!0),re.addCard({name:e.name,link:e.link}).then((function(t){var r=ne({id:t._id,link:e.link,name:e.name,havingTrash:!0,havingLikeActive:!1,countLikes:0});ce.addItemPrepend(r),se.close()})).catch((function(e){return console.log(e)}))}),e.formSelector,e.popupAddCardSubmitButtonLoadingText,e.popupAddCardSubmitButtonStaticText),le=new C({popupSelector:e.popupImageSelector,popupImageImgSelector:e.popupImageImgSelector,popupImageTitleSelector:e.popupImageTitleSelector}),pe=new d(e,a),de=new d(e,i),fe=new d(e,o);r.addEventListener("click",(function(){var t=ue.getUserInfo(),r=t.userName,n=t.userJob;ae.setInputValue(e.popupInputNameSelector,r),ae.setInputValue(e.popupInputJobSelector,n),ae.renderLoading(!1),ae.open(),de.clearErrors()})),ae.setEventListeners(),n.addEventListener("click",(function(){se.renderLoading(!1),se.open(),pe.clearErrors()}));var he=new x(e.popupUpdateAvatar,(function(e){he.renderLoading(!0),re.updateUserAvatar({avatar:e.link_avatar}).then((function(e){ue.setUserAvatar({userAvatarSrc:e.avatar}),he.close()})).catch((function(e){return console.log(e)}))}),e.formSelector,e.popupUpdateAvatarSubmitButtonLoadingText,e.popupUpdateAvatarSubmitButtonStaticText);t.addEventListener("click",(function(){he.renderLoading(!1),he.open(),fe.clearErrors()})),se.setEventListeners(),le.setEventListeners(),he.setEventListeners(),de.enableValidation(),pe.enableValidation(),fe.enableValidation()})();