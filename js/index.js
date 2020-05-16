const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


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

//------------------check password match

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

//-------------------check length

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFileName(input)} must be at least ${min}characters`);
  } else if (input.value.lenth > max) {
    showError(
      input,
      `${getFileName(input)} must be at less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}


//--------------------event listerer

form.addEventListener('submit', function (event) {
  event.preventDefault();
  checkRequired([username, password]);
  checkLength(username, 4, 15);
  checkLength(password, 7, 20);

});