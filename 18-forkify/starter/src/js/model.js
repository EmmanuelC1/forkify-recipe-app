import 'regenerator-runtime/runtime'; // polyfill async await
import { API_URL, API_KEY, RES_PER_PAGE } from './config';
import { AJAX } from './helpers';

// State variable used throughout application
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

/**
 * Takes in a data Object recieved from API and re-formats the property names to match those used throughout the application
 * @param {Object} data Data to format into recipe object
 * @returns {Object} A recipe object
 */
const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    // conditionally add 'key' prop. using && short-circuiting (key will only exist when data is returned from a successful upload of new recipe)
    ...(recipe.key && { key: recipe.key }),
  };
};

/**
 * Fetches a recipe from the API based on the recipe ID. Stores it in state.recipe variable.
 * @param {String} id Recipe ID to be used in the API fetch call
 */
export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${API_KEY}`);

    state.recipe = createRecipeObject(data);

    // Sets bookmarked property to true if id passed in matches any id in bookmarks array. If not, sets as false
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;

    // console.log(state.recipe);
  } catch (err) {
    throw err;
  }
};

/**
 * Fetches a list of recipes objects from API based on a search query. Stores list of object recipes in
 * state.search.results variable.
 * @param {String} query Query string for to use as API parameter to get list of recipes mathcing the query.
 */
export const loadSearchResults = async function (query) {
  try {
    // reset current page
    state.search.page = 1;
    state.search.query = query;

    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);

    state.search.results = data.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        ...(recipe.key && { key: recipe.key }),
      };
    });

    // console.log(state.search);
  } catch (err) {
    throw err;
  }
};

/**
 * Slices state.search.results array to only include a certain amount of search results for pagination purposes. Amount of recipes
 * returned is based on application configuration.
 * @param {Number | undefined} [page=1] Current page in view, used to calculate number of results to return in array. If undefined,
 * current page = 1
 * @returns An array with the correct amount of search result recipes that should be in the current page in the view.
 */
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

// Updates the serving quantities for each ingredient of the current recipe in view.
export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    // newQt = oldQt * newServings / oldServings --> 2 * 8 / 4 = 4
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });

  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

// Adds a recipe to bookmarks array in state
export const addBookmark = function (recipe) {
  // Add Bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

// Remove a bookmarked recipe based on recipe ID
export const removeBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => el.id === id);

  // Remove Bookmark
  state.bookmarks.splice(index, 1);

  // Un-mark current recipe as bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

// Gets bookmarks stored in local storage and stores them in state as soon as application runs.
const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();

/* DEVELOPMENT PURPOSES ONLY */
const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();

/**
 * Uploads user created recipe to API using API key. Formats ingredients into an array of objects, and also formats entire
 * recipe object to match formatting API is expecting. Updates state variable.
 * @param {Object} newRecipe Recipe object that was created from user input
 */
export const uploadRecipe = async function (newRecipe) {
  try {
    // Format ingredients input field values
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim()); // split ingredients and trim empty space

        if (ingArr.length !== 3)
          throw new Error('Wrong ingredient format! Please use the correct format'); //prettier-ignore

        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    // Format recipe object to match API formatting to use in POST request
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    // API Request (POST)
    const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    console.log(data);

    // Format uploaded recipe back to match project formatting
    state.recipe = createRecipeObject(data);

    // Add user created recipe to bookmarks
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
