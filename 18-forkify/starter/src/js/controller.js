import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js'; // polyfill
import 'regenerator-runtime/runtime'; // polyfill async await

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
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
    console.error(err.message);
  }
};
controlRecipes();

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
