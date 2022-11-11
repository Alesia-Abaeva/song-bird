import { elementsCreate } from 'src/utils/create-elements';
import styles from './BirdListChoosen.module.scss';
import { store } from 'src';
import { renderHideAudio } from '../../BirdRandom/components/InformationAudio';

export const renderCardBird = () => {
  const birdInfo = store.birdHidden;

  const dataInfoContainer = elementsCreate('div', styles['bird-list__data-info']);
  const dataInfoDetails = elementsCreate('div', styles['data-info__details']);

  const instruction = elementsCreate('p', styles['details_instruction']);
  instruction.innerHTML = `
  <span>Послушайте плеер.</span>
  <span>Выберите птицу из списка</span>`;

  console.log(store, '-------------------------------------store');

  const dataInfoCardBird = elementsCreate('div', 'data-info__card-bird');
  const cardBirdImg = elementsCreate('img', styles['bird-img']);
  cardBirdImg.setAttribute('src', birdInfo.image);
  cardBirdImg.setAttribute('alt', 'bird');

  const dataInfoBirdName = elementsCreate('div', styles['data-info__bird-name']);
  const birdName = elementsCreate('h4', styles['bird-name']);
  birdName.innerHTML = `${birdInfo.name}`;
  dataInfoBirdName.append(birdName);

  const dataInfoSpecies = elementsCreate('div', styles['data-info__bird-name']);
  const species = elementsCreate('span', styles['bird-name']);
  species.innerHTML = `${birdInfo.species}`;
  dataInfoSpecies.append(species);

  const dataInfoDescription = elementsCreate('div', styles['data-info__bird-name']);
  const description = elementsCreate('span', styles['bird-name']);
  description.innerHTML = `${birdInfo.description}`;
  dataInfoDescription.append(description);

  const blockAudio = renderHideAudio(0);

  dataInfoDetails.append(
    instruction,
    dataInfoCardBird,
    cardBirdImg,
    dataInfoBirdName,
    dataInfoSpecies,
    blockAudio,
    dataInfoDescription,
  );

  dataInfoContainer.append(dataInfoDetails);

  return dataInfoContainer;
};
