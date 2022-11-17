import { store } from 'src';
import { updateApp } from 'src/components';
import { BIRDS_DATA } from 'src/const/birds';

const { LOCAL_STORAGE_KEYS } = require('src/const/local-storage');
const { setLocalStorage } = require('./local-storage');

export const changeAppLanguage = (language) => {
  setLocalStorage(language, LOCAL_STORAGE_KEYS.LANGUAGE);
  store.language = language;

  const newBirds = BIRDS_DATA[language].flat();

  store.birdsArray = store.birdsArray.map((bird) =>
    newBirds.find(({ species }) => species === bird.species),
  );

  updateApp();
};
