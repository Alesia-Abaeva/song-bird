import { renderPlayerContainer } from './conponents/PlayerContainer';
import { renderPlayerSound } from './conponents/PlayerSound';
import styles from './InformationAudio.module.scss';

export const renderHideAudio = () => {
  const informationAudio = document.createElement('div');
  informationAudio.classList.add(styles['infornation__audio']);

  const audio = document.createElement('audio');
  audio.classList.add('audio');
  // добавить атрибут src

  const audioPlayer = document.createElement('div');
  audioPlayer.classList.add(styles['audio__player']);

  const playerSound = renderPlayerSound();
  const playerContainer = renderPlayerContainer();

  audioPlayer.append(playerContainer, playerSound);

  // const playerContainer = document.createElement('div');
  // hideName.classList.add(styles['audio__player_container']);

  // const playerSound = document.createElement('div');
  // hideName.classList.add(styles['audio__player_sound']);

  informationAudio.append(audio, audioPlayer);

  return informationAudio;
};

// //

// const player = document.querySelector('.player'),
//   playBtn = document.querySelector('.play'),
//   prevBtn = document.querySelector('.play-prev'),
//   nextBtn = document.querySelector('.play-next'),
//   audio = document.querySelector('.audio'),
//   playIcon = document.querySelector('.play'),
//   songTitle = document.querySelector('.song-title'),
//   progressContainer = document.querySelector('.progress__container'),
//   progressSong = document.querySelector('.progress'),
//   songDurations = document.querySelector('.song-endTime'),
//   songCurrentTime = document.querySelector('.song-currentTime');

// // Song Index
// let songIndex = 0;

// //  Load song
// function loadSong(song) {
//   let { title, src, duration } = playList[songIndex];
//   songTitle.innerHTML = title;
//   songDurations.innerHTML = duration;
//   audio.src = src;
// }

// loadSong(playList[songIndex]);

// // Play and pause song
// async function playSong() {
//   playBtn.classList.add('pause');
//   await audio.play();
// }

// async function pauseSong() {
//   playBtn.classList.remove('pause');
//   await audio.pause();
// }

// playBtn.addEventListener('click', async () => {
//   const isPlay = playBtn.classList.contains('pause');
//   if (isPlay) {
//     await pauseSong();
//   } else {
//     await playSong();
//     // changePlayList(songIndex)
//   }
// });

// // Format tinme
// function formatTime(seconds) {
//   minutes = Math.floor(seconds / 60);
//   minutes = minutes >= 10 ? minutes : '0' + minutes;
//   seconds = Math.floor(seconds % 60);
//   seconds = seconds >= 10 ? seconds : '0' + seconds;
//   return minutes + ':' + seconds;
// }

// // Progress Bar
// function updateProgress(event) {
//   const { duration, currentTime } = event.srcElement;
//   songCurrentTime.innerHTML = formatTime(currentTime);
//   const prigressPercent = (currentTime / duration) * 100;
//   progressSong.style.width = `${prigressPercent}%`;
// }
// audio.addEventListener('timeupdate', updateProgress);

// // set progress
// function setProgress(event) {
//   const widthProgress = this.clientWidth;
//   const widthClickX = event.offsetX;
//   const durationF = audio.duration;
//   audio.currentTime = (widthClickX / widthProgress) * durationF;
// }

// progressContainer.addEventListener('click', setProgress);
// audio.addEventListener('ended', () => changeSong('next'));

// // volume
// const volIcon = document.querySelector('.soundOn'),
//   volBox = document.querySelector('.volume-box');

// function handleVolume() {
//   volIcon.classList.toggle('soundOff');
// }

// function toggleMute() {
//   var btnMute = document.querySelector('.toggle-mute');
//   if (audio.muted == false) {
//     audio.muted = true;
//   } else {
//     audio.muted = false;
//   }
//   handleVolume();
// }

// const range = document.querySelector('.volume-range');

// range.onchange = function () {
//   audio.volume = this.value / 100;
//   if (audio.volume == 0) {
//     volIcon.classList.add('soundOff');
//   } else volIcon.classList.remove('soundOff');
// };
