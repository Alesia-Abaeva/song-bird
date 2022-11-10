export const handleVolume = (element, audio) => {
  element.classList.toggle('sound-off');
  if (audio.muted == false) {
    audio.muted = true;
  } else {
    audio.muted = false;
  }
};
