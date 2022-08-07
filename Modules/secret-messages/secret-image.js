/* secret-image.js */

import { toggleHiddenElement, changeToFunkyColor } from './dom-functions';
const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');
 
 
buttonElement.addEventListener('click', () => {
    toggleHiddenElement(imgElement);
    changeToFunkyColor(buttonElement);
});