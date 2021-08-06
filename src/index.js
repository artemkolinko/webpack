// import _ from 'lodash';
import './style.css';
import Icon from './png.png';

function component() {
  const element = document.createElement('div');

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

  return element;
}

document.body.appendChild(component());
