const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const createItems = item => {
  const listItem = document.createElement('li');
  
      listItem.classList.add('item');
      listItem.textContent = item;
  
  return listItem;
}

const createAnArray = ingredients.map(createItems);

list.append(...createAnArray );