import { store } from 'src';
import { randArray } from 'src/utils/random-array';
import { BIRDS_DATA } from '../../../../const/birds';
import { elementsCreate } from '../../../../utils/create-elements';

import styles from './BirdList.module.scss';
import { renderCardBird } from './components/BirdListChoosen';

export const renderBirdList = (number) => {
  const birdList = elementsCreate('section', 'bird-list');

  const birdContainer = elementsCreate('div', styles['bird-list__container']);
  const birdListNames = elementsCreate('ul', styles['bird-list__name']);

  for (let i = 0; i < BIRDS_DATA[number].length; i++) {
    const nameItem = elementsCreate('li', styles['bird-list__item']);
    nameItem.innerHTML = `<span class="name-item_chekpoint"></span>
    ${BIRDS_DATA[number][i].name}`;

    birdListNames.append(nameItem);
  }

  birdContainer.append(birdListNames);

  const cardBird = renderCardBird(store);

  const buttonNextLevel = elementsCreate('button', styles['button-next-level']);
  buttonNextLevel.innerHTML = 'Next Level';
  buttonNextLevel.disabled = true;

  birdList.append(birdContainer, cardBird, buttonNextLevel);

  return birdList;
};
