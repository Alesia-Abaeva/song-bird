export const randArray = (array) => {
  console.log(array, 'array ');
  const rand = (Math.random() * array.length) | 0;
  const rValue = array[rand];
  return rValue;
};
