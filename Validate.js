// get form elements
const form = document.querySelector('.form0');
const emailInput = form.querySelector('.inp-email');
const submitBtn = form.querySelector('.submit0');

// add event listener to the form submission
form.addEventListener('submit', (event) => {
  // prevent default form submission behavior
  event.preventDefault();

  // check if email is in lowercase
  if (emailInput.value === emailInput.value.toLowerCase()) {
    // email is in lowercase, submit the form
    form.submit();
  } else {
    // email is not in lowercase, show error message
    const errorMsg = document.querySelector('.error-message');
    errorMsg.textContent = 'Email should be in lowercase.';
    errorMsg.style.color = '#FF4136';
    submitBtn.insertAdjacentElement('afterend', errorMsg);
  }
});
