import { store } from 'src';
import { BIRDS_DATA } from 'src/const/birds';
import { elementsCreate } from 'src/utils/create-elements';
import { shuffleArray } from 'src/utils/shuffleArray';
import styles from './BirdSlider.module.scss';

// import { renderBirdList, renderBirdRandom, renderGameOverBlock } from './components';

export const renderSlider = (activeSlide) => {
  const slider = document.createElement('section');
  slider.setAttribute('id', 'slider');

  const sliderScrollWrapper = elementsCreate('div', 'slider__scroll_wrapper');

  const scrollContainer = elementsCreate('div', 'scroll_container');

  //   const scrollBirdBlock = elementsCreate('div', 'scroll_bird-block');
  const birdsArray = shuffleArray(BIRDS_DATA);
  for (let i = 0; i < 9; i++) {
    const scrollBirdBlock = elementsCreate('div', 'scroll_bird-block');
    // scrollBirdBlock.style.backgroundImage = ;
    scrollBirdBlock.innerHTML = `<div class="bird-block_img">
    <img class="img-bird" src="${birdsArray[i].image}" alt="${birdsArray[i].name}">
</div>
<div class="bird-block_description">
    <div class="description">
        <h5 class="description_bird-name">${birdsArray[i].name}</h5>
        <p class="description_bird-species description_bird-name">${birdsArray[i].species}</p>
        <p class="animal_foods description_bird-name" ${birdsArray[i].description}"></p>
    </div>    
</div>`;
    scrollContainer.append(scrollBirdBlock);
  }

  const next = elementsCreate('a', 'control_next');
  const prev = elementsCreate('a', 'control_prev');

  sliderScrollWrapper.append(scrollContainer, next, prev);

  console.log(shuffleArray(BIRDS_DATA));
  slider.append(sliderScrollWrapper);
  return slider;
};

// TODO! при переходе на новую стадию должно рендерится то же самое! или вынести блок слайдера за main!
