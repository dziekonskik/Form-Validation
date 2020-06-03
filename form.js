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
  const hasNameShorterThanTwo = name.length < 2;
  const doesNotHaveDigitsAndSpecials = /\d|\W/.test(name);

  if (hasNameShorterThanTwo) {
    addErrorClass('Name must be at least 2 characters', 0);
  }
  if (doesNotHaveDigitsAndSpecials) {
    addErrorClass('Name must contain english letters only', 0);
  } else {
    removeErrorClass(errorParagraphs);
  }
}

function validateEmail(email) {
  const doensNotHaveAt = !email.toString().includes('@');
  const doesNotHaveDomain = !/\.\w{2,3}$/.test(email);

  if (doensNotHaveAt) {
    addErrorClass('Make sure your email has "@" character', 1);
  }
  if (doesNotHaveDomain) {
    addErrorClass('Make sure your email has domain', 1);
  }
}

function validatePassword(password) {
  const isShorterThanEight = [...password].length < 8;
  const doesNotHaveUppercase = !/[A-Z]/.test(password);
  const doesNotHaveDigit = !/[0-9]/.test(password);
  const doesNotHaveSpecial = !/\W/.test(password);

  if (isShorterThanEight) {
    addErrorClass('Make sure your password is at least 8 characters long', 2);
  }
  if (doesNotHaveUppercase) {
    addErrorClass('Password must contain an uppercase letter', 2);
  }
  if (doesNotHaveDigit) {
    addErrorClass('Password must contain a number', 2);
  }
  if (doesNotHaveSpecial) {
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
    e.preventDefault();
  }
}

document.forms[0].addEventListener('submit', submitFormData);
