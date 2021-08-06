// import _ from 'lodash';
import './style.css';
import Icon from './png.png';

import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' + ');
  const words = ['Hello', 'webpack'];
  element.innerHTML = words.join(' ');
  element.classList.add('hello');
  console.log(Icon);

  // Add the image to our existing div.
  const myIcon = new Image(32, 32);
  myIcon.src = Icon;

  element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
