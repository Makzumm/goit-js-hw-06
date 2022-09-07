function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const outputText = document.querySelector('.color');

buttonEl.addEventListener('click', () => {
  outputText.textContent = `${getRandomHexColor()}`;
  document.body.style.backgroundColor = getRandomHexColor();
});

