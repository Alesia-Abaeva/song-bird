// import { renderBirdMenu, renderTopPanel } from './components';

import styles from './Main.module.scss';

export const renderMain = () => {
  const main = document.createElement('main');

  const topPanel = renderTopPanel();
  const birdMenu = renderBirdMenu();

  main.append(topPanel, birdMenu);

  return { header, topPanel };
};
