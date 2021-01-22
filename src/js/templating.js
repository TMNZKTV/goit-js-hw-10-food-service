import menu from '../menu.json';
import itemsTemplate from '../templates/gallery-items.hbs';

const markup = itemsTemplate(menu);
const galleryRef = document.querySelector('.menu');

galleryRef.insertAdjacentHTML('afterbegin', markup);
