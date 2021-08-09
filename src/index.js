import menu from "./menu.json";  
import './styles.css';
import menuTemplate from './template.hbs';

const menuMarkup = createMenuMarkup(menu);
function createMenuMarkup(menu) {
  // return menu.map(menuItem=>menuTemplate(menuItem)).join('');
  return menu.map(menuTemplate).join('');
};

const menuRef = document.querySelector('.js-menu');
console.log(menuRef);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// }; ---- ИСПОЛЬЗОВАТЬ



const toolbarColor = document.querySelector('body');
const inputChange = document.querySelector('#theme-switch-toggle');
inputChange.addEventListener('click', colorChange);

function colorChange() {
  const switcher = toolbarColor.classList.toggle('dark-theme');
  localStorage.setItem('switch', switcher);
};

