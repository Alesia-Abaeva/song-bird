import { renderHideAudio } from 'src/components/Main/components/BirdRandom/components/InformationAudio';
import { elementsCreate } from 'src/utils/create-elements';
import styles from './CardBird.module.scss';

export const renderCardBirdInformation = (object) => {
  const dataInfoCardBird = elementsCreate('div', styles['data-info__card-bird']);

  // изображение птицы
  const cardBirdImg = elementsCreate('img', styles['bird-img']);
  cardBirdImg.setAttribute('src', object.image);
  cardBirdImg.setAttribute('alt', 'bird');

  // Имя птички
  const dataInfoBirdName = elementsCreate('div', styles['data-info__bird-name']);
  const birdName = elementsCreate('h4', styles['bird-name']);
  birdName.innerHTML = `${object.name}`;
  dataInfoBirdName.append(birdName);

  // Вид птички
  const dataInfoSpecies = elementsCreate('div', styles['data-info__species']);
  const species = elementsCreate('span', styles['species']);
  species.innerHTML = `${object.species}`;
  dataInfoSpecies.append(species);

  // Описание птички
  const dataInfoDescription = elementsCreate('div', styles['data-info__discriptions']);
  const description = elementsCreate('span', styles['discriptions']);
  description.innerHTML = `${object.description}`;
  dataInfoDescription.append(description);

  // Аудио
  const blockAudio = renderHideAudio(object.id);

  dataInfoCardBird.append(
    cardBirdImg,
    dataInfoBirdName,
    dataInfoSpecies,
    blockAudio,
    dataInfoDescription,
  );

  return dataInfoCardBird;
};
