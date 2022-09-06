const itemEl = document.querySelectorAll('#categories > .item');
console.log(`Number of categories ${itemEl.length}`);

function elCount() {
    itemEl.forEach(item => {
        console.log('Category:', item.querySelector('h2').textContent   );
        console.log('Elements:', item.querySelectorAll('li').length)
    })
}

elCount();