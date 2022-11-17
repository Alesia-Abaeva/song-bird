import { store } from 'src';
import { changeStage, removeClass } from 'src/utils/chande-stage-menu';
import { BIRDS_DATA } from '../../../../const/birds';
import { elementsCreate } from '../../../../utils/create-elements';
import { renderBirdRandom } from '../BirdRandom';
import styles from './BirdList.module.scss';
import { renderCardBird } from './components/BirdListChoosen';
import { soundErr, soundSucs } from 'src/const/sounds';
import { generateResultsBlock } from 'src/utils/game-over';
import { renderGameOverBlock } from '../GameOver';
import { renderSlider } from '../BirdSlider';
import { translation } from 'src/const/translation';

export const renderBirdList = (number) => {
  // const bird = BIRDS_DATA[number];
  const bird = BIRDS_DATA[store.language][number];
  let isFirstWin = true;
  let balls = store.balls;
  const birdList = elementsCreate('section', 'bird-list');

  const birdListWrapper = elementsCreate('div', 'bird-list__wrapper');

  const birdContainer = elementsCreate('div', styles['bird-list__container']);
  const birdListNames = elementsCreate('ul', styles['bird-list__name']);
  let cardBird = renderCardBird(store.birdHidden);

  const buttonNextLevel = elementsCreate('button', styles['button-next-level']);
  buttonNextLevel.innerHTML = `${translation[store.language].button}`;
  buttonNextLevel.disabled = true;

  buttonNextLevel.onclick = (event) => {
    ++store.stage;
    store.isWin = false;
    isFirstWin = true; // обновляем значения для следующего раунда

    const main = document.getElementById('main');
    main.innerHTML = '';
    console.log(store);

    const menu = [...document.querySelectorAll('.bird-menu__item')];

    if (store.over) {
      // обновляем main
      const gameOver = renderGameOverBlock(store.score);
      main.append(gameOver);
      removeClass(menu);
    } else {
      // обновляем main
      const { birdRandom } = renderBirdRandom();
      const birdListNew = renderBirdList(store.stage);
      const slider = renderSlider();
      main.append(birdRandom, birdListNew, slider);

      // обновляем header

      changeStage(store.stage, menu);
    }
  };

  for (let i = 0; i < bird.length; i++) {
    const nameItem = elementsCreate('li', styles['bird-list__item']);
    nameItem.innerHTML = `<span class="name-item_chekpoint"></span>
    ${bird[i].name}`;

    nameItem.onclick = (event) => {
      if (bird[i].name === store.birdHidden.name) {
        store.isWin = true; // навешивам цвет и звук для вариантов ответа
        nameItem.classList.add(styles['success']);
        soundSucs.play();

        if (isFirstWin) {
          store.score += balls; // обновление глобального значения score
          // TODO - значения уходят в минус!
        }
        if (store.stage == 5) {
          store.over = true;
          // флаг для определения конца игры
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
          soundErr.play();
          nameItem.classList.add(styles['error']);
          --balls;
          break;
        case true:
          isFirstWin = false; //проверяем первый ли это клик на верный ответ
          buttonNextLevel.disabled = false; //делаем кнопку активной
          break;
      }
      // рендерим блок с птицами в зависимости от выбранного варианта
      cardBird = renderCardBird(bird[i], 'bird');
      birdList.innerHTML = '';
      birdListWrapper.innerHTML = '';
      birdListWrapper.append(birdContainer, cardBird);
      birdList.append(birdListWrapper, buttonNextLevel);
    };

    birdListNames.append(nameItem);
  }

  birdContainer.append(birdListNames);

  birdListWrapper.append(birdContainer, cardBird);
  birdList.append(birdListWrapper, buttonNextLevel);

  return birdList;
};
