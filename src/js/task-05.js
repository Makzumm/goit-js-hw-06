
const nameInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    nameInput.value === ''
        textOutput.textContent = nameInput.value === '' ? 'Anonymous' : textOutput.textContent = event.currentTarget.value;
})