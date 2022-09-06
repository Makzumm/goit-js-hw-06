
const nameInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    if (nameInput.value === '') {
        textOutput.textContent = 'Anonymous';
    } else {
        textOutput.textContent = event.currentTarget.value;
    }
})