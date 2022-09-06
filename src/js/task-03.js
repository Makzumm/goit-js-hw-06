const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');

const createMarkup = ({ url, alt }) => {
  return `<li class='gallery__item'><img src=${url} alt=${alt} width='400'></li>`
};

const createEl = images.map(createMarkup).join('');

list.insertAdjacentHTML("afterbegin", createEl);

list.style.display = 'flex';
list.style.justifyContent = 'center';
list.style.alignItems = 'center';
list.style.gap = '30px';
list.style.listStyle = 'none';


