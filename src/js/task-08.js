const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('Please, fill all froms');
    }

    const newObj = {
        email: email.value,
        password: password.value
    }

    console.log(newObj)

    event.currentTarget.reset();
}
