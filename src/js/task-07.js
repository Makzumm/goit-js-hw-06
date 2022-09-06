const inputRangeEl = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');


inputRangeEl.addEventListener('input', event => {
    outputText.style.fontSize = `${event.currentTarget.value}px`;
});

