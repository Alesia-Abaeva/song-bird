export const formatTime = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  minutes = minutes >= 10 ? minutes : '0' + minutes;
  let seconds1 = Math.floor(seconds % 60);
  seconds1 = seconds1 >= 10 ? seconds1 : '0' + seconds1;
  return minutes + ':' + seconds1;
};
