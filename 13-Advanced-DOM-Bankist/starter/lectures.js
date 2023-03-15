'use strict';

///////////////////////////////////////
// Selecting Elements
/*
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
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie-message">Got it</button>';

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
*/

///////////////////////////////////////
// Styles, Attributes, and Classes
/*
// Styles (inline styles)
message.style.backgroundColor = '#37393d';
message.style.width = '120%';

console.log(message.style.backgroundColor); // rgb(55, 57, 61)
console.log(message.style.color); // '' nothing because only works for inline styles (not styles set in css file)
console.log(getComputedStyle(message).color); // rgb(187, 187, 187) Solution for non inline styles

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// console.log(message.style.height);

// CSS Custom Properties (CSS Variables)
// from root in CSS change primary color to orangered
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist Logo
console.log(logo.src); // absolute path to img
console.log(logo.getAttribute('src')); // relative path to img 'img/logo.png'
console.log(logo.className); // nav__logo

const link = document.querySelector('.nav__link--btn');
console.log(link.href); // absolute link path
console.log(link.getAttribute('href')); // '#'

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer); // not a standard attribute so undefined
console.log(logo.getAttribute('designer')); // Emmanuel
logo.setAttribute('company', 'Bankist');

// Data Attributes (has to start with 'data' in CSS)
console.log(logo.dataset.versionNumber); // 3.0

// Classes
logo.classList.add('insertClassHere', 'anotherClass');
logo.classList.remove('insertClassHere', 'anotherClass');
logo.classList.toggle('insertClassHere');
logo.classList.contains('insertClassHere'); // not 'includes'

// DONT use since it overrides all existing classes then only allows one
// logo.className = 'emmanuel';
*/