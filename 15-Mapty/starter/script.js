'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // get latitude and longitude ffrom geolocation
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      // set the view of the map at current coordinates with the zoom of 15.5
      map = L.map('map').setView(coords, 15.5);

      // tiles that make up map with theme we chose from openstreetmap
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Handles clicks on map (custom event listener provided through Leaflet library)
      map.on('click', function (event) {
        mapEvent = event; // set event on map to mapEvent (global variable)
        form.classList.remove('hidden'); // show workout detail form
        inputDistance.focus(); // focus the input field for distance for better UX
      });
    },
    function () {
      alert('Could not get your current location.');
    }
  );
}

/////////////////////////////////////////////////
// Event Listeners

// Display Marker when user submits workout detail form
form.addEventListener('submit', function (e) {
  // Prevent form from reloading page
  e.preventDefault();

  // Clear input fields
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';

  // Get coordinates where user clicked on map
  const { lat, lng } = mapEvent.latlng;

  // Adds marker and popup with custom options on map at current coordinates
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
        content: 'Workout',
      })
    )
    .openPopup();
});

// On input change of workout type (running/cycling) toggle input field cadence/elevation gain, respectively
inputType.addEventListener('change', function () {
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
});
