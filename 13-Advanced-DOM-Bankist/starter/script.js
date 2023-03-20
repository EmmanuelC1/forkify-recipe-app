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

// Selects all images with the attribute 'data-src'
const imgTargets = document.querySelectorAll('img[data-src]');

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotsContainer = document.querySelector('.dots');

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

///////////////////////////////////////
// Smooth Scrolling (Learn more button)
btnLearnMore.addEventListener('click', function () {
  // Modern Smooth Scrolling (only supported in modern browsers)
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////
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

///////////////////////////////////////
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

///////////////////////////////////////
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

///////////////////////////////////////
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

///////////////////////////////////////
// Reveal Sections as User Scrolls
const revealSection = function (entries, observer) {
  const [entry] = entries;
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

// observe each section
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden'); // hide all sections to later reveal by scrolling
});

///////////////////////////////////////
// Lazy Loading Images
const loadingImg = function (entries, observer) {
  const [entry] = entries;
  // Do not load img if img is not intersecting
  if (!entry.isIntersecting) return;

  // Replace src with data-src (low res img with high-res img)
  entry.target.src = entry.target.dataset.src;

  // remove blur filter when new high-res img is done loading
  // if we dont use an 'load' event listener, users on low internet connections will see a low-res
  // img becaues its loading, this ensures blur filter is on until high-res img is fully loaded
  entry.target.addEventListener('load', () =>
    entry.target.classList.remove('lazy-img')
  );

  // Stop observering imgs
  observer.unobserve(entry.target);
};

const imgOptions = {
  root: null,
  threshold: 0,
  rootMargin: '200px', // load images before img is in view (do not want users to notice we are lazy loading)
};

const imgObserver = new IntersectionObserver(loadingImg, imgOptions);

// observe each img
imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
// Slider Component
let curSlide = 0; // current slide in view
let maxSlide = slides.length - 1; // number of slides

// Creates dots for slider
const createDots = function () {
  // inserts dot buttons before the end of dot container inside slider container with data-slide set to each slide
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

// Adds active class to dot representing current slide
const activateDots = function (slide) {
  // select all dots and remove active class for all of them
  dotsContainer
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  // select current slide dot and add active class
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

// transforms each slide left or right and puts 'slide' into view at position (0%)
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
  activateDots(slide);
};

// Moves each slide right, unless it's the last slide, then resets to first slide
const nextSlide = function () {
  // If current slide is the last slide, reset curSlide to first (0)
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    // Else increment current slide
    curSlide++;
  }
  // transform: translateX each slide into view 100 * (i - curSlide)%
  goToSlide(curSlide);
};

// Moves each slide left, unless it's the first slide, then resets to last slide
const prevSlide = function () {
  // If current slide is the first slide, reset curSlide to last (maxSlide)
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    // Else decrement current slide
    curSlide--;
  }
  // transform: translateX each slide into view 100 * (i - curSlide)%
  goToSlide(curSlide);
};

// Initalizae all functions with first slide
const init = function () {
  createDots();
  goToSlide(0); // Starting Position of Slider and slides (first slide in view at pos 0%)
};
init();

// Right and Left Slider Button Event Listeners
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// Right and Left Keyboard Arrows Event Listeners
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// Dot Event Listeners (Event Delegation)
dotsContainer.addEventListener('click', function (e) {
  // only handle if dots are clicked not container
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset; // get slide # from data-slide attr in button (using desctructuring with same name 'slide')
    goToSlide(slide);
  }
});
