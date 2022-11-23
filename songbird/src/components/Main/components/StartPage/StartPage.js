import { store } from 'src';
import { updateApp } from 'src/components/App';
import { LANGUAGES } from 'src/const/translation';
import { elementsCreate } from 'src/utils/create-elements';
import { changeAppLanguage } from 'src/utils/languages';

import { generateStart } from 'src/utils/start-game';
import { renderBirdList } from '../BirdList';
import { renderBirdRandom } from '../BirdRandom';
import { renderSlider } from '../BirdSlider';
import styles from './StartPage.module.scss';

export const renderStartPage = () => {
  const container = document.createElement('section');
  container.classList.add(styles['start__container']);

  const startTitle = elementsCreate('h2', 'start__title');
  const startResults = elementsCreate('p', 'start__results');
  const startButton = elementsCreate('button', 'start__button');

  const { title, result, button } = generateStart();

  startTitle.innerHTML = title;
  startResults.innerHTML = result;
  startButton.innerHTML = button;

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
  buttonEn.innerHTML = LANGUAGES.EN;
  // если язык не английский, то не выполнять выражение справа
  store.language === LANGUAGES.EN && buttonEn.classList.add('active-button-lang');
  buttonEn.onclick = handleChangeLanguage;

  const buttonRu = elementsCreate('button', 'top-panel_button');
  buttonRu.setAttribute('id', LANGUAGES.RU);
  buttonRu.innerHTML = LANGUAGES.RU;
  store.language === LANGUAGES.RU && buttonRu.classList.add('active-button-lang');
  buttonRu.onclick = handleChangeLanguage;

  buttonContainer.append(buttonRu, buttonEn);

  startButton.onclick = () => {
    const main = document.getElementById('main');
    const { birdRandom } = renderBirdRandom();
    const birdList = renderBirdList(store.stage);
    const slider = renderSlider();

    main.innerHTML = '';
    main.append(birdRandom, birdList, slider);
  };

  container.append(startTitle, startResults, buttonContainer, startButton);
  return container;
};
