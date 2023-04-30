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
