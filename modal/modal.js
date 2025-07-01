'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

// Hey! Whenever a click happens on one of these buttons,
// then please call this function that we just specified here.

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Handling an 'ESC' keypress event
document.addEventListener('keydown', (e) => {
  // console.log(e.key);
  // if the pressed key is escape and if the modal does not contain the 'hidden' class
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // then execute this function to close the modal!
    closeModal();
  }
})