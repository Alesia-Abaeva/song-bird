import { variants } from 'src/const/variants-win';

export const generateResultsBlock = (results) => {
  let state;
  if (results > 0 && results < 30) {
    state = 'default';
  }
  if (results == 30) {
    state = 'win';
  }

  if (results == 0) {
    state = 'lose';
  }

  switch (state) {
    case 'win':
      variants.title = 'Поздравляем';
      variants.result = 'Вы набрали максимально возмножное колличество баллов 30 из 30!';
      variants.button = 'Докажи, что это было не везение';
      break;
    case 'default':
      variants.title = 'Вы можете лучше!';
      variants.result = `Вы набрали ${results} из 30!`;
      variants.button = 'Попробовать еще раз';
      break;
    case 'lose':
      variants.title = 'Повезет в любви!';
      variants.result = 'В птицах вы не специалист, да и кого это волнует?';
      variants.button = 'Попробовать еще раз';
      break;
  }

  return variants;
};
