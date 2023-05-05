import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js'; // polyfill
import 'regenerator-runtime/runtime'; // polyfill async await

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Render Loading Spinner
    recipeView.renderSpinner();

    // Update resultsView to mark the selected search result
    resultsView.update(model.getSearchResultsPage());

    // Update bookmarksView
    bookmarksView.update(model.state.bookmarks);

    // Load Recipe
    await model.loadRecipe(id);

    // Render Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    // Render Loading Spinner
    resultsView.renderSpinner();

    // Get user query
    const query = searchView.getQuery();
    if (!query) return;

    // Load Search Results
    await model.loadSearchResults(query);

    // Render Search Results
    resultsView.render(model.getSearchResultsPage());

    // Render INITIAL Pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
    // resultsView.renderError();
  }
};

const controlPaginationBtns = function (goToPage) {
  // Render NEW Results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // Render NEW Pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipeView
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // Add/Remove Bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);

  // Update recipe view
  recipeView.update(model.state.recipe);

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = function (newRecipe) {
  console.log(newRecipe);

  // Upload new recipe data
};

const init = function () {
  // Publisher-Subscriber Design Pattern
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerPagination(controlPaginationBtns);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
