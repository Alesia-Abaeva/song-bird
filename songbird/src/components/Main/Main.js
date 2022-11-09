// import { renderBirdMenu, renderTopPanel } from './components';

import { renderBirdRandom } from './components';

export const renderMain = () => {
  const main = document.createElement('main');

  const birdRandom = renderBirdRandom();
  // const birdMenu = renderBirdMenu();

  main.append(birdRandom);

  return main;
};
