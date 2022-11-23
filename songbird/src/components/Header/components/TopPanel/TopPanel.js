import { store } from 'src';
import { LANGUAGES, translation } from 'src/const/translation';
import { elementsCreate } from 'src/utils/create-elements';
import { changeAppLanguage } from 'src/utils/languages';
import styles from './TopPanel.module.scss';

export const renderTopPanel = () => {
  const topPanel = document.createElement('div');
  topPanel.classList.add(styles['header__top-panel']);

  console.log(store);
  // LOGO
  const logo = document.createElement('div');
  logo.classList.add(styles['top-panel_logo']);

  // BUTTON
  const buttonContainer = elementsCreate('div', 'top-panel_button-container');

  const handleChangeLanguage = (event) => {
    const nextLanguage = event.target.textContent;

    if (nextLanguage === store.language) {
      return null;
    }

    changeAppLanguage(nextLanguage);
  };

  const buttonEn = elementsCreate('button', 'top-panel_button');
  buttonEn.setAttribute('id', LANGUAGES.EN);
  buttonEn.innerHTML = store.language;
  // если язык не английский, то не выполнять выражение справа
  // store.language === LANGUAGES.EN && buttonEn.classList.add('active-button-lang');
  buttonEn.onclick = handleChangeLanguage;

  // const buttonRu = elementsCreate('button', 'top-panel_button');
  // buttonRu.setAttribute('id', LANGUAGES.RU);
  // buttonRu.innerHTML = LANGUAGES.RU;
  // store.language === LANGUAGES.RU && buttonRu.classList.add('active-button-lang');
  // buttonRu.onclick = handleChangeLanguage;

  // buttonContainer.append(buttonRu, buttonEn);
  buttonContainer.append(buttonEn);

  // SCORE
  const score = document.createElement('div');
  score.classList.add(styles['top-panel_score']);

  const scoreH5 = document.createElement('h5');
  scoreH5.setAttribute('id', 'score');
  scoreH5.innerHTML = `${translation[store.language].score}: ${store.score}`;
  score.append(scoreH5);

  topPanel.append(logo, score);
  topPanel.append(logo, buttonContainer, score);

  return topPanel;
};
