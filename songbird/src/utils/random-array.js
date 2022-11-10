export const randArray = (array) => {
  const rand = (Math.random() * array.length) | 0;
  const rValue = array[rand];
  return rValue;
};
