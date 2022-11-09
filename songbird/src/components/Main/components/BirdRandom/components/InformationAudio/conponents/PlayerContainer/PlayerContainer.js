import { elementsCreate } from 'src/utils/create-elements';
import styles from './PlayerContainer.module.scss';

export const renderPlayerContainer = (duration, onPlay) => {
  const playerContainer = document.createElement('div');
  playerContainer.classList.add(styles['audio__player_container']);

  // TIMER CONTAINER
  const timerContainer = document.createElement('div');
  timerContainer.classList.add(styles['player__timer_container']);

  //   progress
  const playerProgress = document.createElement('div');
  playerProgress.classList.add(styles['player__progress']);

  const progress = document.createElement('div');
  progress.classList.add(styles['progress']);

  playerProgress.append(progress);

  //   timer
  const timer = elementsCreate('div', 'player__timer');

  const timerCurrentTime = document.createElement('span');
  timerCurrentTime.setAttribute('id', 'timer_currentTime');
  // timerCurrentTime.classList.add(styles['timer_currentTime']);
  timerCurrentTime.classList.add(styles['timer_description']);
  timerCurrentTime.innerHTML = '00:00';

  const timerEndTime = document.createElement('span');
  timerEndTime.setAttribute('id', 'timer_end');
  // timerEndTime.classList.add(styles['timer_end']);
  timerEndTime.classList.add(styles['timer_description']);
  timerEndTime.innerHTML = duration;

  timer.append(timerCurrentTime, timerEndTime);

  timerContainer.append(playerProgress, timer);

  //   img.setAttribute('src', COVER_CARDS);
  //   img.setAttribute('alt', 'bird');

  // CONTROLS
  const playerControls = elementsCreate('div', 'player__controls');
  const playButton = elementsCreate('button', 'play');
  playButton.classList.add(styles['player-icon']);

  playButton.onclick = (event) => onPlay(event.target);

  playerControls.append(playButton);

  playerContainer.append(timerContainer, playerControls);

  const audio = document.querySelector('.audio');
  console.log(audio);

  return playerContainer;
};
