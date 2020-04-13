const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//-------------------show input error massage

function showError(input, massage) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = massage;
}

//---------------------show input success massage

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//--------------------checking the eamil
function isValidEmail(eamil) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//--------------------event listerer

form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (username.value === '') {
    showError(username, 'Username is Required');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(email, 'Email is Required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is Not Valid');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is Required');
  } else {
    showSuccess(password);
  }

  if (password2.value === '') {
    showError(password2, 'Password is Required');
  } else {
    showSuccess(password2);
  }
});
