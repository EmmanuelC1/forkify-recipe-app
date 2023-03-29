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

class Workout {
  // Public Fields
  date = new Date();
  id = (Date.now() + '').slice(-10); // id is the last 10 numbers of a Date (turned into string)

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in miles
    this.duration = duration; // in minutes
  }
}

class Running extends Workout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  // Calculate pace of running in min/miles
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  // Calulate speed of cycling in mph
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

////////////////////////////////////////////
// Application Architecture

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
        this._loadMap.bind(this), // Success getting geolocation (bind this keyword on callback to app instance)
        function () {
          alert('Could not get your current location.'); // Error getting geolocation
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

    // tiles that make up map with URL template from openstreetmap
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handles clicks on map (custom event listener provided through Leaflet library)
    this.#map.on('click', this._showForm.bind(this));
  }

  // Display Workout Details Form
  _showForm(event) {
    this.#mapEvent = event; // set the clicked 'event' on the map to 'mapEvent'
    form.classList.remove('hidden');
    inputDistance.focus(); // focus the input field for distance for better UX
  }

  // On input change of workout type (running/cycling) toggle input field (cadence/elevation gain), respectively
  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  // Display Marker on map when user submits workout detail form, also creates workout object
  _newWorkout(e) {
    e.preventDefault(); // Prevent form from reloading page

    // Get coordinates where user clicked on map
    const { lat, lng } = this.#mapEvent.latlng;
    const coords = [lat, lang];

    // Store input values
    const workoutType = inputType.value;
    const distance = inputDistance.value;
    const duration = inputDuration.value;
    let workoutName;

    // Create new objects based on the workout type
    if (workoutType === 'running') {
      const cadence = inputCadence.value;
      workoutName = '🏃‍♂️ Running';

      //prettier-ignore
      const runningWorkout = new Running(coords, distance, duration, cadence);
    }
    if (workoutType === 'cycling') {
      const elevGain = inputElevation.value;
      workoutName = '🚴‍♂️ Cycling';

      //prettier-ignore
      const cyclingWorkout = new Cycling(coords, distance, duration, elevGain);
    }

    // Clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // Adds marker and popup with custom options on map at current coordinates
    L.marker([lat, lng], { riseOnHover: true })
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workoutType}-popup`,
          content: workoutName,
        })
      )
      .openPopup();

    // Hide form
    form.classList.add('hidden');
  }
}

// Start app
const app = new App();
