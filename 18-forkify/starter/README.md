# User Stories

1. As a user, I want to **search for recipes**, so that I can find new ideas for meals.
2. As a user, I want to be able to **update the number of servings**, so that I can cook a meal for different number of people.
3. As a user, I want to **bookmark recipes**, so that I can review them later.
4. As a user, I want to be able to **create my own recipes**, so that I have them all organized in the same app.
5. As a user, I want to be able to **see my bookmarks and own recipes when I leave the app and come back later**, so that I can close the app safely afer cooking.

# Features

1. **Search for Recipes:**

   - _Search Functionality:_ input field to send request to API with searched keywords
   - Display results with pagination
   - Display recipe with cooking time, servings, and ingredients

2. **Update the number of servings**

   - _Change servings functionality:_ update all the ingredients according to current number of servings

3. **Bookmark recipes:**

   - _Bookmark functionality:_ display list of all bookmarked recipes

4. **Create my own recipes**

   - User can uplaod own recipes
   - User recipes will automatically be bookmarked
   - User can only see their own recipes, not recipes from other users

5. **See my bookmarks and own recipes when I leave the app and come back**
   - Store bookmark data in the browser using _local storage_
   - On page load, read saved bookmarks from local storage and display

# Flowchart - Part 1

### Features

1. _Search Funcionality:_ API search request
2. Results with pagination
3. Display recipe

![flowchart (part 1)](./forkify-flowchart-part-1.png)
