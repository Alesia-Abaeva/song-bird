import { store } from 'src';
import { randArray } from 'src/utils/random-array';
import { BIRDS_DATA } from '../../../../const/birds';
import { elementsCreate } from '../../../../utils/create-elements';

import styles from './BirdList.module.scss';
import { renderCardBird } from './components/BirdListChoosen';

export const renderBirdList = (number) => {
  let isFirstWin = true;
  let balls = store.balls;
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
      // навешивам цвет и звук для вариантов ответа
      if (bird[i].name === store.birdHidden.name) {
        store.isWin = true;
        nameItem.classList.add(styles['success']);

        // обновление глобаного занчения score
        // TODO - испавить постоянное обновление данные при нажатии верного ответа!
        if (isFirstWin) {
          store.score += balls;
        }

        const score = document.getElementById('score');
        score.innerHTML = `Score: ${store.score}`;

        // изменяем содержимое скрытого блока
        const img = document.querySelector('.bird-random__img');
        img.setAttribute('src', bird[i].image);

        const birdName = document.querySelector('.infornation__hide-name');
        birdName.innerHTML = bird[i].name;
      }

      switch (store.isWin) {
        case false:
          nameItem.classList.add(styles['error']);
          --balls;
          console.log('BAAALS', balls);
          break;
        case true:
          isFirstWin = false;
          break;
      }
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
