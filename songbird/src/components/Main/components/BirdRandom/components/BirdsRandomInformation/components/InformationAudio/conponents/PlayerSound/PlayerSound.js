import styles from './PlayerSound.module.scss';
// import slylesIcon from '';
import { elementsCreate } from '../../../../../../../../../../utils/create-elements';

export const renderPlayerSound = () => {
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

  soundVolumeBox.append(volumoBoxRange);

  playerSound.append(buttonSoundOn, soundVolumeBox);

  return playerSound;
};
