import { BIRD_SPECIES } from '../../../../const/birds-species';
import styles from './BirdMenu.module.scss';

export const renderBirdMenu = () => {
  const birdMenu = document.createElement('div');
  birdMenu.classList.add('header__bird-menu');

  // LIST
  const birdMenuList = document.createElement('ul');
  birdMenuList.classList.add(styles['bird-menu__list']);

  // SCORE
  for (let i = 0; i < BIRD_SPECIES.length; i++) {
    const birdMenuItem = document.createElement('li');
    birdMenuItem.classList.add(styles['bird-menu__item']);

    if (i === 0) {
      birdMenuItem.classList.add(styles['active']);
    }

    const itemLink = document.createElement('a');
    itemLink.classList.add(styles['item_link']);
    itemLink.innerHTML = `${BIRD_SPECIES[i]}`;

    birdMenuItem.append(itemLink);
    birdMenuList.append(birdMenuItem);
  }

  birdMenu.append(birdMenuList);

  return birdMenu;
};

// for (let value of valuesPuzzle) {
//     const puzzleNumber = document.createElement("button");
//     puzzleNumber.classList.add("item");
//     puzzleNumber.setAttribute("data-matrix-id", value);
//     puzzleNumber.setAttribute("draggable", true);

//     puzzleNumber.innerHTML = `<span class="button-border">${value}</span>`;
//     // puzzleNumber.innerHTML = `<span class="button-border" draggable=true>${value}</span>`;

//     puzzleContainer.appendChild(puzzleNumber);
//   }
// }
