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
//    ----------------------------Local storage----------------------------------------------


const nameInput = document.querySelector('.inp-name');
const emailInput = document.querySelector('.inp-email');
const messageInput = document.querySelector('.inp-text');

// Define
function saveFormData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

// function to set
function loadFormData() {
  const savedFormData = localStorage.getItem('formData');
  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    nameInput.value = formData.name;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

// Add event listeners to the input fields
nameInput.addEventListener('input', saveFormData);
emailInput.addEventListener('input', saveFormData);
messageInput.addEventListener('input', saveFormData);

// Calling
loadFormData();
