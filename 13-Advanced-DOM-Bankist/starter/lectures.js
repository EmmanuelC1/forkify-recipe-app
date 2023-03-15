'use strict';

///////////////////////////////////////
// Selecting Elements
const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
console.log(allSections); // returns Node List

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // returns live HTML Collection

// also returns live HTML Collection (auto updates if element is modified/created/deleted)
console.log(document.getElementsByClassName('btn'));

// Creating and Inserting Elements

// Creating Elements
// .insertAdjacentHTML (good solution to insert (used in Bankist last section))

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie-message">Got it<button/>';

// adds as a first child to element (inside header)
// header.prepend(message);

// adds as a last child to element (inside header)
header.append(message);

//copy message node (true means all child elements will also be copied (innerHTML))
// header.append(message.cloneNode(true));

// Adds before (outside) header element (making it sibling element)
// header.before(message);

// Adds after (outside) header element (making it sibling element)
// header.after(message);

// Deleting Elements
document
  .querySelector('.btn--close-cookie-message')
  .addEventListener('click', function () {
    message.remove(); // new method
    // message.parentElement.removeChild(message); // old method to remove
  });
