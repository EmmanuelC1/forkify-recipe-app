# forkify Web Application

forkify is an online recipe application that uses the forkify API and allows users to search for recipes, create their own recipes, bookmark recipes, and update ingredient measurements based on the number of servings.

# Getting Started

### Prerequisites

- npm
  ```
  npm install npm@latest -g
  ```
- parcel
  ```
  npm install parcel
  ```

### Installation

1. Get free API Key at <https://forkify-api.herokuapp.com/v2>
2. Clone the repo
3. Install all NPM Packages
   ```
   npm install
   ```
4. Enter your API Key in `config.js`
   ```
   export const API_KEY = 'Enter Your API Key';
   ```
5. Run Application
   ```
   npm start
   ```
6. Open browser at <http://localhost:1234>

# Project Architecture

![Project Architecture](./src/img/projectDiagrams/forkify-architecture-recipe-loading.png)

# Flowchart - Part 1

### Features

1. _Search Funcionality:_ API search request
2. Results with pagination
3. Display recipe

![Flow Chart (part 1)](./src/img/projectDiagrams/forkify-flowchart-part-1.png)

# Flowchart - Part 2

### Features

4. _Change servings functionality_
5. _Bookmarking functionality_
6. Store bookmark data in the browser
7. On page load, read saved bookmarks

![Flow Chart (part 2)](./src/img/projectDiagrams/forkify-flowchart-part-2.png)

# Flowchart - Part 3

### Features

8. Own recipe upload
9. Own recipe automatically bookmarked
10. User can only see own recipes, not from others

![Flow Chart (part 3)](./src/img/projectDiagrams/forkify-flowchart-part-3.png)

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

# License

© Copyright by [Jonas Schmedtmann](https://twitter.com/jonasschmedtman). Use for learning or your portfolio. Don't use to teach. Don't claim as your own.

Project is from the course [_The Complete JavaScript Course 2023: From Zero to Expert!_](https://www.udemy.com/course/the-complete-javascript-course/) by <sub>Jonas Schmedtmann<sub>
