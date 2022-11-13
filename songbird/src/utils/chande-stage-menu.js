export const changeStage = (number, array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].classList.remove('active');
    if (i === number) {
      array[i].classList.add('active');
    }
  }
};
