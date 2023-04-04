'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
<article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" alt="${data.flags.alt}" />
    <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1_000_000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
    </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

//////////////////////////////////////////////
// XMLHttpRequest: our first AJAX call
/*
const getCountryData = function (country) {
  // XMLHttpRequest function (old school way of doing AJAX calls)
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  // Send request to url (async) emits load event
  request.send();
  // console.log(request.responseText); // nothing since request hasnt loaded

  // Listen for request to finish loading to get response
  request.addEventListener('load', function () {
    //   console.log(this.responseText); // this = request

    // Turn response JSON to JS object
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country with data, inserts html
    renderCountry(data);
  });
};

// AJAX calls running in parallel, cannot control which one is fetched first
getCountryData('USA');
getCountryData('Portugal');
getCountryData('Germany');
*/

//////////////////////////////////////////////
// Callback Hell: nested async or AJAX calls (callbacks)
/*
const getCountryAndNeighbor = function (country) {
  // AJAX Call (1): XMLHttpRequest function (old school way of doing AJAX calls)
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  // Send request to url (async) emits load event
  request.send();
  // console.log(request.responseText); // nothing since request hasnt loaded

  // Listen for request to finish loading to get response
  request.addEventListener('load', function () {
    //   console.log(this.responseText); // this = request

    // Turn response JSON to JS object
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country (1) inserting html to countries container
    renderCountry(data);

    // Get neighboring country (2) –– optional chaining, to avoid error w/ countries w/o neighbors
    const neighbor = data.borders?.[0];
    console.log(neighbor);

    // Return if no neighbors
    if (!neighbor) return;

    // AJAX Call (2):
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`); // different endpoint for neighbors (using country code)
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      // Render neighbor country with special class
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbor('usa');
getCountryAndNeighbor('portugal');

// Callback Hell (async task)
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

//////////////////////////////////////////////
// Promises and the Fetch API

// Fetch API (Modern way of making AJAX calls)
// const request = fetch(`https://restcountries.com/v3.1/name/mexico`);
// console.log(request); // returns Promise object

//////////////////////////////////////////////
// Consuming Promises

// const getCountryDataPromises = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (res) {
//       // Handle Fulfilled Promise from fetch
//       console.log(res);

//       // json() method is available on all response objects that are coming from fetch (all resolved values)
//       // it's also an async function, so it will return a new promise
//       return res.json();
//     })
//     .then(function (data) {
//       // Handle 'res.json()' promise
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// Simplified version of above code (Flat Chain of Promises)
const getCountryDataPromises = function (country) {
  // Country 1:
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => {
      renderCountry(data[0]); // Render Country 1

      // get neighbor from country
      const neighbor = data[0].borders?.[0];
      if (!neighbor) return;

      // Country 2: fetch data from neighbor using country code endpoint and render
      // we return this promise so that we can use then() method outside this then() function for the first fetch (AJAX call)
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
    })
    .then(res => res.json())
    .then(data => renderCountry(data[0], 'neighbour')); // Render Country 2
};

getCountryDataPromises('mexico');
// getCountryDataPromises('portugal');
