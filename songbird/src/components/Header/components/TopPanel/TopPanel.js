// import { store } from '../../../App';
import { store } from 'src';
import { elementsCreate } from 'src/utils/create-elements';
import styles from './TopPanel.module.scss';

export const renderTopPanel = () => {
  const topPanel = document.createElement('div');
  topPanel.classList.add(styles['header__top-panel']);

  // LOGO
  const logo = document.createElement('div');
  logo.classList.add(styles['top-panel_logo']);

  // BUTTON
  const buttonContainer = elementsCreate('div', 'top-panel_button-container');

  const buttonEn = elementsCreate('button', 'top-panel_button');
  buttonEn.setAttribute('id', 'en');
  buttonEn.innerHTML = 'EN';

  const buttonRu = elementsCreate('button', 'top-panel_button');
  buttonRu.setAttribute('id', 'ru');
  buttonRu.innerHTML = 'RU';
  buttonRu.classList.add('active-button-lang');

  buttonContainer.append(buttonRu, buttonEn);

  // SCORE
  const score = document.createElement('div');
  score.classList.add(styles['top-panel_score']);

  const scoreH5 = document.createElement('h5');
  scoreH5.setAttribute('id', 'score');

  scoreH5.innerHTML = `Score: ${store.score}`;
  score.append(scoreH5);

  topPanel.append(logo, buttonContainer, score);

  return topPanel;
};
