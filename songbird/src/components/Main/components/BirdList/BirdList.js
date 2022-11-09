import { BIRDS_DATA } from '../../../../const/birds';
import { elementsCreate } from '../../../../utils/create-elements';
import styles from './BirdList.module.scss';

export const renderBirdList = (number) => {
  const birdList = elementsCreate('section', 'bird-list');

  const birdContainer = elementsCreate('div', styles['bird-list__container']);
  const birdListNAmes = elementsCreate('ul', styles['bird-list__name']);

  for (let i = 0; i < BIRDS_DATA[number].length; i++) {
    const nameItem = elementsCreate('li', styles['bird-list__item']);
    nameItem.innerHTML = `<span class="name-item_chekpoint"></span>
    ${BIRDS_DATA[number][i].name}`;

    birdListNAmes.append(nameItem);
  }

  birdContainer.append(birdListNAmes);

  birdList.append(birdContainer);

  return birdList;
};
