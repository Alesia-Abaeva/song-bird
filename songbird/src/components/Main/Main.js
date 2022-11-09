// import { renderBirdMenu, renderTopPanel } from './components';

import { renderBirdList, renderBirdRandom } from './components';

export const renderMain = () => {
  const main = document.createElement('main');

  const birdRandom = renderBirdRandom();
  const birdList = renderBirdList(0);

  // const birdMenu = renderBirdMenu();

  main.append(birdRandom, birdList);

  return main;
};
