import { store } from 'src';
import { LANGUAGES } from 'src/const/translation';
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

  if (store.language === LANGUAGES.RU) {
    switch (state) {
      case 'win':
        variants.title = 'Поздравляем';
        variants.result = 'Вы набрали максимально возмножное колличество баллов 30 из 30!';
        variants.button = 'Докажи, что это было не везение';
        break;
      case 'default':
        variants.title = 'Поздравляем!';
        variants.result = `Вы набрали ${results} из 30!`;
        variants.button = 'Попробовать еще раз';
        break;
      case 'lose':
        variants.title = 'Повезет в любви!';
        variants.result = 'В птицах вы не специалист... но кого это волнует?';
        variants.button = 'Попробовать еще раз';
        break;
    }
  } else {
    switch (state) {
      case 'win':
        variants.title = 'Congratulations';
        variants.result = 'You have scored the maximum possible score of 30 out of 30!';
        variants.button = 'Prove it was bad luck';
        break;
      case 'default':
        variants.title = 'Congratulations';
        variants.result = `You scored ${results} out of 30!`;
        variants.button = 'Try again';
        break;
      case 'lose':
        variants.title = 'Lucky in love!';
        variants.result = 'You are not an expert in birds, and who cares?';
        variants.button = 'Try again';
        break;
    }
  }

  return variants;
};
