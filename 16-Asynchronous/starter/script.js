'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// Renders HTML for a country
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
  // countriesContainer.style.opacity = 1; // moved to 'finally' block
};

// Handles error (catch block)
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1; // moved to 'finally' block
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
// IMPORTANT: fetch only rejects Promise if there is not internet connection.

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

// Same code as above (better simplified with arrow functions)
// const getCountryDataPromises = function (country) {
//   // Country 1:
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(res => {
//       console.log(res);

//       if (!res.ok) {
//         // Create new custom error if res property 'ok' is false (404 status code)
//         // throw keyword will immediatley terminate the current function (similar to return)
//         // if code reaches here, Promise is rejected so it will continue in the 'catch' block with 'err' being this new Error we created
//         throw new Error(`Country not found (${res.status} ${res.statusText})`);
//       }
//       return res.json();
//     })
//     .then(data => {
//       renderCountry(data[0]); // Render Country 1

//       // get neighbor from country
//       const neighbor = data[0].borders?.[0];
//       // const neighbor = 'asdf'; // simulate error on neighbor country
//       if (!neighbor) throw new Error('No neighbor found!');

//       // Country 2: fetch data from neighbor using country code endpoint and render
//       // we return this promise so that we can use then() method outside this then() function for the first fetch (AJAX call)
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then(res => {
//       console.log(res);
//       if (!res.ok)
//         throw new Error(`Country not found (${res.status} ${res.statusText})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour')) // Render Country 2
//     .catch(err => {
//       // Catches any errors that happen in this whole promise chain (catch also returns new Promise)
//       // Catches only no internet connection error
//       console.error(`💥 ${err}`);
//       renderError(`Something went wrong 💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       // Finally method ALWAYS gets called whether Promise is fulfilled or rejected (last thing that happends with Promise)
//       // we use this method for something that needs to happen no matter the result of the Promise (e.g. remove loading spinner)
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryDataPromises('mexico');
// getCountryDataPromises('portugal');

//////////////////////////////////////////////
// Handling Rejected Promises & Throwing Errors Manually
/*

// Fetch and throw new Error, returns Promise (Helper function to avoid duplicate code)
const getJSON = function (url, errorMsg) {
  return fetch(url).then(res => {
    // console.log(res);

    if (!res.ok) {
      // Create new custom error if res property 'ok' is false (404 status code)
      // throw keyword will immediatley terminate the current function (similar to return)
      // if code reaches here, Promise is rejected so it will continue in the 'catch' block with 'err' being this new Error we created
      throw new Error(`${errorMsg}`);
    }
    return res.json();
  });
};

// Same code as above but even more simplified
const getCountryDataPromises = function (country) {
  const countryURL = `https://restcountries.com/v3.1/name/${country}`;

  getJSON(countryURL, 'Country not found')
    .then(data => {
      renderCountry(data[0]);

      const neighbor = data[0].borders?.[0];
      if (!neighbor) throw new Error('No neighboring country found');

      const neighborURL = `https://restcountries.com/v3.1/alpha/${neighbor}`;
      return getJSON(neighborURL, 'Country not found');
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err =>
      renderError(`Something went wrong 💥 ${err.message}. Try again!`)
    )
    .finally(() => (countriesContainer.style.opacity = 1));
};

// used for development purposes to simulate user losing internet connection
// btn.addEventListener('click', function () {
//   getCountryDataPromises('USA');
//   // getCountryDataPromises('asdf');
// });

getCountryDataPromises('USA');
// getCountryDataPromises('australia');

*/

//////////////////////////////////////////////
// The Event Loop in Practice
/*
// first thing in call stack, top level code (1)
console.log('Test start');

// callback added to callback queue (5)
setTimeout(() => console.log('0 sec timer'), 0);

// has priority over timer beacuse of Microtask Queue (3)
Promise.resolve('Resolved Promise 1').then(res => console.log(res));

// Microtask has priority over timer (4)
Promise.resolve('Resolved Promise 2').then(res => {
  // task that will take some time, showcasing timer will take more than the 0 seconds we set beacuse of this special priority queue
  for (let i = 0; i < 1_000_000_000; i++) {}
  console.log(res);
});

// second thing in call stack, top level code (2)
console.log('Test end');
*/

//////////////////////////////////////////////
// Building a Simple Promise
/*
// Simulating a lottery with Promises (fulfilled = win, rejected = lose)

const lotteryPromise = new Promise(function (resolve, reject) {
  // this function is called the 'executer' function. Contains the async behavior that we are trying to
  // handle with the promise. This executer should produce a result value.
  console.log('Lotter draw is currently taking place 🔮');

  setTimeout(() => {
    if (Math.random() >= 0.5) {
      // Win the lottery, call the resolve function to resolve/fulfill promise
      // the value that we pass in, is the result of the promise that will be available in the 'then' method
      resolve('You WIN 💰');
    } else {
      // Lose the lottery, call the reject function to reject promise
      // the value that we pass in, is the error message that we later handle in the 'catch' method
      reject(new Error('You lost, better luck next time.'));
    }
  }, 2000);
});

// Consuming Promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying the setTimeout function
const wait = function (seconds) {
  return new Promise(resolve => {
    // no reject function in executer because its impossible for timer to fail
    setTimeout(resolve, seconds * 100);
  });
};

// Consume settimeout promise, 'then' does not receive resolved value
wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1); // chain another promise
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1); // chain another promise
  })
  .then(() => {
    console.log('3 seconds passed');
  });

// Callback hell below, promise chaining above (better solution) -> (same code result)
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//     }, 1000);
//   }, 1000);
// }, 1000);

// Create a fulfilled or reject Promise immediately
Promise.resolve('resolved this promise').then(res => console.log(res));

Promise.reject(new Error('rejected this promise')).catch(err =>
  console.error(err)
);
*/

//////////////////////////////////////////////
// Promisifying the Geolocation API
/*
const getPosition = function () {
  return new Promise((resolve, reject) => {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position), // returns current position as resolved value
    //   err => reject(new Error('Could not get current location'))
    // );

    // Simplified version
    // callback for this API automatically gets called, so no need to write them (position also gets passed in automatically)
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition()
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Function from Coding Challenge #1
const whereAmI = function () {
  getPosition()
    .then(res => {
      const { latitude: lat, longitude: lng } = res.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      // Task 5
      if (res.status === 403)
          throw new Error(`Error ${res.status}: Too many requests in succession.`); //prettier-ignore
      return res.json();
    })
    .then(data => {
      // Task 2
      const { city, country } = data;

      // Task 3
      console.log(`You are in ${city}, ${country}`);

      // Task 6
      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error('Country not found');
      return res.json();
    })
    .then(data => {
      // Task 7
      renderCountry(data[0]);

      const neighbor = data[0].borders?.[0];
      if (!neighbor) throw new Error(`No neighboring countries found.`);

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
    })
    .then(res => {
      if (!res.ok) throw new Error('Country not found');
      return res.json();
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => console.error(err.message)) // Task 4
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', whereAmI);
*/

//////////////////////////////////////////////
// Consuming Promises with Async/Await
/*
const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// Async functions will run in the background performing the code inside and then return a Promise when finished
// inside the async functions, we can have 1 or more 'await'. Awaits has to be follwed by a Promise
// await waits for Promises to be resolved before moving on. It is non blocking because it is still in an async function
// apart from the normal Call Stack. so it still does not block the Call Stack and is asynchronous

const whereAmI = async function () {
  try {
    // Get geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location!');

    const dataGeo = await resGeo.json();
    const { country } = dataGeo;

    // Country data
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error('Problem getting country!');

    const data = await res.json();

    // Render Country
    renderCountry(data[0]);
    countriesContainer.style.opacity = 1;
  } catch (err) {
    console.error(`🔴 ${err}`);
    renderError(`🔴 ${err.message}`);
  }
};

whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
console.log('first');
*/

//////////////////////////////////////////////
// Error Handling with try...catch
/*
try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  alert(err.message);
}
*/
