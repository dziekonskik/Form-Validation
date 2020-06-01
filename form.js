const errorParagraphs = Array.from(document.querySelectorAll('.form__error'));

function addErrorClass(message, errorParagraphIndex) {
  errorParagraphs.forEach((paragraph, index) => {
    if (index === errorParagraphIndex) {
      paragraph.innerHTML = message;
      paragraph.classList.add('error');
    }
  });
}

function removeErrorClass(pararaphList) {
  pararaphList.forEach((p) => {
    p.classList.remove('error');
    p.innerHTML = '';
  });
}

function validateName(name) {
  if (name.length < 3) {
    addErrorClass('Name must be at least 3 characters', 0);
  }
  if (/\d|\W/.test(name)) {
    addErrorClass('Name must contain letters only', 0);
  } else {
    removeErrorClass(errorParagraphs);
  }
}

function validateEmail(email) {
  if (!email.toString().includes('@')) {
    addErrorClass('Make sure your email has @ character', 1);
  }
  if (!/\.\w{2,3}$/.test(email)) {
    addErrorClass('Make sure your email has domain', 1);
  }
}

function validatePassword(password) {
  if ([...password].length < 9) {
    addErrorClass('Make sure your password is at least 8 characters long', 2);
  }
  if (!/[A-Z]/.test(password)) {
    addErrorClass('Password must contain an uppercase letter', 2);
  }
  if (!/[0-9]/.test(password)) {
    addErrorClass('Password must contain a number', 2);
  }
  if (!/\W/.test(password)) {
    addErrorClass('Password must contain a non alphanumeric character', 2);
  }
}

function confirmPassword(password, passwordToCheck) {
  if (password !== passwordToCheck) addErrorClass('Password does not match', 3);
}

function validateCheckbox(checkbox) {
  if (!checkbox.checked) {
    addErrorClass('You must agree to GDPR rules', 4);
  }
}

function submitFormData(e) {
  //e.preventDefault();
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const confirmInput = document.querySelector('#confirm');
  const checkbox = document.querySelector('#check');
  if (
    validateName(nameInput.value) &&
    validateEmail(emailInput.value) &&
    validatePassword(passwordInput.value) &&
    confirmPassword(passwordInput.value, confirmInput.value) &&
    validateCheckbox(checkbox)
  ) {
    return true;
  } else {
    return false;
  }
}

document.forms[0].addEventListener('submit', submitFormData);
