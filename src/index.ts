// import _ from 'lodash';
import './assets/css/style.css';
// import Icon from './assets/img/png.png';

import printMe from './print';

import jobs from './static-data/jobs.json';

const flexContainer = document.querySelector('.flex');
const flexItemsClass = 'flex-item';

if (flexContainer) {
  jobs.forEach((job) => {
    flexContainer.appendChild(card(job, flexItemsClass));
  });
}

const gridContainer = document.querySelector('.grid');
const gridItemsClass = 'grid-item';

if (gridContainer) {
  jobs.forEach((job) => {
    gridContainer.appendChild(card(job, gridItemsClass));
  });
}

interface Job {
  id: number;
  title: string;
  time: string;
  tags: string[];
}

function card(job: Job, elClass: string) {
  const card = document.createElement('div');
  card.classList.add(elClass);

  const title = document.createElement('h2');
  title.textContent = job.title;

  const time = document.createElement('p');
  time.textContent = job.time;

  const tags = document.createElement('p');
  tags.textContent = job.tags.join(', ');

  card.appendChild(title);
  card.appendChild(time);
  card.appendChild(tags);

  return card;
}

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' + ');
  const words = ['Hello', 'webpack'];
  element.innerHTML = words.join(' ');
  element.classList.add('hello');
  // console.log(Icon);

  // Add the image to our existing div.
  const myIcon = new Image(32, 32);
  // myIcon.src = Icon;
  // element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

const container = document.querySelector('.container');

// container.appendChild(component());
