import { store } from 'src';
import { elementsCreate } from 'src/utils/create-elements';
import { generateResultsBlock } from 'src/utils/game-over';
import styles from './GameOver.module.scss';

export const renderGameOverBlock = (balls) => {
  const container = document.createElement('section');
  container.classList.add(styles['game-over__container']);

  const overTitle = elementsCreate('h2', 'game-over__title');
  const overResults = elementsCreate('p', 'game-over__results');
  const overButton = elementsCreate('button', 'game-over__button');

  const { title, result, button } = generateResultsBlock(Number(store.score));

  overTitle.innerHTML = title;
  overResults.innerHTML = result;
  overButton.innerHTML = button;

  container.append(overTitle, overResults, overButton);
  return container;
};
