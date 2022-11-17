import { store } from 'src';
import { updateApp } from 'src/components/App';
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

  overButton.onclick = () => {
    console.log('я родился!');
    location.reload(); //перезагружаем страницу
    // updateApp();
  };

  container.append(overTitle, overResults, overButton);
  return container;
};
