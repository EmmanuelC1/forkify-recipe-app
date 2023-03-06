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
let accLoggedIn = {}; // stores logged in account object

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
  accLoggedIn.balance = movements.reduce((sum, mov) => sum + mov, 0);
  labelBalance.textContent = `€ ${accLoggedIn.balance}`;
};

const calcDisplaySummary = function (currAcc) {
  const inSummary = currAcc.movements
    .filter(mov => mov > 0) // filter all deposits
    .reduce((acc, mov) => acc + mov, 0); // add all deposits, return total

  const outSummary = currAcc.movements
    .filter(mov => mov < 0) // filter all withdrawals
    .reduce((acc, mov) => acc + mov, 0); // add all withdrawals, return total

  const interestSummary = currAcc.movements
    .filter(mov => mov > 0) // filter all deposits
    .map(deposit => (deposit * currAcc.interestRate) / 100) // calc interest on each deposit
    .filter(interest => interest >= 1) // bank only pays interest if it is at least 1 EUR
    .reduce((acc, interest) => acc + interest, 0); // add all interest, return total

  labelSumIn.textContent = `€${inSummary}`;
  labelSumOut.textContent = `€${Math.abs(outSummary)}`;
  labelSumInterest.textContent = `€${interestSummary.toFixed(2)}`;
};

// Creates username using first inital of each name and adding new 'username' property to acct object passed in
const createUsernames = function (accts) {
  accts.forEach(function (acct) {
    acct.username = acct.owner // set 'username' property to...
      .toLowerCase() // turn owner (name) all lowercase
      .split(' ') // split each name in array
      .map(name => name[0]) // map each name in array (first, middle, last) and only return the first char of each
      .join(''); // join initals together
  });
};
createUsernames(accounts);

const updateUI = function (currAcc) {
  // Display all updated info
  displayMovements(currAcc.movements);
  calcDisplayBalance(currAcc.movements);
  calcDisplaySummary(currAcc);
};

const hideUI = function () {
  // Remove conatiner opacity
  containerApp.style.opacity = 0;

  // Change Welcome message back to default
  labelWelcome.textContent = 'Login to get started';

  // Reset 'accLoggedIn' object
  accLoggedIn = {};
};

// Event Handlers
btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // Prevents form from submitting & reloading page

  // Retrieve account object, undefined if not found
  accLoggedIn = accounts.find(acc => acc.username === inputLoginUsername.value); //prettier-ignore

  // UNSUCCESFUL LOGIN (using optional chaining '?' to handle 'undefined' account obj)
  if (accLoggedIn?.pin !== Number(inputLoginPin.value)) {
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
      accLoggedIn.owner.split(' ')[0]
    }`;

    // Clear input fields & take focus off (cursor no longer is active once submitted)
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    // Display container (opacity)
    containerApp.style.opacity = 1;

    // Update UI
    updateUI(accLoggedIn);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault(); // prevent form from submitting and reloading page

  // Retrieve input field values, find account object
  const transferToAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const transferAmount = Number(inputTransferAmount.value);

  if (
    transferAmount > 0 && // amount is not negative or 0
    transferToAcc && // transferToAcc is not undefined
    accLoggedIn.balance >= transferAmount && // has enough funds to transfer
    transferToAcc?.username !== accLoggedIn.username // user does not transfer to himself
  ) {
    // Complete transfer
    accLoggedIn.movements.push(-transferAmount);
    transferToAcc.movements.push(transferAmount);
  } else {
    // Error transferring
    alert('Cannot complete transfer. Please make sure all information is correct.'); //prettier-ignore
  }

  // Update UI
  updateUI(accLoggedIn);

  // Reset input fields
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferTo.blur();
  inputTransferAmount.blur();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);

  // Loans only get approved if there is at least one deposit that is at least 10% of the requested loan amount
  const isApproved = accLoggedIn.movements.some(mov => mov >= loanAmount * 0.1); // some returns true/false

  if (loanAmount > 0 && isApproved) {
    // Loan Approved
    // Add loan to account
    accLoggedIn.movements.push(loanAmount);

    // Update UI
    updateUI(accLoggedIn);
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
    confirmUsername === accLoggedIn.username && // user can only close their account, not someone else's
    confirmPin === accLoggedIn.pin
  ) {
    // Close Account
    // find index of current account in 'accounts' array, returns -1 if not found
    const accIndex = accounts.findIndex(
      acc => acc.username === accLoggedIn.username
    );

    // remove account from 'accounts' array at 'accIndex'
    accounts.splice(accIndex, 1);

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
