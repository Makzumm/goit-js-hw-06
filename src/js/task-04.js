
const value = document.querySelector('#value');
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');


let counterValue = 0;

incBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
})

decBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
})

