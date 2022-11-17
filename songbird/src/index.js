import './style.scss';
import { renderApp } from './components';
import { BIRDS_DATA } from './const/birds';
import { shuffleArray } from './utils/shuffleArray';
import { getLocalStorage } from './utils/local-storage';
import { LOCAL_STORAGE_KEYS } from './const/local-storage';
import { LANGUAGES } from './const/translation';

const storedLanguage = getLocalStorage(LOCAL_STORAGE_KEYS.LANGUAGE) || LANGUAGES.RU;

export const initStore = (language) => ({
  stage: 0,
  birds: null,
  birdHidden: null,
  score: 0,
  audio: null,
  balls: 5,
  // maxScore: 30
  allBalls: 30,
  isWin: false,
  over: false,
  birdsArray: shuffleArray(BIRDS_DATA[language]),
  language: language,
});

export const store = {
  ...initStore(storedLanguage),
};

const init = () => {
  renderApp();
  console.log(store);
};

init();
