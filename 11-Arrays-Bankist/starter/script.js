'use strict';

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Displays Transactions for acct that is signed in
const displayMovements = function (movements) {
  // remove default container movements (hard coded movements in HTML file)
  containerMovements.innerHTML = '';

  // Handle empty movements arr
  if (movements.length === 0) return;

  // append a movement row in movements div (container) for each movement in account
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //prettier-ignore
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">€ ${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculates balance for a given account with movements arr, and updated the Balance label
const calcDisplayBalance = function (movements) {
  //TODO handle empty movements
  const balance = movements.reduce((sum, mov) => sum + mov, 0);
  labelBalance.textContent = `€ ${balance}`;
};

const calcDisplaySummary = function (movements, interestRate) {
  //TODO handle empty movements
  const inSummary = movements
    .filter(mov => mov > 0) // filter all deposits
    .reduce((acc, mov) => acc + mov, 0); // add all deposits, return total

  const outSummary = movements
    .filter(mov => mov < 0) // filter all withdrawals
    .reduce((acc, mov) => acc + mov, 0); // add all withdrawals, return total

  const interestSummary = movements
    .filter(mov => mov > 0) // filter all deposits
    .map(deposit => (deposit * interestRate) / 100) // calc interest on each deposit
    .filter(interest => interest >= 1) // bank only pays interest if it is at least 1 EUR
    .reduce((acc, interest) => acc + interest, 0); // add all interest, return total

  labelSumIn.textContent = `€${inSummary}`;
  labelSumOut.textContent = `€${Math.abs(outSummary)}`;
  labelSumInterest.textContent = `€${interestSummary.toFixed(2)}`;
};

// Creates username using first inital of each name and adding new 'username' property to acct object passed in
const createUsernames = function (accts) {
  //TODO handle empty accts
  accts.forEach(function (acct) {
    acct.username = acct.owner // set 'username' property to...
      .toLowerCase() // turn owner (name) all lowercase
      .split(' ') // split each name in array
      .map(name => name[0]) // map each name in array (first, middle, last) and only return the first char of each
      .join(''); // join initals together
  });
};
createUsernames(accounts);

// Event Handlers
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // Prevents form from submitting & reloading page

  // Retrieve account object, undefined if not found
  const account = accounts.find(acc => acc.username === inputLoginUsername.value); //prettier-ignore

  // UNSUCCESFUL LOGIN (using optional chaining '?' to handle 'undefined' account obj)
  if (account?.pin !== Number(inputLoginPin.value)) {
    // Remove container opacity
    containerApp.style.opacity = 0;

    // Change welcome label back to default
    labelWelcome.textContent = 'Login to get started';

    // Clear input fields & take focus off (cursor no longer is active on inputs once submitted)
    inputLoginUsername.value = inputLoginPin.value = ''; // works because assignment operator works right to left
    inputLoginUsername.blur();
    inputLoginPin.blur(); // blur method takes focus off of cursor

    // Display error message
    alert('Wrong username or password');

    return;
  } else {
    // SUCCESSFUL LOGIN
    // Add welcome message (first name only)
    labelWelcome.textContent = `Welcome back, ${account.owner.split(' ')[0]}`;

    // Clear input fields & take focus off (cursor no longer is active once submitted)
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Display container (opacity)
    containerApp.style.opacity = 1;

    // Display account info
    displayMovements(account.movements);
    calcDisplayBalance(account.movements);
    calcDisplaySummary(account.movements, account.interestRate);
  }
});
