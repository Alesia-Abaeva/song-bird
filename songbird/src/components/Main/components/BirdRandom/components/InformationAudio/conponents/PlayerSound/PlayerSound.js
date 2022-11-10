import styles from './PlayerSound.module.scss';

// import slylesIcon from '';
import { elementsCreate } from 'src/utils/create-elements';
import { store } from 'src';

export const renderPlayerSound = (audio, muted) => {
  const playerSound = elementsCreate('div', 'audio__player_sound');

  const buttonSoundOn = elementsCreate('button', 'sound-on');
  buttonSoundOn.classList.add(styles['toggle-mute'], styles['player-icon']);

  const soundVolumeBox = elementsCreate('div', styles['sound_volume-box']);
  const volumoBoxRange = elementsCreate('input', styles['volume-box_range']);
  volumoBoxRange.setAttribute('type', 'range');
  volumoBoxRange.setAttribute('set', '1');
  volumoBoxRange.setAttribute('value', '80');
  volumoBoxRange.setAttribute('min', '0');
  volumoBoxRange.setAttribute('max', '100');

  // оегулятор громкости
  volumoBoxRange.onchange = function () {
    console.log(audio.volume);
    audio.volume = this.value / 100;
    if (audio.volume == 0) {
      buttonSoundOn.classList.add('sound-off');
    } else buttonSoundOn.classList.remove('sound-off');
  };

  buttonSoundOn.onclick = (event) => muted(event.target);

  soundVolumeBox.append(volumoBoxRange);

  playerSound.append(buttonSoundOn, soundVolumeBox);

  return playerSound;
};
