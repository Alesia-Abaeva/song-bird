import { store } from 'src';
import { BIRDS_DATA } from 'src/const/birds';
import { elementsCreate } from 'src/utils/create-elements';
import { TwoDimensional } from 'src/utils/create-matrix';
import { leftArrow, rigthArrow } from 'src/utils/slider-arror';
import { renderHideAudio } from '../BirdRandom/components/InformationAudio';
import styles from './BirdSlider.module.scss';

// import { renderBirdList, renderBirdRandom, renderGameOverBlock } from './components';

export const renderSlider = () => {
  const birdsArray = store.birdsArray;
  const matrixBirds = TwoDimensional(birdsArray, 6);

  const slider = document.createElement('section');
  slider.setAttribute('id', 'slider');

  const sliderScrollWrapper = elementsCreate('div', 'slider__scroll_wrapper');
  const buttonContainer = elementsCreate('div', 'scroll_button__container');

  // button
  const buttonRihtg = elementsCreate('button', 'rigth');
  buttonRihtg.innerHTML = `${rigthArrow}`;
  buttonRihtg.classList.add('scroll-button');

  const buttonLeft = elementsCreate('button', 'left');
  buttonLeft.innerHTML = `${leftArrow}`;
  buttonLeft.classList.add('scroll-button');

  buttonContainer.append(buttonLeft, buttonRihtg);
  //

  const scrollContainer = elementsCreate('div', 'scroll_container');

  let count = 0;
  let scrollBirdBlockAll = [];

  // очищаем контейнер слайдера
  const cleanScrollContainer = () => {
    scrollContainer.innerHTML = '';
  };

  // добавляем птиц в видимую часть слайдера
  const addScrollContainer = (count) => {
    let activeBirds = matrixBirds[count];
    console.log(matrixBirds[count]);
    // console.log(renderHideAudio(activeBirds[1].audio));

    for (let i = 0; i < activeBirds.length; i++) {
      const audio = renderHideAudio(activeBirds[i].audio);
      const scrollBirdBlock = elementsCreate('div', 'scroll_bird-block');
      scrollBirdBlock.innerHTML = `<div class="bird-block_img">
        <img class="img-bird" src="${activeBirds[i].image}" alt="${activeBirds[i].name}">
    </div>
    <div class="bird-block_description">
        <div class="description">
            <h5 class="description_bird-name">${activeBirds[i].name}</h5>
            <p class="description_bird-species description_bird-name">${activeBirds[i].species}</p>
           
        </div>
    </div>`;

      // <p class="description_bird" >${activeBirds[i].description}</p>

      // Добавляю созданные ноды в массив, чтобы потом убрать у них всех класс
      scrollBirdBlockAll.push(scrollBirdBlock);

      // вешаю онклик, чтобы показывалась информация о птичке
      scrollBirdBlock.onclick = (event) => {
        scrollBirdBlockAll.forEach((slide) => {
          slide.classList.remove('active-slider');
        }); // пробегаюсь циклом, чтобы убрать класс

        scrollBirdBlock.classList.add('active-slider');
      };

      scrollContainer.append(scrollBirdBlock);
    }
  };

  addScrollContainer(0); // генерим стартовую страницу

  buttonRihtg.onclick = (event) => {
    changeSlideArray('rigth');
  };

  buttonLeft.onclick = (event) => {
    changeSlideArray('left');
  };

  sliderScrollWrapper.append(scrollContainer, buttonContainer);

  slider.append(sliderScrollWrapper);

  function changeSlideArray(direction) {
    if (direction === 'rigth') {
      count++;
      if (count > matrixBirds.length - 1) {
        count = 0;
      }
      cleanScrollContainer();
      addScrollContainer(count);
    } else if (direction === 'left') {
      count--;
      if (count < 0) {
        count = matrixBirds.length - 1;
      }
      cleanScrollContainer();
      addScrollContainer(count);
    }
  }

  return slider;
};
