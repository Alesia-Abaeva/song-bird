// import { renderBirdMenu, renderTopPanel } from './components';

import { store } from 'src';
import { renderBirdList, renderBirdRandom, renderGameOverBlock, renderSlider } from './components';

export const renderMain = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  const { birdRandom } = renderBirdRandom();
  const birdList = renderBirdList(store.stage);
  const game = renderGameOverBlock();
  const slider = renderSlider();

  main.append(birdRandom, birdList, slider);

  return main;
};

// победное ведомление в конце
