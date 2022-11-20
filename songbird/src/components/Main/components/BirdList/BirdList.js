import { store } from 'src';
import { changeStage, removeClass } from 'src/utils/chande-stage-menu';
import { BIRDS_DATA } from '../../../../const/birds';
import { elementsCreate } from '../../../../utils/create-elements';
import { renderBirdRandom } from '../BirdRandom';
import styles from './BirdList.module.scss';
import { renderCardBird } from './components/BirdListChoosen';
import { soundErr, soundSucs } from 'src/const/sounds';
import { renderGameOverBlock } from '../GameOver';
import { renderSlider } from '../BirdSlider';
import { translation } from 'src/const/translation';

export const renderBirdList = (number) => {
  const bird = BIRDS_DATA[store.language][number]; //работает с определенным элементов bird
  let isFirstWin = true;
  let balls = store.balls;

  const birdList = elementsCreate('section', 'bird-list');

  const birdListWrapper = elementsCreate('div', 'bird-list__wrapper');

  const birdContainer = elementsCreate('div', styles['bird-list__container']);

  const birdListNames = elementsCreate('ul', styles['bird-list__name']);

  let cardBird = renderCardBird(store.birdHidden);

  // button
  const buttonNextLevel = elementsCreate('button', styles['button-next-level']);
  buttonNextLevel.innerHTML = `${translation[store.language].button}`;
  buttonNextLevel.disabled = true;

  buttonNextLevel.onclick = (event) => {
    ++store.stage;
    store.isWin = false;
    isFirstWin = true; // обновляем значения для следующего раунда

    const main = document.getElementById('main');
    main.innerHTML = '';

    const menu = [...document.querySelectorAll('.bird-menu__item')];

    if (store.over) {
      const gameOver = renderGameOverBlock(store.score);
      // обновляем main
      main.append(gameOver);
      removeClass(menu); //удаляем у меню активный класс стадии
    } else {
      // обновляем main
      const { birdRandom } = renderBirdRandom();
      const birdListNew = renderBirdList(store.stage);
      const slider = renderSlider();
      main.append(birdRandom, birdListNew, slider);

      changeStage(store.stage, menu); // обновляем header
    }
  };

  // Блок вариантов ответа
  for (let i = 0; i < bird.length; i++) {
    const nameItem = elementsCreate('li', styles['bird-list__item']);

    nameItem.innerHTML = `<span class="name-item_chekpoint"></span>
    ${bird[i].name}`;

    nameItem.onclick = (event) => {
      let pressBird;
      if (bird[i].name === store.birdHidden.name) {
        store.isWin = true; // навешивам цвет и звук для вариантов ответа
        nameItem.classList.add(styles['success']);
        soundSucs.currentTime = 0;
        soundSucs.play();

        if (isFirstWin) {
          //выбран верный ответ с первого раза
          store.score += balls; // обновление глобального значения score
        }

        if (store.stage == 5) {
          store.over = true;
          // флаг для определения конца игры
        }

        // обновляем блок score
        const score = document.getElementById('score');
        score.innerHTML = `Score: ${store.score}`;

        // изменяем содержимое скрытого блока
        const img = document.querySelector('.bird-random__img');
        img.setAttribute('src', bird[i].image);

        // показываем скрытое имя в блоке
        const birdName = document.querySelector('.infornation__hide-name');
        birdName.innerHTML = bird[i].name;
      }

      switch (store.isWin) {
        case false:
          soundErr.currentTime = 0;
          soundErr.play();
          nameItem.matches('.error') || --balls; // проверяю на наличие класса, если он есть - не отнимать
          nameItem.classList.add(styles['error']);
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
