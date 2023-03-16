const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const menuOptions = document.querySelectorAll('.menu li');

toggle.addEventListener('click', () => {
  body.classList.toggle('open');
});

menuOptions.forEach((option) => {
  option.addEventListener('click', () => {
    body.classList.remove('open');
  });
});

