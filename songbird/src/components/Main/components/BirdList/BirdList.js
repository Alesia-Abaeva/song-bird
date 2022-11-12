import { store } from 'src';
import { randArray } from 'src/utils/random-array';
import { BIRDS_DATA } from '../../../../const/birds';
import { elementsCreate } from '../../../../utils/create-elements';

import styles from './BirdList.module.scss';
import { renderCardBird } from './components/BirdListChoosen';

export const renderBirdList = (number) => {
  let isWin = false;
  const birdList = elementsCreate('section', 'bird-list');

  const birdContainer = elementsCreate('div', styles['bird-list__container']);
  const birdListNames = elementsCreate('ul', styles['bird-list__name']);
  let cardBird = renderCardBird(store.birdHidden);

  const bird = BIRDS_DATA[number];
  for (let i = 0; i < bird.length; i++) {
    const nameItem = elementsCreate('li', styles['bird-list__item']);
    nameItem.innerHTML = `<span class="name-item_chekpoint"></span>
    ${bird[i].name}`;

    nameItem.onclick = (event) => {
      if (bird[i].name === store.birdHidden.name) {
        isWin = true;
        nameItem.classList.add(styles['success']);
      }

      switch (isWin) {
        case false:
          nameItem.classList.add(styles['error']);
          break;
        case true:
          break;
      }
      // навешивам цвет и звук для вариантов ответа
      // if (bird[i].name === store.birdHidden.name) {
      //   console.log('WINNER!');
      //   nameItem.classList.add(styles['success']);

      //   return;
      // } else {
      //   nameItem.classList.add(styles['error']);
      // }

      // рендерим блок с птицами в зависимости от выбранного варианта
      cardBird = renderCardBird(bird[i], 'bird');
      birdList.innerHTML = '';
      birdList.append(birdContainer, cardBird, buttonNextLevel);
    };

    birdListNames.append(nameItem);
  }

  birdContainer.append(birdListNames);

  const buttonNextLevel = elementsCreate('button', styles['button-next-level']);
  buttonNextLevel.innerHTML = 'Next Level';
  buttonNextLevel.disabled = true;

  birdList.append(birdContainer, cardBird, buttonNextLevel);

  return birdList;
};
