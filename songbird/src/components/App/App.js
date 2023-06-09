import { renderFooter } from '../Footer';
import { renderHeader } from '../Header';
import { renderMain } from '../Main/Main';
import styles from './App.module.scss';

export const renderApp = () => {
  // накидываем стиль на body
  document.body.classList.add(styles['body']);

  // #app - точка входа в разметке html
  // накидываем стиль на контейнер
  const appContiner = document.querySelector('#app');
  appContiner.classList.add(styles['container']);

  const { header, topPanel } = renderHeader();
  const main = renderMain();
  const footer = renderFooter();

  appContiner.append(
    header,
    main,
    footer,
    // button,
  );
};

export const updateApp = () => {
  document.body.classList.remove(styles['body']);
  const appContiner = document.querySelector('#app');
  appContiner.innerHTML = '';

  renderApp();
};
