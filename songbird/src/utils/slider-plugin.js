export const slidesPlugin = (activeSlide = 0) => {
  const slides = document.querySelectorAll('.scroll_bird-block'); // собрали все слайды
  console.log(slides);
  slides[activeSlide].classList.add('active-slider');

  // проходимся циклом по всем слайдам и вешаем слушателя событий
  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active-slider');
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active-slider');
    });
  }
};
