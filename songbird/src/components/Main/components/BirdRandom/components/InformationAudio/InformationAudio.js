import { store } from 'src';
import { formatTime } from 'src/utils/player/format-time';
import { handleVolume } from '../../../../../../utils/player/handle-volume';
import { pauseSong, playSong } from '../../../../../../utils/player/play-pause';
import { renderPlayerContainer } from './conponents/PlayerContainer';
import { renderPlayerSound } from './conponents/PlayerSound';

import styles from './InformationAudio.module.scss';

export const renderHideAudio = (sound) => {
  // получаем ссылку на аудио из глобального объекта
  const audioSrc = sound.audio;

  const informationAudio = document.createElement('div');
  informationAudio.classList.add(styles['infornation__audio']);

  const audio = document.createElement('audio');
  audio.classList.add('audio');
  audio.setAttribute('src', audioSrc);
  audio.setAttribute(
    'id',

    'audio_bird',
  );

  store.audio = audio;

  // let playerContainer;
  let duration;
  audio.onloadeddata = () => {
    duration = formatTime(audio.duration);
    // console.log('onloadeddata===', duration);

    const playerContainer = renderPlayerContainer(audio, duration, async (target) => {
      const isPlay = target.classList.contains('pause');
      if (isPlay) {
        await pauseSong(target, audio, styles['pause']);
      } else {
        await playSong(target, audio, styles['pause']);
      }
    });

    audioPlayer.innerHTML = '';
    audioPlayer.append(playerContainer, playerSound);
  };

  // добавить атрибут src

  const audioPlayer = document.createElement('div');
  audioPlayer.classList.add(styles['audio__player']);

  // FUNCTION SOUND-ON
  const playerSound = renderPlayerSound(audio, (target) => {
    console.log(target);
    handleVolume(target, audio);
  });

  const playerContainer = renderPlayerContainer(audio, 'loading');

  audioPlayer.append(playerContainer, playerSound);

  informationAudio.append(audio, audioPlayer);

  return informationAudio;
};
