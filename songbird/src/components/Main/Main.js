// import { renderBirdMenu, renderTopPanel } from './components';

import { store } from 'src';
import { renderBirdList, renderBirdRandom, renderGameOverBlock } from './components';

export const renderMain = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  // console.log(store.stage, 'store.stage');
  const { birdRandom } = renderBirdRandom();
  const birdList = renderBirdList(store.stage);
  const game = renderGameOverBlock();

  // const birdMenu = renderBirdMenu();

  main.append(birdRandom, birdList, game);

  return main;
};

// добавить звук при выборе правильного.неправильного ответа
// победное ведомление в конце
// добавить футер
