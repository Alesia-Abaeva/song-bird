import { elementsCreate } from 'src/utils/create-elements';
import styles from './BirdListChoosen.module.scss';
import { store } from 'src';
import { renderHideAudio } from '../../../BirdRandom/components/InformationAudio';
import { renderCardBirdInformation } from './components';

// renderHideAudio

export const renderCardBird = (object, tag) => {
  // const birdInfo = object.birdHidden;

  const dataInfoContainer = elementsCreate('div', styles['bird-list__data-info']);
  const dataInfoDetails = elementsCreate('div', styles['data-info__details']);

  const instruction = elementsCreate('p', styles['details_instruction']);
  instruction.innerHTML = `
  <span>Послушайте плеер.</span>
  <span>Выберите птицу из списка</span>`;

  const dataInfoCardBird = renderCardBirdInformation(object);

  if (tag === 'bird') {
    instruction.classList.add(styles['hiden']);
    dataInfoCardBird.classList.remove('hiden');
  } else {
    dataInfoCardBird.classList.add(styles['hiden']);
  }

  dataInfoDetails.append(instruction, dataInfoCardBird);

  dataInfoContainer.append(dataInfoDetails);

  return dataInfoContainer;
};
