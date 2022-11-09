export const renderBirdsName = (array, number, parentNode) => {
  for (let i = 0; i < array[number].length; i++) {
    const elements = document.createElement('li');
    elements.classList.add(styles['bird-menu__item']);
  }
};
