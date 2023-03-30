'use strict';

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
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in miles
    this.duration = duration; // in minutes
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // prettier-ignore
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  // Public Fields
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  // Calculate pace of running in min/miles
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  // Public Fields
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
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
  #mapZoomLevel = 15.5;
  #workouts = [];

  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
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
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

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

  // Hide workout details form and clear input fields
  _hideForm() {
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''; //prettier-ignore
    form.classList.add('hidden');
  }

  // On input change of workout type (running/cycling) toggle input field (cadence/elevation gain), respectively
  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  // Display Marker on map when user submits workout detail form, also creates workout object
  _newWorkout(e) {
    // Helper function to check if all inputs are numbers, returns boolean
    const validateInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    // Helper function to check if all inputs are positive, returns boolean
    const allPositive = (...inputs) => inputs.every(inp => inp >= 0);

    e.preventDefault(); // Prevent form from reloading page

    // Get coordinates where user clicked on map
    const { lat, lng } = this.#mapEvent.latlng;
    const coords = [lat, lng];

    // Store input values
    const workoutType = inputType.value;
    const distance = +inputDistance.value; // coalesce into number with '+'
    const duration = +inputDuration.value;
    let workout;

    // If workout running, create Running object
    if (workoutType === 'running') {
      const cadence = +inputCadence.value;

      // Check if data is valid
      if (
        !validateInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Input must be positive numbers.');

      workout = new Running(coords, distance, duration, cadence);
    }

    // If workout cycling, create Cycling object
    if (workoutType === 'cycling') {
      const elevGain = +inputElevation.value;

      // Check if data is valid
      if (
        !validateInputs(distance, duration, elevGain) |
        !allPositive(distance, duration)
      )
        return alert('Input must be positive numbers.');

      workout = new Cycling(coords, distance, duration, elevGain);
    }

    // Add object to workouts array (in Workout class)
    this.#workouts.push(workout);

    // Render Marker and Popup
    this._renderWorkoutMarker(workout);

    // Render Workout in sidebar
    this._renderWorkout(workout);

    // Hide Form and clear input fields
    this._hideForm();
  }

  // Render workout marker and popup on map with custom options on map at current coordinates
  _renderWorkoutMarker(workout) {
    L.marker(workout.coords, { riseOnHover: true })
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
          content: `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♂️'} ${workout.description}`, //prettier-ignore
        })
      )
      .openPopup();
  }

  // Render workout details on sidebar
  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️ ' : '🚴‍♂️ '
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">mi</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>`;

    if (workout.type === 'running') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/mi</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>`;
    }

    if (workout.type === 'cycling') {
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">mph</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">ft</span>
        </div>
      </li>`;
    }

    // insert workout after form each time
    form.insertAdjacentHTML('afterend', html);
  }

  // Center map on workout popup/marker that user clicks on sidebar (through event delegation)
  _moveToPopup(e) {
    // Select the li with workout closest to the clicked event
    const workoutEl = e.target.closest('.workout');

    // Ignore any element in container that is not the workout li
    if (!workoutEl) return;

    // Match workout id from li to the workouts array, to get the object
    const workout = this.#workouts.find(w => w.id === workoutEl.dataset.id);

    // Center map on popup/marker
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });

    // increment clicks property (using public interface)
    workout.click();
  }
}

// Start app
const app = new App();
