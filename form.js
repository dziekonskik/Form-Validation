function toggleError(addOrRemove, message) {
  const p = e.target.nextElementSibling;
  p.classList.addOrRemove('error');
  p.innerHTML = message;
}

function validateName(name) {
  if (name.length > 2) {
    toggleError(add, 'Name cannot be shorter than 2 characters');
  } else {
    console.log('nie działa');
  }
}

function submitFormData(e) {
  e.preventDefault();
  const nameInput = document.querySelector('#name');
  console.log(nameInput.value);
  validateName(nameInput.value);
  console.log(e);
}

document.forms[0].addEventListener('submit', submitFormData);
const formWidth = document.querySelector('.form-section');
console.log(formWidth.innerWidth);
window.addEventListener('resize', (e) => {
  console.log(window.innerWidth);
  console.log(formWidth.innerWidth);
});
