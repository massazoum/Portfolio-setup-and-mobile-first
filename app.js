const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
  body.classList.toggle('open');
});
