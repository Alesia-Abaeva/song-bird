export const loadSong = (song) => {
  let { title, src, duration } = playList[songIndex];
  songTitle.innerHTML = title;
  songDurations.innerHTML = duration;
  audio.src = src;
};
