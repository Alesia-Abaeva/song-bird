import { COVER_CARDS } from '../../../../const/bird-hide-card';
import styles from './BirdRandom.module.scss';

export const renderBirdRandom = () => {
  const birdRandom = document.createElement('section');
  birdRandom.classList.add(styles['bird-random']);

  // IMG
  const img = document.createElement('img');
  img.classList.add(styles['bird-random__img']);
  img.setAttribute('src', COVER_CARDS);
  img.setAttribute('alt', 'bird');

  // SCORE
  const score = document.createElement('div');
  score.classList.add(styles['top-panel_score']);
  const scoreH5 = document.createElement('h5');
  scoreH5.innerHTML = `Score: ${store.score}`;
  score.append(scoreH5);

  topPanel.append(logo, score);

  return topPanel;
};
