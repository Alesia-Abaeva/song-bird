import { renderHeader } from '../Header';
import styles from './App.module.scss';

export const store = {
  score: 0,
};

export const renderApp = () => {
  // накидываем стиль на body
  document.body.classList.add(styles['body']);

  // #app - точка входа в разметке html
  // накидываем стиль на контейнер
  const appContiner = document.querySelector('#app');
  appContiner.classList.add(styles['container']);

  const { header, topPanel } = renderHeader();

  // const button = document.createElement('button');
  // button.innerText = 'добавить';

  // button.onclick = () => {
  //   store.score = store.score + 1;
  //   const newHeader = renderHeader();
  //   appContiner.innerHTML = '';
  //   appContiner.append(newHeader, button);
  // };

  appContiner.append(
    header,
    // button,
  );
};