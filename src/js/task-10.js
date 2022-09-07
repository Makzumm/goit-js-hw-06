function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const clearBtn = document.querySelector('[data-destroy]');
const outputBlock = document.querySelector('#boxes');


createBtn.addEventListener('click', createDivEl);

function createBoxes(amount) {
  if (inputEl.value > 0) {
    const arr = [];
    for (let i = 0; i < amount; i += 1){
      const boxEl = document.createElement('div');
      boxEl.style.backgroundColor = getRandomHexColor();
      boxEl.style.width = `${30 + 10 * i}px`;
      boxEl.style.height = `${30 + 10 * i}px`;

      arr.push(boxEl);
    }
    return arr
  }
}

function createDivEl() {
  const numberOfBoxes = createBoxes(inputEl.value);
  outputBlock.append(...numberOfBoxes); 
}

clearBtn.addEventListener('click', deleteBoxes);

function deleteBoxes() {
  outputBlock.innerHTML = '';
  inputEl.value = '';
}