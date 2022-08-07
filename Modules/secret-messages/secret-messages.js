/* secret-messages.js */
import { toggleHiddenElement, changeToFunkyColor } from './dom-functions';
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});

/*
In secret-messages.js, the functions toggleHiddenElement() and changeToFunkyColor() are imported from 
the module ../modules/dom-functions.js. The ../ indicates that the modules/ folder is in the same folder as the parent folder, secret-messages/.
When the button is clicked, the now imported toggleHiddenElement() function is called with pElement as an argument.
In addition, changeToFunkyColor() is called with buttonElement as an argument, changing its background color to a random one
*/