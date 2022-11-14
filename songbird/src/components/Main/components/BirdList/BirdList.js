import { store } from 'src';
import { changeStage } from 'src/utils/chande-stage-menu';
import { BIRDS_DATA } from '../../../../const/birds';
import { elementsCreate } from '../../../../utils/create-elements';
import { renderBirdRandom } from '../BirdRandom';
import styles from './BirdList.module.scss';
import { renderCardBird } from './components/BirdListChoosen';
import { soundErr, soundSucs } from 'src/const/sounds';

// soundSucs
// soundErr

export const renderBirdList = (number) => {
  const bird = BIRDS_DATA[number];
  let isFirstWin = true;
  let balls = store.balls;
  const birdList = elementsCreate('section', 'bird-list');

  const birdContainer = elementsCreate('div', styles['bird-list__container']);
  const birdListNames = elementsCreate('ul', styles['bird-list__name']);
  let cardBird = renderCardBird(store.birdHidden);

  const buttonNextLevel = elementsCreate('button', styles['button-next-level']);
  buttonNextLevel.innerHTML = 'Next Level';
  buttonNextLevel.disabled = true;

  buttonNextLevel.onclick = (event) => {
    ++store.stage;
    store.isWin = false;
    isFirstWin = true; // обновляем значения для следующего раунда

    // обновляем main
    const { birdRandom } = renderBirdRandom();
    const birdListNew = renderBirdList(store.stage);
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.append(birdRandom, birdListNew);

    // обновляем header
    const menu = [...document.querySelectorAll('.bird-menu__item')];
    changeStage(store.stage, menu);
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
          console.log('BAAALS', balls);
          break;
        case true:
          isFirstWin = false; //проверяем первый ли это клик на верный ответ
          buttonNextLevel.disabled = false; //делаем кнопку активной
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

  birdList.append(birdContainer, cardBird, buttonNextLevel);

  return birdList;
};
