'use strict';

const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal'); //'x' button in modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay'); //blurred out overlay outside modal

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//open modal by clicking any of the 3 'show modal' buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//close modal by clicking 'x' button or overlay
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//close modal by pressing 'Esc' key, only when modal is open
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
