const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const menuOptions = document.querySelectorAll('.menu li');


// methode open to take control on class toggle
toggle.addEventListener('click', () => {
  body.classList.toggle('open');
});

// methode open to take control on class menu list
menuOptions.forEach(option => {
  option.addEventListener('click', () => {
    body.classList.remove('open');
  });
});
    


