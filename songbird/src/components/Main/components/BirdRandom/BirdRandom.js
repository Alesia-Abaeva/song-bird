import { store } from 'src';
import { BIRDS_DATA } from 'src/const/birds';
import { randArray } from 'src/utils/random-array';
import { COVER_CARDS } from '../../../../const/bird-hide-card';
import styles from './BirdRandom.module.scss';
import { renderBirdInformations } from './components/BirdsRandomInformation/BirdsRandomInformation';
import { renderHideAudio } from './components/InformationAudio';

export const renderBirdRandom = () => {
  const birdRandom = document.createElement('section');
  birdRandom.classList.add(styles['bird-random']);

  // IMG
  const img = document.createElement('img');
  img.classList.add(styles['bird-random__img']);
  img.setAttribute('src', COVER_CARDS);
  img.setAttribute('alt', 'bird');

  // обновление данныех в глобальном объекте
  store.birdHidden = randArray(BIRDS_DATA[store.stage]);

  console.log('!!!----birdRandom', store);

  // INFORMATION
  const name = renderBirdInformations();
  const audio = renderHideAudio(store.birdHidden);

  birdRandom.append(img, name, audio);

  return birdRandom;
};
