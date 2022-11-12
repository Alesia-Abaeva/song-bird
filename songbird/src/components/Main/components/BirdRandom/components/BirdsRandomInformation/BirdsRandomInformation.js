import styles from './BirdsRandomInformation.module.scss';

import { renderHideAudio } from '../InformationAudio';
import { store } from 'src';

export const renderBirdInformations = (name) => {
  // сделать проверку на isWin - если false - выводить дефолт
  // console.log('!!!----birdRandomInformations', store);
  const birdRandomInformations = document.createElement('div');
  birdRandomInformations.classList.add(styles['bird-random__infornation']);

  const hideName = document.createElement('div');
  hideName.classList.add(styles['infornation__hide-name']);
  hideName.innerHTML = name;

  // const informHideAudio = renderHideAudio();

  birdRandomInformations.append(hideName);

  return birdRandomInformations;
};
