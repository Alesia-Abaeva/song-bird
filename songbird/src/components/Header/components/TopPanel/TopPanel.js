import { store } from '../../../App';
import styles from './TopPanel.module.scss';

export const renderTopPanel = () => {
  const topPanel = document.createElement('div');
  topPanel.classList.add(styles['header__top-panel']);

  // LOGO
  const logo = document.createElement('div');
  logo.classList.add(styles['top-panel_logo']);

  // SCORE
  const score = document.createElement('div');
  score.classList.add(styles['top-panel_score']);
  const scoreH5 = document.createElement('h5');
  scoreH5.innerHTML = `Score: ${store.score}`;
  score.append(scoreH5);

  topPanel.append(logo, score);

  return topPanel;
};
