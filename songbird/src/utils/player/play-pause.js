export const playSong = async (button, audio, className) => {
  button.classList.add(className);
  await audio.play();
};

export const pauseSong = async (button, audio, className) => {
  button.classList.remove(className);
  await audio.pause();
};
