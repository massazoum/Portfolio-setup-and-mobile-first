
const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const menuOptions = document.querySelectorAll('.menu li');
// const for bunton see project
const seebnt1=document.getElementById('see-project1');
const seebnt2=document.querySelector('.see-project2');
const seebn3t=document.querySelector('.see-project3');
const seebnt4=document.querySelector('.see-project4');

// const for popup
const popup1=document.querySelector('.popup1')
const popup2=document.querySelector('.popup2')
const popup3=document.querySelector('.popup3')
const popup4=document.querySelector('.popup4')


// addeventlistener for opening popup
// seebnt1.addEventListener('click', () =>{
//   popup1.style.display='block';
//   console.log('hhhhhhh')
// })


seebnt1.addEventListener('click', () => {
  console.log('jjh');
})


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
    


