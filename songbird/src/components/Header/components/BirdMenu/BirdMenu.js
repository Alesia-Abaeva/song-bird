import { store } from 'src';
import { LANGUAGES } from 'src/const/translation';
import { BIRD_SPECIES } from '../../../../const/birds-species';
import styles from './BirdMenu.module.scss';

export const renderBirdMenu = () => {
  const birdMenu = document.createElement('div');
  birdMenu.classList.add('header__bird-menu');

  // LIST
  const birdMenuList = document.createElement('ul');
  birdMenuList.classList.add(styles['bird-menu__list']);

  // SCORE
  for (let i = 0; i < BIRD_SPECIES[store.language].length; i++) {
    const birdMenuItem = document.createElement('li');
    birdMenuItem.classList.add(styles['bird-menu__item']);

    if (i === store.stage) {
      birdMenuItem.classList.add(styles['active']);
    }

    const itemLink = document.createElement('a');
    itemLink.classList.add(styles['item_link']);
    itemLink.innerHTML = `${BIRD_SPECIES[store.language][i]}`;

    birdMenuItem.append(itemLink);
    birdMenuList.append(birdMenuItem);
  }

  birdMenu.append(birdMenuList);

  return birdMenu;
};
