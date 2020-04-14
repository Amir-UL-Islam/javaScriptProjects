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
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess();
  } else {
    showError(input, 'Email is not valid');
  }
}

//------------------check password match

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Password do not matched');
  }
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

//-------------------check length

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFileName(input)} must be at least ${min}characters`);
  } else if (input.value.lenth > max) {
    showError(
      input,
      `${getFileName(input)} must be at less than ${max}characters`
    );
  } else {
    showSuccess(input);
  }
}

//-------------------get file name

function getFileName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//--------------------event listerer

form.addEventListener('submit', function (event) {
  event.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 7, 15);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
