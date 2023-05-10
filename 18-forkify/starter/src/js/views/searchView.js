import View from './View.js';

class SearchView extends View {
  _parentElement = document.querySelector('.search');

  /**
   * Gets a recipe search query from the text input field
   * @returns {String} Query from user input
   */
  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
