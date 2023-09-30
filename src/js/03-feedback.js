const throttle = require('lodash.throttle');

const formElem = document.querySelector('.feedback-form');
const localStorageValues = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localStorageValues) {
    formElem.email.value = localStorageValues.email;
    formElem.message.value = localStorageValues.message; 
}

formElem.addEventListener('input', throttle((event) => {
        const emailValue = formElem.email.value;
        const messageValue = formElem.message.value;

        localStorage.setItem('feedback-form-state', JSON.stringify({
            email: emailValue,
            message: messageValue,
        }));
}, 500));

formElem.addEventListener('submit', (event) => {
    const emailValue = formElem.email.value;
    const messageValue = formElem.message.value;
    event.preventDefault();
    
    if (!(messageValue && emailValue)) {
        return;
    }
    
    const objectInfo = {
        email: emailValue,
        message: messageValue,
    };
    console.log(objectInfo);
    
    localStorage.removeItem('feedback-form-state');
    formElem.reset();
})
