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
//------------------check required fild

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFileName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//-------------------get file name

function getFileName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//--------------------event listerer

form.addEventListener('submit', function (event) {
  event.preventDefault();
  checkRequired([username, email, password, password2]);
});
