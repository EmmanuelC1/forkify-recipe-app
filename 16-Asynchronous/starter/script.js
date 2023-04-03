'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryData = function (country) {
  // XMLHttpRequest function (old school way of doing AJAX calls)
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  // send request to url (async) emits load event
  request.send();
  // console.log(request.responseText); // nothing since request hasnt loaded

  // Listen for request to finish loading to get response
  request.addEventListener('load', function () {
    //   console.log(this.responseText); // this = request

    // turn response JSON to JS object
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
<article class="country">
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
  });
};

getCountryData('USA');
getCountryData('Portugal');
getCountryData('Germany');
