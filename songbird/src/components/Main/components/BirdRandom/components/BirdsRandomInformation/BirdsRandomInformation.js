import styles from './BirdsRandomInformation.module.scss';
import { renderHideAudio } from './components/InformationAudio';

export const renderBirdInformations = () => {
  const birdRandomInformations = document.createElement('div');
  birdRandomInformations.classList.add(styles['bird-random__infornation']);

  const hideName = document.createElement('div');
  hideName.classList.add(styles['infornation__hide-name']);
  hideName.innerHTML = '******';

  const informHideAudio = renderHideAudio();

  birdRandomInformations.append(hideName, informHideAudio);

  return birdRandomInformations;
};
