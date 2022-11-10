import styles from './BirdsRandomInformation.module.scss';

import { renderHideAudio } from '../InformationAudio';
import { store } from 'src';

export const renderBirdInformations = () => {
  // console.log('!!!----birdRandomInformations', store);
  const birdRandomInformations = document.createElement('div');
  birdRandomInformations.classList.add(styles['bird-random__infornation']);

  const hideName = document.createElement('div');
  hideName.classList.add(styles['infornation__hide-name']);
  hideName.innerHTML = '******';

  // const informHideAudio = renderHideAudio();

  birdRandomInformations.append(hideName);

  return birdRandomInformations;
};
