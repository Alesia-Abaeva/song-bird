import { renderTopPanel } from './components';

import styles from './Header.module.scss';

export const renderHeader = () => {
  const header = document.createElement('header');
  header.classList.add(styles['header']);

  const topPanel = renderTopPanel();

  header.append(topPanel);

  return { header, topPanel };
};
