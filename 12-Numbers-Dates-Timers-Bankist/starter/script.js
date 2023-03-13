'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-03-05T17:01:17.194Z',
    '2023-03-07T23:36:17.929Z',
    '2023-03-09T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2023-03-01T18:49:59.371Z',
    '2023-03-03T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];
let acctLoggedIn = {}; // stores logged in account object
let isSorted = false; // preserves sorted state for btnSort
const dateTimeOptions = {
  // options object for date and time formatting using Internationalization API
  month: 'numeric',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
};

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

// Returns formatted date (MM/DD/YYYY) or if date <= 7 days ago return how many days ago
const formatDate = function (date, locale) {
  // function returns how many days have passed since 'now' (when function is called)
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  // return how many days ago
  if (daysPassed === 0) return 'Today';
  else if (daysPassed === 1) return 'Yesterday';
  else if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // return Internatinalized formatting based on user locale
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

// Returns formatted currency (value) based on locale and currency
const formatCurrency = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

// Displays Transactions. Adds HTML movements rows for each movement in a given arr, sort if needed (true)
function displayMovements(acct, sort = false) {
  // remove default container movements (hard coded movements in HTML file)
  containerMovements.innerHTML = '';

  // Handle empty movements arr
  if (acct.movements.length === 0) return;

  // if sort is true, copy movements arr (using slice) and sort copy. Otherwise, keeps using movements arr as is. Store in 'movs'
  const movs = sort
    ? acct.movements.slice().sort((a, b) => a - b)
    : acct.movements;

  // append a movement row in movements div (container) for each movement in account (using movs, which has copy of sorted or unsorted arr)
  movs.forEach(function (mov, i) {
    // call formatDate() that returns a formatted date based on user locale
    const formattedDate = formatDate(
      new Date(acct.movementsDates[i]),
      acct.locale
    );

    // call formatCurrency() that returns formatted currency based on user locale and currency style
    const formattedMov = formatCurrency(mov, acct.locale, acct.currency);

    // conditional variable to determine what css class to use for movement__type--(deposit/withdrawal)
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //prettier-ignore
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__date">${formattedDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

// Calculates balance for a given movements arr, and updated the Balance label
const calcDisplayBalance = function (acct) {
  // Create balance property on account obj with the balance calculated by all the movements of that account
  acct.balance = acct.movements.reduce((sum, mov) => sum + mov, 0);
  // update label
  labelBalance.textContent = formatCurrency(
    acct.balance,
    acct.locale,
    acct.currency
  );
};

// Calculates summary (money in, out and interest) for a given account and updates labels accordingly
const calcDisplaySummary = function (acct) {
  const inSummary = acct.movements
    .filter(mov => mov > 0) // filter all deposits
    .reduce((sum, mov) => sum + mov, 0); // add all deposits, return total

  // update label
  labelSumIn.textContent = formatCurrency(
    inSummary,
    acct.locale,
    acct.currency
  );

  const outSummary = acct.movements
    .filter(mov => mov < 0) // filter all withdrawals
    .reduce((sum, mov) => sum + mov, 0); // add all withdrawals, return total

  // update label
  labelSumOut.textContent = formatCurrency(
    Math.abs(outSummary),
    acct.locale,
    acct.currency
  );

  const interestSummary = acct.movements
    .filter(mov => mov > 0) // filter all deposits
    .map(deposit => (deposit * acct.interestRate) / 100) // calc interest on each deposit
    .filter(interest => interest >= 1) // bank only pays interest if it is at least 1 EUR
    .reduce((sum, interest) => sum + interest, 0); // add all interest, return total

  // update label
  labelSumInterest.textContent = formatCurrency(
    interestSummary,
    acct.locale,
    acct.currency
  );
};

// Creates username using first inital of each name and adding new 'username' property to acct object passed in
const createUsernames = function (acct) {
  acct.forEach(function (acct) {
    acct.username = acct.owner // set 'username' property to...
      .toLowerCase() // turn owner (name) all lowercase
      .split(' ') // split each name in array
      .map(name => name[0]) // map each name in array (first, middle, last) and only return the first char of each
      .join(''); // join initals together
  });
};
createUsernames(accounts);

// Calls all display functions to update UI with correct info for current account signed in
const updateUI = function (acct) {
  // Display all updated info
  displayMovements(acct);
  calcDisplayBalance(acct);
  calcDisplaySummary(acct);
};

// Resets UI to default
const hideUI = function () {
  // Remove conatiner opacity
  containerApp.style.opacity = 0;

  // Change Welcome message back to default
  labelWelcome.textContent = 'Login to get started';

  // Reset 'acctLoggedIn' object
  acctLoggedIn = {};
};

// //FIXME ALWAYS LOGGED IN FOR DEVELOPMENT
// acctLoggedIn = account1;
// updateUI(acctLoggedIn);
// containerApp.style.opacity = 1;
// //FIXME ALWAYS LOGGED IN FOR DEVELOPMENT

// Event Handlers
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // Prevents form from submitting & reloading page

  // Retrieve account object, undefined if not found
  acctLoggedIn = accounts.find(acct => acct.username === inputLoginUsername.value); //prettier-ignore

  // UNSUCCESFUL LOGIN (using optional chaining '?' to handle 'undefined' account obj)
  if (acctLoggedIn?.pin !== Number(inputLoginPin.value)) {
    // Reset UI to login state
    hideUI();

    // Clear input fields & take focus off (cursor no longer is active on inputs once submitted)
    inputLoginUsername.value = inputLoginPin.value = ''; // works because assignment operator works right to left
    inputLoginUsername.blur();
    inputLoginPin.blur(); // blur method takes focus off of cursor

    // Display error message
    alert('Wrong username or pin');

    return;
  } else {
    // SUCCESSFUL LOGIN
    // Add welcome message (first name only)
    labelWelcome.textContent = `Welcome back, ${
      acctLoggedIn.owner.split(' ')[0]
    }`;

    // Clear input fields & take focus off (cursor no longer is active once submitted)
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Display container (opacity)
    containerApp.style.opacity = 1;

    // Create and display current Date and Time
    const now = new Date();

    // Internationalize Date based on user locale and Bankist format options
    labelDate.textContent = new Intl.DateTimeFormat(
      acctLoggedIn.locale,
      dateTimeOptions
    ).format(now);

    // Update UI
    updateUI(acctLoggedIn);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); // prevent form from submitting and reloading page

  // Retrieve input field values, find account object
  const transferToAcct = accounts.find(
    acct => acct.username === inputTransferTo.value
  );
  const transferAmount = Number(inputTransferAmount.value);

  if (
    transferAmount > 0 && // amount is not negative or 0
    transferToAcct && // transferToAcct is not undefined
    acctLoggedIn.balance >= transferAmount && // has enough funds to transfer
    transferToAcct?.username !== acctLoggedIn.username // user does not transfer to himself
  ) {
    // Complete transfer
    // Add transfer to each account movements' array
    acctLoggedIn.movements.push(-transferAmount);
    transferToAcct.movements.push(transferAmount);

    // Current date of transfer
    const transferDate = new Date().toISOString();

    // Add current date to each account movementsDates' array
    acctLoggedIn.movementsDates.push(transferDate);
    transferToAcct.movementsDates.push(transferDate);
  } else {
    // Error transferring
    alert('Cannot complete transfer. Please make sure all information is correct.'); //prettier-ignore
  }

  // Update UI
  updateUI(acctLoggedIn);

  // Reset input fields
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferTo.blur();
  inputTransferAmount.blur();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Math.floor(inputLoanAmount.value);

  // Loans only get approved if there is at least one deposit that is at least 10% of the requested loan amount
  const isApproved = acctLoggedIn.movements.some(
    mov => mov >= loanAmount * 0.1
  ); // some returns true/false

  if (loanAmount > 0 && isApproved) {
    // Loan Approved (happens after 2.5 secs)
    setTimeout(function () {
      // Add loan to account
      acctLoggedIn.movements.push(loanAmount);

      // Add loan date
      const loanDate = new Date().toISOString();
      acctLoggedIn.movementsDates.push(loanDate);

      // Update UI
      updateUI(acctLoggedIn);
    }, 2500);
  } else {
    // Loan Not Approved
    alert('Bankist could not approve your requested loan.');
  }

  // Reset input fields
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // Get input values
  const confirmUsername = inputCloseUsername.value;
  const confirmPin = Number(inputClosePin.value);

  if (
    confirmUsername === acctLoggedIn.username && // user can only close their account, not someone else's
    confirmPin === acctLoggedIn.pin
  ) {
    // Close account
    // find index of current account in 'accounts' array, returns -1 if not found
    const acctIndex = accounts.findIndex(
      acct => acct.username === acctLoggedIn.username
    );

    // remove account from 'accounts' array at 'acctIndex'
    accounts.splice(acctIndex, 1);

    // Logout user, and reset UI to login state
    hideUI();

    // alert user of successful account closure
    alert('Success! Your account was succesfully closed and deleted.');
  } else {
    // Error closing account
    alert('Error closing account. Wrong username or pin');
  }

  // Reset input fields
  inputCloseUsername.value = inputClosePin.value = '';
  inputCloseUsername.blur();
  inputClosePin.blur();
});

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  // Sort movements
  displayMovements(acctLoggedIn, !isSorted);
  isSorted = !isSorted; // changing boolean to opposite (above just calls the opposite, does not actually change it)
});
