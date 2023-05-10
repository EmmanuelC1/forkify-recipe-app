import { mark } from 'regenerator-runtime';
import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerPagination(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = Number(btn.dataset.goto);
      handler(goToPage);
    });
  }

  /**
   * Generates a markup string for pagination view based on the current page user is currently viewing.
   * Markup includes button with page number and direction arrow.
   * @returns {String} A markup string
   * @this {Object} ResultsView instance
   */
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButton(curPage, 'next');
    }

    // Last Page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButton(curPage, 'prev');
    }

    // Other Page
    if (curPage < numPages) {
      let markup = this._generateMarkupButton(curPage, 'prev');
      markup += this._generateMarkupButton(curPage, 'next');
      return markup;
    }

    // Page 1, and there is NO other pages
    return '';
  }

  /**
   * Generates a markup string used for rendering a button for pagination. Includes page number and direction arrow.
   * @param {Number} curPage Current page number in view
   * @param {String} prevOrNext Used to render previous or next button's page number and arrow direction (left or right). If 'next' is passed, markup
   * will be include a button with right arrow and the next page number. If 'prev' is passed, markup will include a button with left arrow and the
   * previous page number.
   * @returns A markup string containing a button for pagination
   */
  _generateMarkupButton(curPage, prevOrNext) {
    //prettier-ignore
    return `
        <button class="btn--inline pagination__btn--${prevOrNext}" data-goto="${
            prevOrNext === 'next' ? curPage + 1 : curPage - 1
            }">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-${
                prevOrNext === 'next' ? 'right' : 'left'
                }"></use>
            </svg>
            <span>Page ${
              prevOrNext === 'next' ? curPage + 1 : curPage - 1
            }</span>
        </button>`;
  }
}

export default new PaginationView();
