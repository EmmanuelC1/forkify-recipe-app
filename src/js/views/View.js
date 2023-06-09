import icons from 'url:../../img/icons.svg'; // parcel 2

export default class View {
  _data;

  /**
   * Render the received object to the DOM
   * @param {Object | Object[] } data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup is returned if render=false
   * @this {Object} Object instance from which this method is called from
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Updates only the different elements in the DOM without the need to reload the entire page
   * @param {Object | Object[]} data Data to be updated in the DOM
   * @this {Object} Object instance from which this method is called from
   */
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    // Convert 'newMarkup' string to DOM object
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      // Update text only on curElements that differ from newElements
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== '' // first child will be the text (we dont want the element itself)
      ) {
        curEl.textContent = newEl.textContent;
      }

      // Update data attr on curElements that differ from newElements
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  /**
   * Renders a Loading Spinner in the parent element's view that was set by the calling Object
   * @this {Object} Object instance from which this method is called from
   */
  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Renders a message in the parent element's view that was set by the calling Object. If no message is passed in, default message will be rendered
   * @param {String | undefined} [message = this._message] Message to render
   * @this {Object} Object instance from which this method is called
   */
  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Renders a message in the parent element's view that was set by the calling Object. If no message is passed in, default message will be rendered
   * @param {String | undefined} [message = this._errorMessage] Error message to render
   * @this {Object} Object instance from which this method is called
   */
  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
