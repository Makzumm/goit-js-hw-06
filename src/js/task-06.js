const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
    const currEl = event.currentTarget;

    if (currEl.value.length >= Number(currEl.dataset.length)) {
        inputEl.classList.add('valid');
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid')
        }
    } else {
        inputEl.classList.add('invalid');
        if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid')
        }
    }
})

