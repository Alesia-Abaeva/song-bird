import './style.scss';
import { renderApp } from './components';
import { BIRDS_DATA } from './const/birds';
import { randArray } from './utils/random-array';

export const store = {
  stage: 0,
  birds: null,
  birdHidden: null,
  score: 0,
  audio: null,
  balls: 5,
  allBalls: 30,
  isWin: false,
  over: false,
};

const init = () => {
  renderApp();
};

init();
