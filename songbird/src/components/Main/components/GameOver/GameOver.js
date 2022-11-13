import styles from './GameOver.module.scss';

export const renderGameOverBlock = () => {
  const container = document.createElement('section');
  container.classList.add(styles['game-over__container']);

  container.innerHTML = 'dskjhfdjkshf';

  //   birdRandom.innerHTML = '';

  //   // IMG
  //   const img = document.createElement('img');
  //   img.classList.add(styles['bird-random__img']);
  //   img.setAttribute('src', image);
  //   img.setAttribute('alt', 'bird');

  //   // обновление данныех в глобальном объекте
  //   store.birdHidden = randArray(BIRDS_DATA[store.stage]);

  //   // INFORMATION
  //   const name = renderBirdInformations(nameBird);
  //   const audio = renderHideAudio(store.birdHidden);

  //   birdRandom.append(img, name, audio);

  return container;
};
