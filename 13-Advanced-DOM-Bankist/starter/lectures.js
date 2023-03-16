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

///////////////////////////////////////
// Smooth Scrolling
// (following code should be in 'click' event listener)
/*
// Get section 1 coordinates
const s1Coordinates = section1.getBoundingClientRect();

// No smooth scrolling behavior
window.scrollTo(s1Coordinates.left + window.scrollX, s1Coordinates.top + window.scrollY);

// Smooth Scrolling (older version) -> newer version in script.js event listener
window.scrollTo({
  left: s1Coordinates.left + window.scrollX, // section 1 from left of page + current scroll position (horizontal scroll)
  top: s1Coordinates.top + window.scrollY, // section 1 from top of page + current scroll position
  behavior: 'smooth', // smooth scrolling
});

// Smooth Scrolling for Nav Links (anchor tags)
// (Good Solution but not the most efficient, most efficient in script.js)

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link =>
  link.addEventListener('click', function (e) {
    // ignore 'Open Account 'link, does not scroll instead opens modal
    if (this.getAttribute('href') == '#') return;

    // Prevent link to move to section and showing in URL
    e.preventDefault();

    const sectionID = this.getAttribute('href');

    // Smooth Scrolling
    document.querySelector(sectionID).scrollIntoView({
      behavior: 'smooth',
    });
  })
);
*/

///////////////////////////////////////
// Types of Events and Event Handlers
/*
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading.');

  // Remove event listener (has to be using named function)
  h1.removeEventListener('mouseenter', alertH1);
};

// Another way to listen to events (older version)
// h1.onmouseenter = alertH1;

// 'mouseenter' similar to hover in CSS (event happens when mouse 'enters' a selected element)
h1.addEventListener('mouseenter', alertH1);
 
// removes event listener after 3 seconds
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Another way of Handling Events (NOT to be used)
// <h1 onclick="alert('HTML alert'"> </h1>  // inline in html file itself 
*/

///////////////////////////////////////
// Event Propagation in Practice
// (notes in notes.js)
/*
// Generate random color rbg(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

// Event Listeners
document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  this.style.backgroundColor = randomColor();

  // Stop Propagation (event wont happen in parent elements)
  // e.stopPropagation(); 
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('Container', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  console.log('Nav Bar', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
  this.style.backgroundColor = randomColor();
});
*/

///////////////////////////////////////
// DOM Traversing
// (for this example, we are traversing the DOM relative to h1)
/*
const h1 = document.querySelector('h1');

// Going Downwards (child elements)
console.log(h1.querySelectorAll('.highlight')); // selects both span's with class 'highlight'
console.log(h1.childNodes); // selects all child 'nodes' from h1, includes text, HTML comments, basically everything (NodeList)
console.log(h1.children); // selects all child 'elements' from h1, includes only elements so span and br (HTMLCollection)

h1.firstElementChild.style.color = 'white'; // only first element child gets color of white (first span in this case)
h1.lastElementChild.style.color = 'orangered'; // only last element child gets color of white (second span in this case)

// Going Upwards (parent elements)
console.log(h1.parentNode); // div.header__title
console.log(h1.parentElement); // div.header__title (in this case its the same for both because the parent element also happens to be the node)

// parent element that is not a direct parent. Selecting closest '.header' to h1 and using a css variable to set new background color
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)'; // selects itself, beacuse its the closest h1

///////////
// querySelector() finds children no matter how deep in the DOM tree
// .closest() finds parents no matter how deep in DOM tree 
//////////

// Going Sideways (sibling elements) can only access direct siblings, previous and the next one.
console.log(h1.previousElementSibling); // 'null', because its the first element and there is nothing before
console.log(h1.nextElementSibling); // h4 element, after h1

// selects 'nodes'
console.log(h1.previousSibling); // #text
console.log(h1.nextSibling); // #text

// if we need all siblings (and not just prev and next), we move to up to parent element and select all its children form there
console.log(h1.parentElement.children); // HTMLCollection [h1, h4, button, img]

// lets change style to all siblings except itself (h1)
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.5)'; // scale all elements 50% smaller except h1
});
*/
