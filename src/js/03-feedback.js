const throttle = require('lodash.throttle');

const formElem = document.querySelector('.feedback-form');
const localStorageValues = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localStorageValues) {
    formElem.email.value = localStorageValues.email;
    formElem.message.value = localStorageValues.message; 
}

formElem.addEventListener('input', throttle((event) => {
    const messageValue = event.currentTarget.message.value;
    const emailValue = event.currentTarget.email.value;

    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: emailValue,
        message: messageValue,
    }));
}, 500));

formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    formElem.reset();
    
    objectInfo = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(objectInfo);

    localStorage.removeItem('feedback-form-state');
})
