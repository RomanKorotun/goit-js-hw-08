import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);

function handlerInput(evt) {
  const objectLocaleStorage = {
    email: input.value,
    message: textarea.value,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(objectLocaleStorage)
  );
}

if (localStorage.getItem('feedback-form-state')) {
  const newObj = JSON.parse(localStorage.getItem('feedback-form-state'));
  const { email, message } = newObj;
  input.value = email;
  textarea.value = message;
}

function handlerSubmit(evt) {
  evt.preventDefault();
  const { email: userEmail, message: userMessage } = evt.currentTarget.elements;
  const objectSubmit = {
    email: userEmail.value,
    message: userMessage.value,
  };
  console.log(objectSubmit);
  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}
