let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
  console.log('massa');
  body.classList.toggle('open');
});
