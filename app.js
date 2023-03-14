const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');

toggle.addEventListener('click', function () { 
  body.classList.toggle('open');
});
