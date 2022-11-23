// import { renderBirdMenu, renderTopPanel } from './components';

import { store } from 'src';
import {
  renderBirdList,
  renderBirdRandom,
  renderGameOverBlock,
  renderSlider,
  renderStartPage,
} from './components';

export const renderMain = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  const startPages = renderStartPage();

  const { birdRandom } = renderBirdRandom();
  const birdList = renderBirdList(store.stage);
  const game = renderGameOverBlock();
  const slider = renderSlider();

  main.append(startPages);
  // main.append(startPages, birdRandom, game, birdList, slider);

  return main;
};

// победное ведомление в конце
