import { elementsCreate } from 'src/utils/create-elements';
import styles from './BirdListChoosen.module.scss';

export const renderCardBird = () => {
  const dataInfoContainer = elementsCreate('div', styles['bird-list__data-info']);
  const dataInfoDetails = elementsCreate('div', styles['data-info__details']);

  const instruction = elementsCreate('p', styles['details_instruction']);
  instruction.innerHTML = `
  <span>Послушайте плеер.</span>
  <span>Выберите птицу из списка</span>`;

  dataInfoDetails.append(instruction);
  dataInfoContainer.append(dataInfoDetails);

  //   const cardBlock = elementsCreate();

  //   ===================

  //   const birdContainer = elementsCreate('div', styles['bird-list__container']);
  //   const birdListNAmes = elementsCreate('ul', styles['bird-list__name']);

  //   for (let i = 0; i < BIRDS_DATA[number].length; i++) {
  //     const nameItem = elementsCreate('li', styles['bird-list__item']);
  //     nameItem.innerHTML = `<span class="name-item_chekpoint"></span>
  //       ${BIRDS_DATA[number][i].name}`;

  //     birdListNAmes.append(nameItem);
  //   }

  //   birdContainer.append(birdListNAmes);

  //   const buttonNextLevel = elementsCreate('button', styles['button-next-level']);
  //   buttonNextLevel.innerHTML = 'Next Level';
  //   buttonNextLevel.disabled = true;

  //   birdList.append(birdContainer, buttonNextLevel);

  return dataInfoContainer;
};
