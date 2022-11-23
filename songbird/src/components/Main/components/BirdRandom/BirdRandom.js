import { store } from 'src';
import { BIRDS_DATA } from 'src/const/birds';
import { elementsCreate } from 'src/utils/create-elements';
import { randArray } from 'src/utils/random-array';
import { COVER_CARDS } from '../../../../const/bird-hide-card';
import styles from './BirdRandom.module.scss';
import { renderBirdInformations } from './components/BirdsRandomInformation/BirdsRandomInformation';
import { renderHideAudio } from './components/InformationAudio';

export const renderBirdRandom = (nameBird = '******', image = COVER_CARDS) => {
  // TODO - передавать в эту функцию изображение, чтобы когда перерендывали передавали сюда изображение
  const birdRandom = document.createElement('section');
  birdRandom.classList.add(styles['bird-random']);

  birdRandom.innerHTML = '';

  // IMG
  const img = document.createElement('img');
  img.classList.add(styles['bird-random__img']);
  img.setAttribute('src', image);
  img.setAttribute('alt', 'bird');

  // обновление данныех в глобальном объекте
  // store.birdHidden = randArray(BIRDS_DATA[store.stage]);
  store.birdHidden = randArray(BIRDS_DATA[store.language][store.stage]);
  console.log(store.birdHidden);

  const inf = elementsCreate('div', 'bird-random__container-info');

  // INFORMATION
  const name = renderBirdInformations(nameBird);
  const audio = renderHideAudio(store.birdHidden);
  inf.append(name, audio);

  // birdRandom.append(img, name, audio);
  birdRandom.append(img, inf);

  return { birdRandom, img };
};
