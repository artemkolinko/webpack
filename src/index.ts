// Assets
import './assets/css/style.css';
// Helpers
import {card} from './helpers/job-card';
// Static data
import jobs from './static-data/jobs.json';

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
