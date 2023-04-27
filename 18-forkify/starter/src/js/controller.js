import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import 'core-js'; // polyfill
import 'regenerator-runtime/runtime'; // polyfill async await

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Render Loading Spinner
    recipeView.renderSpinner();

    // Load Recipe
    await model.loadRecipe(id);

    // Render Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // Get user query
    const query = searchView.getQuery();
    if (!query) return;

    // Render Loading Spinner
    recipeView.renderSpinner();

    // Load Search Results
    await model.loadSearchResults(query);

    // Render Search Results
    console.log(model.state.search);
    // recipeView.render(...model.state.search.results);
  } catch (err) {
    recipeView.renderError();
  }
};

const init = function () {
  // Publisher-Subscriber Design Pattern
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
