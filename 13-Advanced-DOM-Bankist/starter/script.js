'use strict';

// Selecting Elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const navLinkContainer = document.querySelector('.nav__links');
const btnLearnMore = document.querySelector('.btn--scroll-to');

const allSections = document.querySelectorAll('.section');
const section1 = document.querySelector('#section--1');

const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

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

// Tabbed Component (Operations Section)
tabsContainer.addEventListener('click', function (e) {
  // Get tab that was clicked from tab container, uses closest() to get closest parent in the case that user clicked on span (number) inside button
  const clickedEl = e.target.closest('.operations__tab');

  // Ignore clicks on container (not tabs)
  if (!clickedEl) return;

  // Active tab (removes active class from all tabs, adds it to current tab clicked)
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clickedEl.classList.add('operations__tab--active');

  // Active Content (removes active class from all contents, adds it to current content selected)
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  document
    .querySelector(`.operations__content--${clickedEl.dataset.tab}`) // select content by using data-tab attribute stored in .operations__tab button
    .classList.add('operations__content--active');
});

// Menu Fade Animation (nav bar)
const menuFadeHandler = function (e) {
  // event can still be used in handler function
  // Ignore fade animation on Logo mouseover (only want nav links)
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link'); // select all siblings of 'link' which are the other nav links
    const logo = link.closest('.nav').querySelector('img'); // select Bankist logo

    // Change opacity of all siblings and logo to 'this', argument passed into function
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this; // 0.5 || 1
    });
    logo.style.opacity = this; // 0.5 || 1
  }
};

// Passing 'arguments' to handler functions for Event Listeners (can be accessed using 'this')
nav.addEventListener('mouseover', menuFadeHandler.bind(0.5));
nav.addEventListener('mouseout', menuFadeHandler.bind(1));

// Sticky Navigation Bar: using Intersection Observer API
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const navHeight = nav.getBoundingClientRect().height; // get Nav Height dynamically

const observerOptions = {
  root: null, // viewport
  threshold: 0, // when header scrolls completely out of view in viewport
  rootMargin: `-${navHeight}px`, // 90px margin outside of target element (header) (height of nav bar is 90px)
};

const headerObserver = new IntersectionObserver(stickyNav, observerOptions);
headerObserver.observe(header);

// Reveal Sections as User Scrolls
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  // If section is not intersecting, return and do not remove hidden class
  if (!entry.isIntersecting) return;

  // Reveal Section by removing hidden class, entry.target is current section at current scroll position
  entry.target.classList.remove('section--hidden');

  // stop observing section that was revealed already
  observer.unobserve(entry.target);
};

const revealSecOptions = {
  root: null,
  threshold: 0.3,
};

const sectionObserver = new IntersectionObserver(revealSection);
allSections.forEach(function (section) {
  sectionObserver.observe(section); // observe each section
  section.classList.add('section--hidden'); // hide all sections to later reveal by scrolling
});
