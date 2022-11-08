import { renderBirdMenu, renderTopPanel } from './components';

import styles from './Header.module.scss';

export const renderHeader = () => {
  const header = document.createElement('header');
  header.classList.add(styles['header']);

  const topPanel = renderTopPanel();
  const birdMenu = renderBirdMenu();

  header.append(topPanel, birdMenu);

  return { header, topPanel };
};
