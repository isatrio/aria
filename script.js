const popupBtn = document.querySelector('#show-popup');
const popup = document.querySelector('.popup');

popupBtn.addEventListener('click', () => {
  popup.classList.toggle('show');
});

const popupClose = document.querySelector('#close-popup');

popupClose.addEventListener('click', () => {
  popup.classList.toggle('show');
});
