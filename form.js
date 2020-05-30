function validateName(name) {}

function submitFormData(e) {
  // e.preventDefault();
  validateName();
  console.log(e);
}

document.forms[0].addEventListener('submit', submitFormData);
