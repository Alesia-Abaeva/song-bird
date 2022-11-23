import { store } from 'src';
import { LANGUAGES } from 'src/const/translation';

export const generateStart = () => {
  const startText = {
    title: null,
    result: null,
    button: null,
  };

  if (store.language === LANGUAGES.RU) {
    startText.title = 'Поющие птицы';
    startText.result = 'Игра, в которой вам предстоит угадать птичек по их пению!';
    startText.button = 'Начать игру';
  } else {
    startText.title = 'Singing birds';
    startText.result = 'A game in which you have to guess the birds by their singing';
    startText.button = 'Start game';
  }

  return startText;
};
