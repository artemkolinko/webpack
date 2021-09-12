// Assets
import './assets/css/style.css';
// Helpers
import printMe from './print';
// Static data
import jobs from './static-data/jobs.json';
// Job interface
import {Job} from './jobs.types.d';

const flexContainer = document.querySelector('.flex');
const flexItemsClass = 'flex-item';

const gridContainer = document.querySelector('.grid');
const gridItemsClass = 'grid-item';

// Add job Cards in flex container
if (flexContainer) {
  jobs.forEach((job) => {
    flexContainer.appendChild(card(job, flexItemsClass));
  });
}

// Add job Cards in grid container
if (gridContainer) {
  jobs.forEach((job) => {
    gridContainer.appendChild(card(job, gridItemsClass));
  });
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
