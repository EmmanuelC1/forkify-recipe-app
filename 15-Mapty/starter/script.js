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

class App {
  // Private Class Fields
  #map;
  #mapEvent;

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  // Get user's geolocation
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this), // Success getting geolocation (bind this keyword on callback to app obj)
        function () {
          alert('Could not get your current location.'); // Error getting getting geolocation
        }
      );
    }
  }

  // Display Leaflet Map at geolocation
  _loadMap(position) {
    // get latitude and longitude from geolocation
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    // set the view of the map at current coordinates with the zoom of 15.5
    this.#map = L.map('map').setView(coords, 15.5);

    // tiles that make up map with theme we chose from openstreetmap
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handles clicks on map (custom event listener provided through Leaflet library)
    this.#map.on('click', this._showForm.bind(this));
  }

  // Display Workout Details Form
  _showForm(event) {
    this.#mapEvent = event; // set the clicked 'event' on the map to 'mapEvent' (global variable)
    form.classList.remove('hidden');
    inputDistance.focus(); // focus the input field for distance for better UX
  }

  // On input change of workout type (running/cycling) toggle input field cadence/elevation gain, respectively
  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  // Display Marker when user submits workout detail form
  _newWorkout(e) {
    e.preventDefault(); // Prevent form from reloading page

    // Clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // Get coordinates where user clicked on map
    const { lat, lng } = this.#mapEvent.latlng;

    // Adds marker and popup with custom options on map at current coordinates
    L.marker([lat, lng])
      .addTo(this.#map)
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
  }
}

// Start app
const app = new App();
