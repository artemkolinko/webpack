import {Job} from '../interfaces/jobs.types';

export function card(job: Job, elClass: string) {
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
