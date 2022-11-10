// import { renderBirdMenu, renderTopPanel } from './components';

import { store } from 'src';
import { renderBirdList, renderBirdRandom } from './components';

export const renderMain = () => {
  const main = document.createElement('main');
  // console.log(store.stage, 'store.stage');
  const birdRandom = renderBirdRandom();
  const birdList = renderBirdList(store.stage);

  // const birdMenu = renderBirdMenu();

  main.append(birdRandom, birdList);

  return main;
};
