const errorParagraphs = Array.from(document.querySelectorAll('.form__error'));

function addError(message, errorParagraphIndex) {
  errorParagraphs.forEach((paragraph, index) => {
    if (index === errorParagraphIndex) {
      paragraph.innerHTML = message;
      paragraph.classList.add('error');
    }
  });
}

function validateName(name) {
  if (name.length < 3) {
    addError('Name must be at least 2 characters', 0);
  } else {
    errorParagraphs.forEach((p) => {
      p.classList.remove('error');
      p.innerHTML = '';
    });
  }
}

function validateEmail(email) {
  if (!email.toString().includes('@')) {
    addError('Make sure your email has @ character', 1);
  }
  if (!/\.\w{2,3}$/.test(email)) {
    addError('Make sure your email has domain', 1);
  }
}

function validatePassword(password) {
  if ([...password].length < 9) {
    addError('Make sure your password is at least 8 characters long', 2);
  }
  if (!/[A-Z]/.test(password)) {
    addError('Password must contain an uppercase letter', 2);
  }
  if (!/[0-9]/.test(password)) {
    addError('Password must contain a number', 2);
  }
}

function confirmPassword(password, passwordToCheck) {
  return password === passwordToCheck
    ? true
    : addError('Password does not match', 3);
}

function validateCheckbox(checkbox) {
  if (checkbox.checked) {
    console.log('czek');
  } else {
    console.length('nieczek');
  }
}

function submitFormData(e) {
  e.preventDefault();
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const confirmInput = document.querySelector('#confirm');
  const checkbox = document.querySelector('#check');
  validateName(nameInput.value);
  validateEmail(emailInput.value);
  validatePassword(passwordInput.value);
  confirmPassword(passwordInput.value, confirmInput.value);
  console.log(passwordInput.value.length);
}

document.forms[0].addEventListener('submit', submitFormData);
