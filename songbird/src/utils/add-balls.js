export const addBalls = (boolean) => {
  let score = 5;
  if (!boolean) {
    score = --score;
  }
  return score;
};
