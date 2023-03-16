'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnLearnMore = document.querySelector('.btn--scroll-to');
const navLinkContainer = document.querySelector('.nav__links');
const section1 = document.querySelector('#section--1');

// Modal Window Functions
const openModal = function (e) {
  // Prevent a tag (link) to reset scroll to top of page
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

///////////////////////////////////////
// Event Listeners
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// Close Modal event listeners (next 3)
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Smooth Scrolling (Learn more button)
btnLearnMore.addEventListener('click', function () {
  // Modern Smooth Scrolling (only supported in modern browsers)
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation using Event Delegation (Nav bar links with smooth scrolling)
navLinkContainer.addEventListener('click', function (e) {
  // Prevent link to move page to section and showing in URL
  e.preventDefault();

  // Handle event only if links inside container is clicked (not container itself -> 'nav__links')
  if (e.target.classList.contains('nav__link')) {
    // Get section ID from target element that was clicked (stored in href)
    const sectionID = e.target.getAttribute('href');

    // Ignore 'Open Account' link, does not scroll instead opens modal
    if (sectionID === '#') return;

    // Smooth Scrolling
    document.querySelector(sectionID).scrollIntoView({ behavior: 'smooth' });
  }
});
